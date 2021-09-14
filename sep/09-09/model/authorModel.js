const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  _id: false,
  titel: String,
  issueYear: Number,
});
const autherSchema = new mongoose.Schema({
  authorName: String,
  books: [bookSchema],
});
module.exports = mongoose.model("auther", autherSchema);
