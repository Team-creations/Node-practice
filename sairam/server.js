const express=require("express");

const connectionDb=require("./mongodb");

const Obj=require("./schema");

const app=express();

app.use(express.json());

connectionDb();

app.post("/obj",async (req,res)=>{
    const{id,title}=req.body;
    try{
         const obj=new Obj({id,title});
    await obj.save();
    res.json("obj added sucessfully");
        
    }
    catch(err){
         res.json("obj not added sucessfully");

    }
   
})


app.listen(3000,()=>{
    console.log("server is running");
})