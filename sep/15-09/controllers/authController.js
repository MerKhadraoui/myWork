const User = require("../models/userModel");

const allowedAccess = {};
allowedAccess.rolCheck = (req, res, next) => {
  if (req.cookies.rol !== "ADMIN") {
    return res.status(401).json("NOT Alolowed <br> <a href='/'>HOME</a>");
  }
  next();
};
allowedAccess.allowedToDelete = (req, res, next) => {
  const id = req.params.id;
  if (req.cookies.rol == "ADMIN" || req.cookies.user_id == id) {
    next();
  } else {
    return res.status(401).json("NOT Alolowed <br> <a href='/'>HOME</a>");
  }
};
allowedAccess.allowedToView = (req, res, next) => {
  const username = req.params.name;
  const user = await User.findOne({ username });
  if (req.cookies.rol == "ADMIN" || req.cookies.user_id == user._id) {
    next();
  } else {
    return res.status(401).send("NOT Alolowed <br> <a href='/'>HOME</a>");
  }
};
module.exports = allowedAccess;
