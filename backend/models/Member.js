const mongoose=require('mongoose')
const MemberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    noId:{
        type:Number,
        required:true,
    },
    noPhone:{
        type:Number,
        required:true,
    },
})

module.exports=mongoose.model("Member",MemberSchema)