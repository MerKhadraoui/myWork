// server
require("dotenv").config();
const express = require("express");
const { restart } = require("nodemon");
const app = express();
const PORT = process.env.PORT || 5000;
//http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hey, I am home oage");
});
//http://localhost:5000/abaut
app.get("/about", (req, res) => {
  res.send("Hey, I am home page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
