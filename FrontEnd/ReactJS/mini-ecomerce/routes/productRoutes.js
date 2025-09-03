const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add product
router.post("/", (req, res) => {
  const { name, price, stock } = req.body;
  db.query("INSERT INTO products (name, price, stock) VALUES (?, ?, ?)", [name, price, stock], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, price, stock });
  });
});

module.exports = router;
