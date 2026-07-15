const mysql=require("mysql2");
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123S@i123",
    database:"users"});

    db.connect((err)=>{
        if(err){
            console.log("connection failed");

        }
        else{
            console.log("connected to mysql");
        }
    });

    module.exports=db;

