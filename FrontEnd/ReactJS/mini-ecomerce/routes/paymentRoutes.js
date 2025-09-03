const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all payments
router.get("/", (req, res) => {
  db.query(
    `SELECT pay.id, u.name AS user, p.name AS product, o.quantity, 
            (o.quantity * p.price) AS amount, pay.status, pay.method, pay.created_at
     FROM payments pay
     JOIN orders o ON pay.order_id = o.id
     JOIN users u ON o.user_id = u.id
     JOIN products p ON o.product_id = p.id`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// Add a payment (auto-calculated amount)
router.post("/", (req, res) => {
  const { order_id, status, method } = req.body;

  if (!order_id || !status || !method) {
    return res.status(400).json({ message: "order_id, status, and method are required" });
  }

  // Find product price and quantity from order
  db.query(
    `SELECT o.quantity, p.price 
     FROM orders o 
     JOIN products p ON o.product_id = p.id 
     WHERE o.id = ?`,
    [order_id],
    (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res.status(404).json({ message: "Order not found" });
      }

      const { quantity, price } = result[0];
      const amount = quantity * price;

      // Insert payment with calculated amount
      db.query(
        "INSERT INTO payments (order_id, amount, status, method) VALUES (?, ?, ?, ?)",
        [order_id, amount, status, method],
        (err, insertResult) => {
          if (err) throw err;

          res.json({
            id: insertResult.insertId,
            order_id,
            amount,
            status,
            method,
          });
        }
      );
    }
  );
});

module.exports = router;