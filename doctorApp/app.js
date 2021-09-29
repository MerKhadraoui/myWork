const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const patients = require("./router/patients");
const registration = require("./router/registration");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/patients", patients);
app.use("/registration", registration);

const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

app.get("/", (req, res) => {
  res.status(200).render("homePage", { title: "bien venu chez Nous" });
});

module.exports = app;
