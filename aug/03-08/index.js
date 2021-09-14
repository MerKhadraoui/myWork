const fs = require("fs");
const math = require("./math");
// create file
// writeFile will create or over write

// appendFile will create file
fs.appendFile("newText.txt", "I am text from Node.js \n", (err) => {
  if (err) throw err;
  console.log("File is done");
});
// read File
fs.readFile("./newText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// read file Sync
// const data = fs.readFileSync("./text.txt");
// console.log(data.toString());
// console.log("reading sync Done");
// rename file
// fs.rename("./text.txt", "./renamed.txt", (err) => {
//   if (err) throw err;
//   console.log("renamed ");
// });
// delete file
// const filePathmane = "./test.txt";
// fs.unlink(filePathmane, (err) => {
//   if (err) throw err;
//   console.log("File deleted, done");
// });

// copy file
fs.copyFile("./original.txt", "copyOrigin.txt", (err) => {
  if (err) throw err;
  console.log("file copied");
});
// open file
fs.open("newText.txt", "w", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
console.log(math);
let x = 3;
let y = 6;
console.log(`x+y = ${math.sum(x, y)}`);
