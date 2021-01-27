// parameters: Naming and order
const userPrint = (name, add, age) => {
  console.log(`Hi ${name}, your addresse ${add}, you are ${age} .`);
};
userPrint("Meriem Khadraoui", "Hamburg", "33");

// default value
const haalloUser = (userName = "Zains") => {
  //zains is default value
  console.log(`Hi ${userName}.`);
};
haalloUser("Meriem");
// Spread syntax ...
// ...array
const arr = ["hi ", "i", "you"];
const cloneArr = ["first index", ...arr, "last index"]; //add values in the cloneArr
console.log(cloneArr);
cloneArr[1] = "ther";
console.log(arr);
console.log(cloneArr);

// ...args
const sum = (x, y, ...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += x + y + args[i];
  }
  return result;
};
console.log(sum(5, 6, 65, 20, 4, 3, 5, 2, 1, 6, 2, 14));

const printFunThingsToDo = (usernam, ...args) => {
  console.log(
    `Hi ${usernam}, you Like ${args[0]}, and ${args[1]},and ${args[2]}`
  );
};

printFunThingsToDo("meriem", "coding", "Do Fun things", "cool draws");
// cool functions
const printMyName = () => console.log("meirem");

// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`
const books = ["quran", "sahih", "tafssir"];
const printBook = books.map((item, index) => `${index}, titel${item}`);
console.log(printBook);

const numbers = ["1", "3", "5", "7"].map((item) => parseInt(item));
console.log(numbers);

//.reduce
//Getting a in single autput value
const reducer = (acc, cur) => acc + cur; //or acc - cur//acc *cur
const resultArr = [2, 7, 9].reduce(reducer);
console.log(resultArr);
// .filter
// - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`
const names = ["zain", "nancy", "olga"];
const filtArr = names.filter((name) => name.length <= 4);
console.log(filtArr);
// .find

// - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`

const num1 = [2, 4, 5, 7, 2, 1, 6];
const bigerThanFive = num1.find((num) => num > 5);
console.log(bigerThanFive);

//  Maybe more 😏
///////////////////////////////////////////////7
// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"

const twofer = (str = "you") => console.log(`Two for me and one for ${str}`);
twofer("Fran");
twofer();

// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9
const exponent = (num, num2 = 1) => {
  return Math.pow(num, 2) * num2;
};
console.log(exponent(3, 3));
console.log(exponent(3));

// Write a function that it returns the total amount of arguments passed to it.
// e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1
const howManyArgs = (...args) => args.length;

console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs());

// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70

// const sum2 = (...args) => {
//   let result = 0;
//   for (let i = 0; i < args.length; i++) {
//     result += args[i];
//   }
//   return result;
// };
// console.log(sum2(25, 25, 20));

const sumNum = (...args) => {
  return args.reduce((acc, cur) => {
    return acc + cur;
  });
};
console.log(sumNum(25, 25, 20));

// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14

// hackerSpeak
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
const OddsAndEvens = (...args) => {
  const expectAutp = args.map((item, index) =>
    index % 2 == 0 ? item - 1 : item + 1
  );

  return expectAutp;
};
console.log(OddsAndEvens(3, 5, 2, 4));
console.log(OddsAndEvens(6, 9, 10, 20));
// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1

const howManyStr = (str, chr) => {
  return str
    .toLowerCase()
    .split("")
    .filter((item) => item == chr).length;
};
console.log(howManyStr("I like pizza", "i"));

// **c4n y0u r34d th15?**
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// - hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// - hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// - hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// const hackerSpeak=(strHacker)=>{
// let charchterArr=strHacker.oLowerCase().split("");
// const newHacherArr=charchterArr.map((item)=>
// }
