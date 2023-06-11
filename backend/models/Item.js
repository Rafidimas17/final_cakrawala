const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    default: 'Indonesia'
  },
  province: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    default: 'night'
  },
  sumBooking: {
    type: Number,
    default: 0
  },
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  },
  imageId: [{
    type: ObjectId,
    ref: 'Image'
  }],
  featureId: [{
    type: ObjectId,
    ref: 'Feature'
  }],
  activityId: [{
    type: ObjectId,
    ref: 'Activity'
  }],
  usersId:{
    type:ObjectId,
    ref:"Users"
  },
  trackId: [{
    type: ObjectId,
    ref: 'Track'
  }],
})

module.exports = mongoose.model('Item', itemSchema)