const express = require("express");
const router = express.Router();
//this is the root route
router.get("/", (req, res) => {
  res.send("Hey this the user page");
});
//uri localhost:5000/users/about
router.get("/about", (req, res) => {
  res.send("Hey this the user about page");
});

module.exports = router;
