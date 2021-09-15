const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      (file.mimetype =
        "image/jpeg" ||
        file.mimetype == "image/png" ||
        file.mimetype == "image/gif")
    ) {
      cb(null, true);
    } else {
      cb(new Error("only, jpeg, gif, png files are OK!"), false);
    }
  },
});
router.get("/", (req, res) => {
  res.render("index", {
    title: "welcome",
    done: false,
    error: req.session.errors,
  });
  req.session.errors = null;
});
router.post("/register", upload.single("avatar"), userControllers.addUser);
router.get("/login", (req, res) => {
  if (req.cookies.sessionId) {
    res.send("you are alredy logged in ");
  } else {
    res.status(401).json("NOT Alolowed <br> <a href='/'>HOME</a>");
  }
  res.render("/login", {
    title: "login",
    done: false,
    errors: req.session.errors,
  });
});
router.post("/login", userControllers.login);
module.exports = router;
