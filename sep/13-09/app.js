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
const bookControllers = require("./controller/bookController");
const booksControllers = require("./controller/bookController");

app
  .route("/")
  .get(bookControllers.getAllAuthors)
  .post(booksControllers.addAurthor);
app;

app.route("/book").get(bookControllers.getAllBooks);
app.route("/book/:id").post(bookControllers.addNewBook);
app
  .route("/:id")
  .get(bookControllers.checkAuthor, bookControllers.getAuthorBooks);
app.route("/:id").delete(bookControllers.checkAuthor, bookControllers.deletOne);
app.route("/:id").put(bookControllers.checkAuthor, bookControllers.updatOne);

module.exports = app;
