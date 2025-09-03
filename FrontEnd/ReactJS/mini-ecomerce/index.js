const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes=require("./routes/paymentRoutes");

// Use routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/payments",paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
