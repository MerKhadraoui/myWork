// try catch will find the runtine errors but
let userAge = 23;
if (userAge == 24) {
  console.log("cool you are the best");
}
let userNume = "";
try {
  // con();
  if (userNume == "") throw "'sorry'"; // only one throw can be run
  if (useAge > 43) throw "sorry,";
} catch (err) {
  console.log(err);
} finally {
  console.log("I will run anyway");
}

function printInfo() {
  console.log("I am witing");
}

//const timerDisplay = setTimeout(printInfo, 2000);
const timerDisplay = setTimeout(() => console.log("I am wating"), 6000);
