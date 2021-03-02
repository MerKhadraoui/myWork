// let, const, var";
// strings
//         012345567910

// bracket notions

// Escaping spatial characters (\n , \' , \" )

// numbers
// typeof
console.log(typeof float);
console.log(typeof something);
console.log(typeof console);

// booleans
let bool = true;
// conditions (===, !==, >=, <=, >, <)
// =
// ==
// ==
// ternary Operator
console.log(true ? "I like apple 🍏" : "Hi cool I like pizza 🍕");

// Js methods from Math(.max , .min  , .floor , .ceil ,random   )

console.log(Math.max(22, 3, 45, 555, -1)); // 6675
console.log(Math.min(1, 2, 455, 6675, 2, -1)); // -1
let num1 = 33.5;
console.log(Math.floor(num1)); //33
console.log(Math.ceil(num1)); //34
// -3 -2 -1 0 1 2 3
let lastName = "Nsreeny     ";
console.log(str3.trim());
console.log(str3.length);
//                           floor (0.444 * 2)
let randomNum = Math.floor(Math.random() * str3.length);
// Js methods for str (.trim , .length , .includes , .split , .toUpperCase , .toLowerCase, .parseInt(string to intiger))
arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
userName = "Hadi    ";
lastName = "Nsreeny     ";
let newLastName = lastName.trim().toUpperCase();
console.log(Math.floor(1.22) / Math.random());
let str4 = "Hi I like. I need a  🍣. I want to sleep. ";
console.log(str4.includes("ooooo"));
let strToArr = str4.split(".");
//console.log(userName.length);
// if
// || or, && and
// functions
function funName() {}
// [    ] {    }   ( ) <> ; : , . - _ / \ ! ? @ %  $
console.log(funName(44, 33));
// Es6 function
const functionName = () => {};

// array////////////////////////////////////////////////////////////////////////7
// const arr1 = []; // 1st way
arr1.push("Hi");
// new Array
const arr3 = new Array();
arr3.push("cool");
//.of()
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);
// .sort()
// to sort the elements in an array
// will use the UTF-16 code
let alpha = ["c", "b", "a", "A", "1", "$"];
let newSortedAlpha = alpha.sort();
// .reverse()
// to reverse an array aka first is last and last is first
let crazyArr = [3, 55, 2];
let crazyArrRe = crazyArr.reverse();
let newCrazy = ["A", "B", "c", "D"];
// .isArray()
// true or false
let bool = Array.isArray([]);
console.log(bool);
// .lastIndexOf()
// will start searching backwards
// -1 means nothing been found
let arr4 = ["Hi", "I", "you", "you", "i"];
arr4.lastIndexOf("you"); // 3
arr4.indexOf("you"); // 2
// .fill()
// (what,from,to) => (0,2,3)
let arr5 = [22, 34, 6, 7, 4, 4, 3];
// let newArr5 = arr5.fill(101, 1,4);
let newArr5 = arr5.fill(101, 3);
// do
let counter = 1000;
do {
  console.log(`counter is now at ${counter}`);
  //arr5.push("Hi");
  counter++;
} while (counter <= 10 && userLog);
// while
let loopOne = 0;
while (loopOne < 5) {
  loopOne++;
  console.log(loopOne);
}
// Array.map( ()=>{})
const newCity = cities.map((city, index) => {});
// .reduce()
const numArr = [1, 2, 2, 2, 2];
const reducer = numArr.reduce((acc, cur) => acc + cur, 50);
console.log(reducer);
// .filter((letter) => letter == chr)
arr.filter((letter) => letter == chr);
//const currentYear = new Date().getFullYear();
//const userAge = currentYear - parseInt(year);
// let, var, const local vs global////////////////////////////////////////////////////////////////////////////77777777
// global
// {
// // local
// }

// functions inside functions
//
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  } //      9       +       16        = 25
  return second(num1) + second(num2);
}

