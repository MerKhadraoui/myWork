// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
const scrabblvalues = [
  { tile: "“N”", score: 1 },
  { tile: "“K”", score: 5 },
  { tile: "“Z”", score: 10 },
  { tile: "“X”", score: 8 },
  { tile: "“D”", score: 2 },
  { tile: "“A”", score: 1 },
  { tile: "“E”", score: 1 },
];
const scrabbl = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};

console.log(scrabbl(scrabblvalues));
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays:
//one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
const keysValuesArr = (obj) => {
  let result;
  let valueArr = Object.values(obj);
  let keysArr = Object.keys(obj);
  return (result = [keysArr, valueArr]);
};
console.log(keysValuesArr({ a: 1, b: 2, c: 3 }));
// *IsBank** Write a function that checks whether the user has entered a valid German bank account.

// Note: German bank accounts should starts with DE and has 20 number after that.

// // DExxxxxxxxxxxxxxxxxxxx

// Examples :

// > bankChecker("Hi, why you need my bank account? "); -> There was no bank account in the text

// > bankChecker("I delete, have bank DE"); -> This is not a valid bank account

// > bankChecker("DQQQQQQE12100110013000400011")); -> The bank account DE12100110013000400011 is valid

const IsBank = (str) => {
  let result = {};
  let strArr = str
    .split("")
    .filter((item, index) => item[index] == "D" && item[index + 1] == "E");
  return strArr;
};
console.log(IsBank("Hi, why you need my bank account? "));

function minMax(arr) {
  let newArr = arr.sort();
  console.log([newArr[0], newArr[newArr.length - 1]]);
  return;
}
minMax([1, 9, 2, 5, 3]);
//Christmas Eve is almost upon us, so naturally we need to prepare some milk
// and cookies for Santa! Create a function that accepts a Date object and returns
// true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month
//is 0 based,
//meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  const month = date.getMonth();
  console.log(month);
  const day = date.getDay();
  console.log(day);
  if (month == 11 && day == 24) {
    return true;
  } else {
    return false;
  }
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));

// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number.
// To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value,
// value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
// for (let [key, val] of Object.entries(zain)) {
//   console.log(`${key}: ${val}`);
// }
let drinks1 = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];
function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}
console.log(sortDrinkByPrice(drinks1));

//Create a function that takes two arrays and insert the second array in the middle of the first array.
function tuckIn(arr1, arr2) {
  arr2.push(arr1[1]);
  arr2.unshift(arr1[0]);
  console.log(arr2);
  return arr2;
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

//Create a function to return the amount of potatoes there are in a string.

function potatoes(str) {
  return str.split("potato").length - 1;
}
console.log(potatoes("potatopotato"));
// f two or more resistors are connected in parallel, the overall resistance of the circuit reduces. I
// t is possible to calculate the total resistance of a parallel circuit by using this formula:

function parallelResistance(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = Math.pow(arr[i], -1);
    sum += x;
  }

  return Math.pow(sum, -1);
}
// console.log(parallelResistance([6, 3, 6]));
// console.log(parallelResistance([500, 500, 500]));

// other way
function parallelResistance(arr) {
  return +(1 / arr.reduce((a, b) => a + 1 / b, 0)).toFixed(1);
}

// didnot indestande eval()
function isTrue(relation) {
  return eval(relation.replace("=", "==="));
}
function error(n) {
  let result;
  const obj = {
    1: "Check the fan",
    2: "Emergency stop",
    3: "Pump Error",
    4: "c",
    5: "Temperature Sensor Error",
  };

  n <= 5 && n > 0 ? (result = `${obj[n]}: e${n}`) : (result = 101);

  return result;
}
console.log(error(0));
function flip(y) {
  const obj1 = {
    0: 1,
    1: 0,
  };
  return obj1[y];
}
console.log(flip(0));

// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
// Examples

// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]
function numberSplit(n) {
  const arr = [];
  if (n % 2 == 0) {
    arr.push(n / 2);
    arr.push(n / 2);
  } else {
    arr[0] = (n - 1) / 2;
    arr[1] = n / 2 + 1;
  }
  return arr;
}
console.log(numberSplit(11));
console.log(numberSplit(10));

// Hex to Binary

// Create a function that will take a HEX number and returns the binary equivalent (as a string).
// Examples

// toBinary(0xFF) ➞ "11111111"

// toBinary(0xAA) ➞ "10101010"

// toBinary(0xFA) ➞ "11111010"

const numLayers = (n) => {
  let theck = 0.05;
  let result = (theck * Math.pow(2, n)) / 100;
  return `${result}m`;
};
console.log(numLayers(1));
console.log(numLayers(21));

const funcTime = (timeInMint) => {
  const unixTimeZero = Date.parse(timeInMint);
  const javaScriptRelease = Date.parse(timeInMint);

  return unixTimeZero;
};
console.log(funcTime(59));

