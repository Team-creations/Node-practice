const express = require("express");
const db = require("./db")

const app = express();

app.use(express.json());

app.get("/getstudents", (req, res) => {
    
    db.query(`select * from students`, (err, result) => {
        if(err){
            return res.status(500).json("no students found");
        }
        else {
            res.json(result);
        }
    })
});

app.post("/poststudent", (req, res) => {
    
    const {name, age, email} = req.body;
    
    //db.query(`insert into students (name, age, email) values('${name}', ${age}, '${email}')`, (err, result) => {

    db.query(`insert into students (name, age, email) values(?, ?, ?)`, [name, age, email], (err, result) => {
        if(err){
            return res.status(500).json("student not created")
        }
        else{
            res.json("student created successfully")
        }
    });
});

app.put("/updatestudents/:id", (req, res) =>{
    
    const {id} = req.params;
    const {name, age, email} = req.body;

    db.query(`UPDATE students SET name = ?, age = ?, email = ? WHERE id = ?`, [name, age, email, id], (err, result) => {
        if(err){
            return res.status(500).json("failed to update student")
        }
        else{
            res.json("student updated successfully")
        }
    });
});

app.delete("/removestudent/:id", (req, res) => {
    
    const {id} = req.params;
    const sql = `DELETE FROM STUDENTS WHERE id = ?`

    db.query(sql, [id], (err, result) => {
        if(err){
            return res.status(500).json({
                message: "failed to delete student",
                error: err.message
            });
        }
        res.json("student deleted successfully")
    });
});

app.listen(3000, () => {
    console.log("server is running in port 3000");
});