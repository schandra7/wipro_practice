const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all employees
router.get("/", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add employee
router.post("/", (req, res) => {
  const { name, email, salary, department_id } = req.body;
  db.query(
    "INSERT INTO employees (name, email, salary, department_id) VALUES (?, ?, ?, ?)",
    [name, email, salary, department_id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Employee added", id: result.insertId });
    }
  );
});

module.exports = router;