// Create a function that, given a string str, finds a letter that has a single occurrence.
// Return the letter in uppercase. If the input is empty, return an empty string "".

function singleOccurrence(str) {
  let char = "";
  let strArr = str.toUpperCase().split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.lastIndexOf(strArr[i]) == strArr.indexOf(strArr[i])) {
      char = strArr[i];
    } else {
      char = '" "';
    }
  }
  return char;
}
console.log(singleOccurrence("EFFEAABbs"));

// Create a function that calculates the missing value of 3 inputs using Ohm's law. The inputs are v, r or i (aka: voltage, resistance and current).

// Ohm's law:

// V = R * I

// Return the missing value rounded to two decimal places.
// Examples

// ohmsLaw(12, 220, "") ➞ 0.05

// ohmsLaw(230, "", 2) ➞ 115

// ohmsLaw("", 220, 0.02) ➞ 4.4

// ohmsLaw("", "", 10) ➞ "Invalid"

// ohmsLaw(500, 50, 10) ➞ "Invalid"

const ohmsLaw = (v, r, i) => {
  let resultfin;
  let result1 = r * i;
  let result2 = v / i;
  let result3 = v / r;
  inputArr = [v, r, i];

  if (
    inputArr.indexOf("") == 0 &&
    inputArr.indexOf("") == inputArr.lastIndexOf("")
  ) {
    resultfin = result1.toFixed(2);
  } else if (
    inputArr.indexOf("") == 1 &&
    inputArr.indexOf("") == inputArr.lastIndexOf("")
  ) {
    resultfin = result2.toFixed(2);
  } else if (
    inputArr.indexOf("") == 2 &&
    inputArr.indexOf("") == inputArr.lastIndexOf("")
  ) {
    resultfin = result3.toFixed(2);
  } else {
    resultfin = "Invalid";
  }

  // const obje = {
  //   v: result1,
  //   r: result2,
  //   i: result3,
  // };
  // for (let prop in obje) {
  //   console.log(obje[prop]);
  //   if ((prop = "")) {
  //     result = obje[prop];
  //   } else {
  //     result = "Invalid";
  //   }
  // }
  return resultfin;
};
console.log(ohmsLaw(12, 220, ""));
console.log(ohmsLaw("", 220, 0.02));
console.log(ohmsLaw(230, "", 2));
console.log(ohmsLaw(500, 50, 10));
console.log(ohmsLaw("", "", 10));

// Create a function that will take a HEX number and returns the binary equivalent (as a string).
// Examples

// toBinary(0xFF) ➞ "11111111"

// toBinary(0xAA) ➞ "10101010"

// toBinary(0xFA) ➞ "11111010"

function dec2Bin(dec) {
  if (dec >= 0) {
    return dec.toString(2);
  } else {
    return (-dec).toString(2);
  }
}
console.log(dec2Bin(0xff));
console.log(dec2Bin(0xfa));

const dectoBin = (dec) => {
  if (dec >= 0) {
    return dec.toString(2);
  } else {
    return -dec.toString(2);
  }
};
console.log(dectoBin(20));
console.log(dectoBin(44));
console.log(dectoBin(11));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
    if (this.age > other.age) {
      return "Joel is older than me.";
    } else if (this.age < other.age) {
      return "Samuel is younger than me.";
    } else {
      ("Lily is the same age as me.");
    }
  }
}
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));

// Filter out Strings from an Array

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// Examples

// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
const filterArray = (mixArr) => {
  let result = [];
  return (result = mixArr.filter((element) => typeof element == "number"));
};
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// Even All the Way

// Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.
// Examples

// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
const getOnlyEvens = (numbArr) => {
  let resultArr = [];
  for (let i = 0; i < numbArr.length; i += 2) {
    if (numbArr[i] % 2 == 0) {
      resultArr.push(numbArr[i]);
    }
  }
  return resultArr;
};
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));
// Sum of Cubes

// Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples

// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0

const sumOfCubes = (arrOfNumb) => {
  let result;
  return (result = arrOfNumb.reduce((acc, cur) => acc + Math.pow(cur, 3), 0));
};
console.log(sumOfCubes([3, 4, 5]));

let a = [
  [0.6, 4.0, -0.5],
  [3.0, -0.5, -0.1],
  [1.0, -0.2, -0.8],
  [7.0, -0.5, -0.8],
];

let b = a
  .reduce((acc, cur) => {
    cur.forEach((e, i) => (acc[i] = acc[i] ? acc[i] + e : e));
    return acc;
  }, [])
  .map((e) => e / a.length);

console.log(b);

// Number three, find three functions from Previous exercises, do them in three different methods,
// push your solutions to Github in three different branches aka each solution should be in a branch
