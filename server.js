// Importing express module
const express = require("express");
const app = express();

// Handling GET / request
app.use("/", (req, res, next) => {
  res.send("Serving you Express!");
});

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
  res.send("hello response");
});

// Server setup
app.listen(3000, () => {
  console.log("Server is Running");
});
