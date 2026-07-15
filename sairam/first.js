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

app.get("/gettodo",(req,res)=>{
    let id=req.body.id;
    for(let i=0;i<todos.length;i++){

        if(todos[i].id==id){
             return res.json(todos[i]);
        }

    }
    return res.json("todo is not in the list")


})



app.post("/addtodo",(req,res)=>{
    console.log(req.body);
    todos.push(req.body);
    res.status(201).json("obj added sucessfully")
   
})


app.put("/updatetodo",(req,res)=>{

    let id=req.body.id;

    let title=req.body.title;

    for(let i=0;i<todos.length;i++){

        if(todos[i].id==id){
            todos[i].title=title

            return res.json("todo updated sucessfully")
        }


}

return res.json("todo is not in the list")}
)



app.delete("/deletetodo",(req,res)=>{
     let id=req.body.id;

      for(let i=0;i<todos.length;i++){

        if(todos[i].id==id){
          // todos=todos.filter(todo=>todo.id!==id);
          todos.splice(i,1);

           return res.json(
            todos+" todo removed sucessfully")
        }}
        return res.json("todo not removed");


})

app.get("/gettodo/:name",(req,res)=>{

    let id=req.params.name;
    for(let i=0;i<todos.length;i++){

        if(todos[i].id==id){
             return res.json(todos[i]);
        }

    }
    return res.json("todo is not in the list")
})








function fun1(){
    console.log("server is running at 3000")
}
app.listen(3000,fun1);




