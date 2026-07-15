const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());


app.get("/users", (req, res) => {

    db.query("SELECT * FROM users", (err, result) => {

        if (err) {
            return res.status(500).json({ message: "Database Error" });
        }

        res.json(result);

    });

});


app.post("/users", (req, res) => {

    const { id, name } = req.body;

    db.query(
        `INSERT INTO users (id, name) VALUES (${id}, '${name}')`,
        [id, name],
        (err, result) => {

            if (err) {
                return res.status(500).json({ message: "Database Error" });
            }

            res.status(201).json({ message: "User created" });

        }
    );

});

app.get("/users/:id", (req, res) => 
    { const id = req.params.id;
         db.query( `SELECT * FROM users WHERE id = ${id}`,
             (err, result) => { 
                if (err) { 
                    return res.status(500).json({ message: "Database Error" }); }
                     res.json(result); } ); });

app.listen(3000, () => {
    console.log("Server running...");
});