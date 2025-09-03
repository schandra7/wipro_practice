const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

// Create DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});

// Connect
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// API route - Get all employees
app.get("/employee", (req, res) => {
  db.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start server
app.listen(3001, () => console.log("Server running on port 3001"));
