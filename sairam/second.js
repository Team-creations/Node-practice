const express=require("express");

const app=express();

app.use(express.json());

let todos=[

    {id:22,
    title:"sairam"},

    {id:232,
    title:"sairam1"},

     {id:2432,
    title:"sairam2"}]


app.get("/gettodos",(req,res)=>{

    res.json(todos);
})


app.get("/gettodo/:id",(req,res)=>{
    console.log(req.params.id);
    res.json("found");
    

})

app.get("/gettodo",(req,res)=>{

    

    if(req.query.id){
          res.json("data found")

    }
    else{
        res.json("data not found")

    }


  
    
})


function fun1(){
    console.log("server is running at 3000")
}
app.listen(3000,fun1);





