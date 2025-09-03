const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

// Use routes
app.use("/employees", employeeRoutes);
app.use("/departments", departmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
