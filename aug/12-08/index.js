const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// olde school
// const bodyPraser = requier("body-parser");

// app.use(bodyPraser.urlencoded({ extended: true }));
// app.use(bodyPraser.json());
// app.use(body.raw());
app.use(express.json());
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// root route
app.get("/", (rqs, res) => {
  res.send("welcome to aur lowdb app");
});
app.get("/new", async (req, res) => {
  await db.defaults({ artical: [], user: {}, num: 1 }).write();
  res.send("new db is init");
});
app.get("/add", async (req, res) => {
  //url /add?id=1&title=cool
  const id = req.query.id;
  const title = req.query.title;
  console.log(id, title);
  db.get("artical").push({ id: id, title: title }).write();
  res.send(`New data being entered id: ${id} title: ${title}`);
});
app.get("/find", async (req, res) => {
  const idToFind = req.query.id;
  const result = await db.get("article").find({ id: idToFind }).value();
  let text = "";
  if (result) {
    text = result;
  } else {
    text = "sorry, not found";
  }
  res.send(text);
});

app.get("/user", async (req, res) => {
  const names = req.query.name;
  await db.set("user.name", names).write();
  res.send(`hi : ${names}`);
});
app.delete("/delete", async (req, res) => {
  //url/delete?title=cool
  const title = rqs.query.title;
  await db.get("articles", remove({ title: title })).write();
  res.state(200).send(`title= ${title} has been removed`);
});
// db init
app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
