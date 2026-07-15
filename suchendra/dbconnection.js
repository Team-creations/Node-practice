const db=require('mysql2');
const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Suchendra@25',
    database: 'users'
});
connection.connect((err)=>{
    if(err){
    console.log("connection failed...");
    }
  else{
    console.log("connection sucess....");
  }
});
module.exports=connection;

