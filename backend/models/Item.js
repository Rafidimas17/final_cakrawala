const mongoose=require('mongoose')
const {ObjectId}=mongoose.S
const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        default:"Indonesia",
    },
    city:{
        type:String,
        required:true,
    },
    isPopular:{
        type:Boolean,
        required:true,
    },
    imageId:[{
        type:ObjectId,
        ref:"Image"
    }],
    featureId:[{
        type:ObjectId,
        ref:"Feature"
    }],
    favoriteId:[{
        type:ObjectId,
        ref:"Favorite"
    }],
})

module.exports=mongoose.model("Item",ItemSchema)