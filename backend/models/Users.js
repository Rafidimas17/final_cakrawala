const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {ObjectId}=mongoose.Schema;
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type:String,
    required:true,
  },
  itemId:[{
    type:ObjectId,
    ref:"Item"
  }],
  organizer:{
    type:String,
    required:true,
  },
  noPhone:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  },
 
  bookingId:[{
    type:ObjectId,
    ref:"Booking"
  }],
})

usersSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
})

module.exports = mongoose.model('Users', usersSchema)