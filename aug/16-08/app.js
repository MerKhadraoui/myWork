const express = require("express");
const app = express();
const morgen = require("morgan");
app.use(morgen("dev"));
const createError = require("http-errors");
const userRouter = require("./router/users");
app.use("/users", userRouter);
// Mideleware
// app.use((req, res, next) => {
// if (!req.query.username)
//     return next(createError(401, "login to see this page"));
// });
// app.use("/admine", (req, res, next) => {
//   if (!req.query.userName)
//     return next(createError(401, "Plrese login to see this page"));
//   next();
// });
app.post("/bill", (req, res, next) => {
  next(
    createError(402, "no mony ", {
      tetail: {
        yourBalance: 400,
        iteamCost: 6000,
      },
    })
  );
});
app
  .get("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a GET req" });
  })
  .post("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a POST req" });
  })
  .put("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a PUT req" });
  })
  .delete("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a DELETE req" });
  });
module.exports = app;
