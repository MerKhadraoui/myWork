require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(logger);
const PORT = process.env.PORT || 5000;
function logger(req, res, next) {
  console.log("this is log 1");
  next();
}
app.get("/", (req, res) => {
  // console.log(req);
  res.send("this is route rout");
});
app.get("/about", (req, res) => {
  //console.log(req);
  res.send("this is about rout");
});
app.get("/user", (req, res) => {
  //console.log(req.query);
  const usermane = req.query.name;
  res.send(`Hey ${usermane}`);
});
app.post("/login", (req, res) => {
  //console.log(req.body);
  const name = req.body.name;
  const passWord = req.body.passWord;
  if (name === "meriem" && passWord === "meiremkhjgutt") {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("invalid user");
  }
  res.send("cool");
});

app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
