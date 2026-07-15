const express=require("express");
const db=require('./dbconnection')

const app=express();

app.use(express.json());

app.get("/getstudents",(req,res)=>{
    
    db.query("select * from students",(err,result)=>{
        if(err){
            return res.json("no students found")
        }
        else{
            res.json(result);
        }

    })

})

app.post("/addstudent",(req,res)=>{

const {id,name}=req.body;
   

 

    db.query(`insert into students (id,name) values(${id}, '${name}')`,
        [id,name],
        (err,result)=>{
           if(err){
            return res.json("student not created")
        }
        else{
            res.json("student created sucessfully");
        }
        })

      //  db.query(`insert into students (id,name) values(22, 'suchendra')`,(err,result)=>{})

    

})


app.listen(3000,()=>{
    console.log("server running");
})