console.log(main(3, 4));

// Nested scopes: Accessing outer global variables
let nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = false;
    nice = false;
    let fat = true;
    console.log(`innerFunction : big =  ${big}, nice = ${nice}`);
    return num + 10;
  };
  // console.log(fat);
  //            13        +      14  =    27
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));
//console.log(fat);
// Closure
let number = 10;
function fun() {
  return number + number;
}
console.log(fun());
number = 33;
console.log(fun());

// invoking == calling
// functions that return other function
const add = (() => {
  let counter = 0;

  return () => {
    counter++;
    return counter;
  };
})();

console.log(add());
console.log(add());

// SIAF
// self-invoking anonymous function
(function () {
  console.log("Hi");
})();
(() => {
  console.log("Hi");
})();
// IIFE
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

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
function multiplier(num) {
  // outer function
  return (x) => x * num; // inner function
}
const times = multiplier(2)(5);
console.log(times);

let all = 3;
(() => {
  let all = "hey";
  console.log(all);
})();
console.log(all);

// trim()
let str = "   hi    ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());
// startsWith()
let text = "Hej, it's ME";
console.log(text.startsWith("we"));
console.log(text.startsWith("Hej"));
// endsWith()
console.log(text.endsWith("."));
console.log(text.endsWith("s ME"));
// charAt()
let chr = "Üghhvbnn";
console.log(chr.charAt(0)); //output Ü
console.log(chr[0]);
// arr[i][0]
const arr = ["Hadi", "Olga"];
console.log(arr[0][0] + arr[0][3]);
// charCodeAt()
//  will return integer between 0 and 65535 that replaces the UTF-16 code

// common character codes UTF-32 UTF-16  UTF-8  ASCII   A 00001111

// ASCII = American Standard Code for Information Interchange
console.log(chr.charCodeAt(0));
// object ///////////////////////////////////////////////////
// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value
// Object Literal
const save = new Object();
// cool for 😎
for (let prop in userObj) {
  console.log(`${prop} : ${userObj[prop]}`);
}

// Object.keys
let keysArr = Object.keys(person);

// Object.values
Object.values(person);

// Object.assign
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4); // combing multi obj
// Object.defineProperty()
const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: 22,
  writable: false,
});
// Object.defineProperties()
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: true,
  },
  p2: {
    value: "nice",
    writable: false,
  },
  p3: {
    value: 102,
    writable: false,
  },
});

// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.
const person2 = {
  name: "Hadi",
  age: 31,
  city: "Berlin",
};
for (let prop in person2) {
  console.log(`${prop} : ${person2[prop]}`);
}

// Create a function that returns an array of the properties of a javascript object.
//   Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
//   ["name", "class", "course"]

const objPro = (obj) => {
  return Object.keys(obj);
};

console.log(objPro(person2));

console.log(objPro(person));
// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();
// Create a method that prints the following: "Zain Oil a student in class 48"

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
// Expected output:
//   ["tea", "coffee", "milk"]

const objVal = (obj) => {
  return Object.values(obj);
};
console.log(objVal(getObjectValues));

const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
//   Expected output:
//   [["cats", 1], ["dogs", 2], ["turtles", 4]]

function getKeysAndValues(obj) {
  return Object.entries(obj);
}

console.log(getKeysAndValues(objectToArray));
// delete

delete objectToArray.cats;
console.log(objectToArray);

// Object.hasOwnProperty()
const objectUserInfo = {
  userName: "Zain",
  age: 22,
};
console.log(objectUserInfo.hasOwnProperty("add"));
// Object.seal()
Object.seal(objectUserInfo);

objectUserInfo.add = "Berlin";
console.log(objectUserInfo);

// [{},{},{}]

// [[],[],[]]
/* {
  ob1:{
  },
  ob2:{},
} */
//Recursion && deep cloning
//pour protege votre obj 	Object.seal(obj)
Object.seal(obj);
