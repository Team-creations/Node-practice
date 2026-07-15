const express=require('express');
const db=require('./dbconnection');
const app=express();
const host=3000;
app.use(express.json());

app.get('/usersdetails', (req,res)=>{
   db.query('select * from students',(err,result)=>{
    if(err){
        return res.status(500).json({error:err.message})
    }
    return res.json(result)
   });
   
})

app.post('/adduser',(req,res)=>{
    const { id,name,phoneno } = req.body;
    console.log(id,name,phoneno);
    db.query(`insert into students values(${id},'${name}','${phoneno}')`,(err,result)=>{
        if(err){
        return res.status(500).json({error:err.message})
    }
     return res.json("successfully added");
   });
})

app.put('/updateuser',(req,res)=>{
    const {id,phoneno} = req.body;
    db.query(`update students set phoneno=${phoneno} where id=${id}`,(err,result)=>{
        if(err){
        return res.status(500).json({error:err.message})
    }
     return res.json("successfully updated");
    })
})

app.listen(host,()=>{
    console.log("server running");
})