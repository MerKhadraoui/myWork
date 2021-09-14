const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));
// hbs
const hbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
console.log(__dirname);
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
// setep
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const { body, validationResult } = require("express-validator");
// get it start
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
  })
);
app.get("/", (req, res) => {
  res.render("index", {
    title: "validation",
    done: false,
    errors: req.session.errors,
  });
  req.session.errors = null;
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about", data: "welcome to about" });
});
// validation middelwar
app.post(
  "/submit",
  // req.body
  body("email", "please write valid email").isEmail(),
  // next
  body("pass", "please write valid pass").isLength({ min: 6 }),
  body("passConf").custom((value, { req, location, path }) => {
    console.log(location, path);
    if (value != req.body.pass) {
      throw new Error("Password is not the same");
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.render("index", {
        title: "check your info",
        errors: errors.array(),
      });
    } else {
      res.render("index", {
        title: "cool",
        done: true,
      });
    }
  }
);
module.exports = app;
