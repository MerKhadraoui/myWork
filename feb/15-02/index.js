// classe
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `${this.name}, you are too old ${this.age}`;
  }
}
const newPerson = new Person("meriem", 32);
console.log(newPerson.printData());

// extendes
class kid extends Person {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `this is a kid class from Person, ${this.name}`;
  }
}

const zain = new kid("zain", 22, 160);
console.log(zain.printData());
console.log(zain.show());

// Date
// UTC coordinated Universal Time
// CET Centeral European Time
// GMT Greenwich Mean Time
let time = new Date().getHours();
console.log(time);
// Mubashir is getting old but he wants to celebrate his 20th or 21st birthday only. It is possible with some basic maths skills.
//He just needs to select the correct number base with your help!

// For example, if his current age is 22, that's exactly 20 - in base 11. Similarly, 65 is exactly 21 - in base 32 and so on.

// Create a function that takes his current age and returns the given age 20 (or 21) years, with number base in the format specified in the below examples.

// Examples
// happyBirthday(22) ➞ "Mubashir is just 20, in base 11!"

// happyBirthday(65) ➞ "Mubashir is just 21, in base 32!"

// happyBirthday(83) ➞ "Mubashir is just 21, in base 41!"

const happyBirthday = (userAge) => {
  let result;
  if (userAge % 2 == 0) {
    result = Math.floor(userAge / 2);
    return `Mubashir is just ${userAge}, in base ${result}!`;
  } else {
    result = Math.floor((userAge - 1) / 2);
    return `Mubashir is just ${userAge}, in base ${result}!`;
  }
};
console.log(happyBirthday(22));

// Mubashir created a simple timer but he needs your help to make it readable inside a microcontroller.

// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.

// Examples
// simpleTimer(0) ➞ "00:00:00"

// simpleTimer(59) ➞ "00:00:59"

// simpleTimer(60) ➞ "00:01:00"

// simpleTimer(3599) ➞ "00:59:59"
function simpleTimer(seconds) {
  let hours = 0;
  let mint = 0;
  let sec = 0;
}

console.log(simpleTimer(35999));
let tim = Math.floor(3599 / 60);
let timMit = 3599 - tim;
let timHour = tim / 3600;
console.log(tim, timMit, timHour);
// const str1 = "5";

// console.log(str1.padStart(2, "0"));
// // expected output: "05"

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(maskedNumber);
// function correctTitle(str) {
//   let result = [];
//   let strCharToArr = str.split(" ");
//   for (let i = 0; i < strCharToArr.length; i++) {
//     lastChaToArr =
//       strCharToArr[i].split("-").strCharToArr[i][0].toUpperCase() +
//       strCharToArr[i].substr(1).toLowerCase().join(" ");
//     if (strCharToArr[i].length > 3) {
//       result.push(
//         lastChaToArr[0].toUpperCase() + lastChaToArr.substr(1).toLowerCase()
//       );
//     } else {
//       strCharToArr[i].result.push(strCharToArr[i].toLowerCase());
//     }
//   }
//   return result.join(" ");
// }
// console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));
// console.log(correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL."));
// console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));

// How Good is Your Name?
// Create a function that takes a string of name and checks how much good is the given name.
//A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function nameScore(name) {
  let result = [];
  let nameChar = name.split("");
  console.log(nameChar);
  for (let i = 0; i < nameChar.length; i++) {
    for (let prop in scores) {
      if (prop == nameChar[i]) {
        result = result.push(scores[prop]);
        console.log(result);
      }
    }
  }
  return result;
}
console.log(nameScore("meriem"));
