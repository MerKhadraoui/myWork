const express = require("express");
const app = express();
const morgan = require("morgan");
// const userController = require("./controllers");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());
const path = require("path");
// monogDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
const patients = require("./router/patients");
const registration = require("./router/registration");
app.use("/patients", patients);
app.use("/registration", registration);
app.get("/", (req, res) => {
  res.status(200).render("homePage", { title: "bien venu chez Nous" });
});

module.exports = app;
