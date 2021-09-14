const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());

// Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
const bookController = require("./controller/bookController");
const booksController = require("./controller/bookController");
// POST new author
// GET all
app.route("/").get(bookController.getAll).post(bookController.addNewAuthor);

// GET one by id

app.route("/:id").get(bookController.getOnById);
// DELETE one by id //put// patch
app
  .route("/:id")
  .delete(bookController.deletByID)
  .patch(bookController.patchAuthorerData)
  .put(booksController.updatAuthorData);

module.exports = app;
