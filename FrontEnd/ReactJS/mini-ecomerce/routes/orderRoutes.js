const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all orders
router.get("/", (req, res) => {
  db.query(
    `SELECT o.id, u.name AS user, p.name AS product, o.quantity 
     FROM orders o 
     JOIN users u ON o.user_id = u.id 
     JOIN products p ON o.product_id = p.id`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// Place order
router.post("/", (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  // Check stock
  db.query("SELECT stock FROM products WHERE id = ?", [product_id], (err, result) => {
    if (err) throw err;
    if (result[0].stock < quantity) {
      return res.status(400).json({ message: "Not enough stock!" });
    }

    // Insert order
    db.query("INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)",
      [user_id, product_id, quantity], (err, orderResult) => {
        if (err) throw err;

        // Reduce stock
        db.query("UPDATE products SET stock = stock - ? WHERE id = ?", [quantity, product_id]);

        res.json({ id: orderResult.insertId, user_id, product_id, quantity });
      });
  });
});

module.exports = router;
