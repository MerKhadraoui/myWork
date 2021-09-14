const { Mongoose } = require("mongoose");
const { Author, Book } = require("../model/authorModel");
const mongoose = require("mongoose");
const booksControllers = {};
booksControllers.checkAuthor = async (req, res, next) => {
  //  const author = await Author.findOne({_id:req.params.id})
  const author = await Author.findById(req.params.id);
  try {
    if (!author) {
      return res.status(404).json({ message: "Author NOT Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  req.author = author;
  next();
};
booksControllers.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
booksControllers.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
booksControllers.getAuthorBooks = async (req, res) => {
  try {
    const authorBooks = await Author.findById(req.params.id).populate("books");

    console.log(authorBooks);
    res.status(200).json(authorBooks.books.map((book) => book.title));
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
booksControllers.addAurthor = async (req, res) => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    authorName: req.body.name,
  });
  try {
    await author.save();

    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
booksControllers.addNewBook = async (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      if (author) {
        const book = new Book({
          _id: new mongoose.Types.ObjectId(),
          author: req.params.id,
          title: req.body.title,
        });
        book.save();
        author.books.push(book);
        author.save();
        res.status(201).json({ message: "new book add" });
      } else {
        return res.status(404).json({ message: "Author not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
booksControllers.deletOne = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "This author is been deleted" });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
booksControllers.updatOne = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, {
      authorName: req.body.name,
    });
    author.save();
    res.status(200).json({ message: "This data has been updated" });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
module.exports = booksControllers;
