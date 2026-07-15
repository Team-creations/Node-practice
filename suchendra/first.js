const express = require('express');
const app = express()
const port = 3000
app.use(express.json());
var mobiles=[
    {
      id:1,  
      name:"realme P4x 5G",
      description:"realme P4x 5G (Matte Silver, 128 GB) (6 GB RAM)",
      price:"₹21,499"   
    },
    {
      id:2,
      name:"realme P4 lite 5G",
      description:"realme P4 Lite 5G (Mosaic Blue, 64 GB) (4 GB RAM)",
      price:"₹₹14,999"   
    },
    {
      id:3,
      name:"realme P4 Power 5G",
      description:"realme P4 Power 5G (TransBlue, 128 GB) (8 GB RAM)",
      price:"₹₹14,900"   
    }
]

app.get('/mobiles',(req,res)=>{
    res.send(mobiles)
})

app.get('/mobile',(req,res)=>{
    console.log(req.body)
    const id=req.body.id
    for(let i=0;i<mobiles.length;i++){
        if(id==mobiles[i].id){
            return res.send(mobiles[i])
        } 
    }
})
app.get('/mobiles/:id',(req,res)=>{
    const id=req.params.id
    console.log(id)
    for(let i=0;i<mobiles.length;i++){
        if(id==mobiles[i].id){
            return res.send(mobiles[i])
        } 
    }
})

app.post('/mobiles/add',(req,res)=>{
    let new_mobile=req.body
    mobiles.push(new_mobile)
    return res.send(mobiles)
})


app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})

