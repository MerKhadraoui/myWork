const arr1 = [];
arr1.push("meriem");
console.log(arr1);

const arr2 = ["good", "day"];
// new Array
const arr3 = new Array(); // new preserved keeyword for Javascript
console.log(arr3);
//.of()
let newArr = Array.of(1, 22, 20, 58);
console.log(newArr);
// .sort()
// to sort the elements in an array
// will use the UTF-16 code
let alpha = ["h", "b", "g"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);

// .reverse()
// to reverse an array aka first is last and last is first
let crayzyArr = ["4", "45", "54"];
let crazyArrRe = crayzyArr.reverse(); //#############################
console.log(crazyArrRe);
// .isArray()
// true or false
let bool = Array.isArray(crazyArrRe);
console.log(Array.isArray(crazyArrRe));

// .lastIndexOf()
// will start searching backwards
// -1 means nothing been found
const arr4 = ["go", "we", "Home", "we", "I"];
console.log(arr4.lastIndexOf("we"));
console.log(arr4.indexOf("we"));

// .fill()
// (what,from,to) => (0,2,3)
let arr5 = [11, 75, 44, 58, 68, 18];
let newArr5 = arr5.slice().fill(25, 0, 6);
console.log(newArr5);
console.log(arr5);
// do

let result = "";
let i = 0;
let j = 0;
do {
  //   result = result + ", " + i;
  console.log("This is the first Loop");
  i++;
} while (i < 5);

// expected result: "12345
// while
let looPOne = 0;

while (looPOne < 6) {
  console.log(looPOne);
  looPOne++;
}

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
const duplic = (numArr) => {
  let result = [];
  for (let i = 0; i < numArr.length; i++) {}
};
