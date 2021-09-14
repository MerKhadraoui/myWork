// console.log(process);
// console.log(process.argv);
// console.log(process.argv0);
// console.log(`Hey ${process.argv[1]}`);
// const fs = require("fs");
// fs.readFile("./longTxt.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });
// fs.writeFile("new.txt", "this is new Nodde.js file", (err) => {
//   if (err) throw err;
//   console.log("done");
// });
// const print = require("./stars");

// print();

function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

function parsNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number, Please try again.`);
    process.exit();
  }
  return number;
}
const args = process.argv.slice(2);
const [operation, ...rest] = args;
const numbers = rest.map(parsNum);
// sum 2 4 f
// avg 33 5 3 2 55

function med(numArray) {
  switch (operation) {
    case "sum":
      console.log(sum(numArray));
      break;
    case "avg":
      console.log(avg(numArray));
      break;
    default:
      console.log("I can not do this task yet, please write sum or avg");
  }
}
med(numbers);
