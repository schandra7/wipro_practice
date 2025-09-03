const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all departments
router.get("/", (req, res) => {
  db.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add department
router.post("/", (req, res) => {
  const { name, location } = req.body;
  db.query(
    "INSERT INTO departments (name, location) VALUES (?, ?)",
    [name, location],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Department added", id: result.insertId });
    }
  );
});

module.exports = router;
