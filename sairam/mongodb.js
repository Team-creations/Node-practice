const mongoose=require("mongoose");

 async function connectionDb(){
    try{
        await mongoose.connect("mongodb+srv://sairam:123S%40i123@cluster0.wy6bipg.mongodb.net/student_db");
        console.log("connected");

    }
    catch(err){
        console.log(err);
    }
    
 }

module.exports=connectionDb;