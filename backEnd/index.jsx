// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// CRUD Routes
// Create
app.post('/create', (req, res) => {
  const { name, age } = req.body;
  const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
  db.query(sql, [name, age], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User created', result });
  });
});

// Read
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// Update
app.put('/update/:id', (req, res) => {
  const { name, age } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
  db.query(sql, [name, age, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User updated', result });
  });
});

// Delete
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User deleted', result });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
