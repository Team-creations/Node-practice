const db=require('mysql2');
const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Suchendra@25',
    database: 'users'
});
if(connection){
    console.log("connection established...");
}
else{
    console.log("connection failed....");
}
module.exports=connection;

