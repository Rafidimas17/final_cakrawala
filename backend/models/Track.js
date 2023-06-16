const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema;

const trackSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    itemId: {
        type: ObjectId,
        ref: 'Item'
      },
    addressId:{
        type:ObjectId,
        ref:"Address"
    }
})
module.exports=mongoose.model('Track',trackSchema)