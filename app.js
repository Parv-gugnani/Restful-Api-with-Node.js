const express = require("express");
const app = express();
const router = express.Router();

// Middleware to parse JSON in request body
app.use(express.json());

router.get("/", (req, res) => {
  res.status(200).json({
    message: "It works",
  });
});

app.use("/", router);

module.exports = app;
