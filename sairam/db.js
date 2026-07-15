const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123S@i123",
  database: "student_db"
});

db.connect((err) => {
  if (err) {
    console.log("Connection failed");
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = db;