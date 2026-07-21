const mongoose=require("mongoose");
const obj=new mongoose.Schema({
    id:Number,
    title:String
});

const model=mongoose.model("Sai",obj);

module.exports=model;