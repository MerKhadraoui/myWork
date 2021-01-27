// Functions declarations as values:
// const functionName = function(parameters){ ... }
// const functionName = (parameters) =>{ ... }
function display(str) {
  console.log(str);
}
// Es6 style
const Print = (str) => {
  console.log(str);
};

const sum = function (x, y) {
  return x + y;
};
sum(5, 8);

// Invoke the function(calling the function)

// call stack

// .map(()=>{}) is a method
const names = ["miya", "toma", "modi"];
//const cities=["berlin","hamburg","kölen"]
const newArr = names.map((name, i) => {
  console.log(`${name} is my name has index ${i}`);
});

// .reduce()
const numArr = ["1", "2", "6", "8"];
const reducer = numArr.reduce((acc, cur) => acc + cur, "tttt "
);
console.log(reducer);

// break;
// Breaking out of a loop:
let Tbox = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      Tbox += "T";
      console.log(Tbox);
    }
  }
}
// continue;
// Skipping an iteration:
let Tbox2 = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      continue;
    } else {
      Tbox += "T";
      console.log(i);
    }
  }
}
const arr1 = [2, 5, 6, 7, 1, 5, 6, 5, 6, 6, 5];
const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(cleanUp(arr1));
