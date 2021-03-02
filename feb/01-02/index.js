// var , let const vs global
//function

function main(num1, num2) {
  // auter function
  function second(n) {
    return n * n;
  }
  return second(num1) + second(num2);
}
console.log(main(3, 4));

// Nested scopes : Accessing auter global variablees
let nice = true;
const auterFunc = (x, y) => {
  let big = true;
  console.log(big + " auterfunc");

  const innerFunc = (num) => {
    big = false;
    nice = false;
    console.log(big + x + y + " innerfunc");
    return num + 10;
  };
  return innerFunc(x) + innerFunc(y);
};
console.log(auterFunc(3, 4));
// Closure  is for secure the cases and the app

let number = 20;
function fun() {
  return number + number;
}
number = 33; // not secure
console.log(fun());
const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
console.log(add());
console.log(add());
//SIAF self-invokiing anonymous funcc
(function () {
  console.log("hi");
})();
(() => {
  console.log("hi");
})();
//IIFE
// Immediately-invoked Function Expression
const sum = ((x, y) => {
  return x + y;
})(3, 4);
console.log(sum);

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
//add(2)(3)

const add2 = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add2(2)(3));

function multiplication(num) {
  return (x) => x * num;
}
const times = multiplication(2)(5);
console.log(times);

var all = 3;
(() => {
  all = "hey";
  console.log(all);
})();
console.log(all);

// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension
// until a person retires.
//The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
//If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000

((curAge, retiAge, monthEarn) => {
  if (retiAge <= curAge) {
    ("You’re already retired!");
  } else {
    let result;
    let percSaveEvryYear = (12 * (monthEarn * 5)) / 100;
    result = (retiAge - curAge) * percSaveEvryYear;
    console.log(result);
  }
})(40, 65, 2000);

// loops

// if .. else
let fat = true;
if (fat) {
  console.log("You need to eat less");
}

// ternary Operator
fat ? console.log("You need to eat less") : null;
// trim()
let str = "         Hi       ";
console.log(str.trim());

// trimEnd()

console.log(str.trimEnd());

// trimStart()

console.log(str.trimStart());

// startsWith()
let text = "Hey, it's Me";
console.log(text.startsWith("we"));
console.log(text.startsWith("Hey"));

// endsWith()
console.log(text.endsWith("."));
console.log(text.endsWith("e"));
// charAt()
let char = "M";
console.log(char.charAt(0));
// charCodeAt()
console.log(text.charCodeAt(4));
