const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priceId: [{
    type: ObjectId,
    ref:"Price"
  }],
  country: {
    type: String,
    default: 'Indonesia'
  },
  addressId:[{
    type:ObjectId,
    ref:"Address"
  }],
  isPopular: {
    type: Boolean,
    default: false
  },
  descriptionId: [{
    type: ObjectId,
    ref: "Description"
  }],
  unit: {
    type: String,
    default: 'day'
  },
  sumBooking: {
    type: Number,
    default: 0
  },
  categoryId: [{
    type: ObjectId,
    ref: 'Category'
  }],
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
  memberId: [{
    type: ObjectId,
    ref: 'Member'
  }],
  detailId: [{
    type: ObjectId,
    ref: 'DetailItem'
  }]
})
itemSchema.pre('findOneAndDelete', async function (next) {
  const item = this;

  try {
    // Hapus ID dari DetailItem
    await mongoose.model('DetailItem').updateMany(
      { itemId: { $in: item._id } },
      { $pull: { itemId: item._id } }
    );
    
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Item', itemSchema)