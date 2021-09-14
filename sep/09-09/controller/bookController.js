const AuthorModel = require("../model/authorModel");
const booksController = {};

booksController.getAll = async (req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.status(200).json(authors);
    console.log(authors);
  } catch (err) {
    // res.status(500).json({
    res.status(err.status).json({
      message: err.message,
    });
  }
};

booksController.addNewAuthor = async (req, res) => {
  //console.log(req.body);

  const author = new AuthorModel({
    authorName: req.body.name,
  });

  req.body.books.map((book) => {
    author.books.push({ title: book.title, issueYear: book.issueYear });
  });
  try {
    await author.save();
    res.status(201).json({
      message: "This author been added",
      author,
    });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
booksController.getOnById = async (req, res) => {
  try {
    const aurthor = await AuthorModel.findById(req.params.id);
    res.status(200).json({ aurthor });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
booksController.deletByID = async (req, res) => {
  try {
    const aurthor = await AuthorModel.findByIdAndDelete(req.paramas.id);
    //const author = await AuthorModel.findOneAndDelete({ _id: req.params.id });
    console.log(author);
    res.status(200).json({ message: "This author been deleted", author });
  } catch (err) {
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};
// PATCH
booksController.patchAuthorerData = async (req, res) => {
  try {
    const aurthor = await AuthorModel.findByIdAndUpdate(req.params.id, {
      authorName: req.body.name,
      books: req.body.books,
    });

    res.status(200).json({ message: "Some  data got changes ", aurthor });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
booksController.updatAuthorData = async (req, res) => {
  try {
    const author = await AuthorModel.findByIdAndUpdate(req.params.id, {
      $set: {
        authorName: req.body.name,
        books: req.body.books,
      },
    });
    res.status(200).json({ message: "Author being updated", author });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
module.exports = booksController;
