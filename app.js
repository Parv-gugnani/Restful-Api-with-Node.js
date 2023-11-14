const express = require("express");
const app = express();
const router = express.router();

const productRoutes = require("./api/products");

// Middleware to parse JSON in request body
app.use("/products", productRoutes);

module.exports = app;
