const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chandu@123",
    database: "learning_mysql"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("database connected");
});

module.exports = connection;