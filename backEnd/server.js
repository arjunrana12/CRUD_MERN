const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});


app.get('/', (req, res) => {
     const sql = "SELECT * FROM student";
     db.query(sql, (err, result) => {
          if(err) return res.json("Error inside server");
          return res.json(result);
     })
})

//Create
app.post('/student', (req,res) => {
const sql = "INSERT INTO student ('name', 'email') VALUES (?)";

    const values = [
        req,body.name,
        req,body.email
    ]

    db.query(sql, [values], (err, result) => {
        if(err) return res.json("error");
        return res.json(result);
    })
})

//Read
app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, (err, result) => {
         if(err) return res.json("Error inside server");
         return res.json(result);
    })
})

//Update or Edit

app.put('/update/:id', (req, res) => {
    const sql  = "UPDATE student SET 'Name'=?, 'Email'=? WHERE ID=?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
        if(err) return res.json("error");
        return res.json(result);
    })
})

//Delete

app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (res, result) => {
    if(err) return res.json("error");
    return res.json(result);
  })
})


app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});
