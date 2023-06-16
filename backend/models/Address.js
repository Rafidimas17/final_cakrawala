const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema;

const AddressSchema=mongoose.Schema({
    province:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    village:{
        type:String,
        required:true
    },
    itemId:{
        type:ObjectId,
        ref:"Item"
    }
})

module.exports=mongoose.model('Address',AddressSchema)