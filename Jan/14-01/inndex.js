// let, const , var
let x = 10;
const personalId = 22434;
var mainAd = "hamburg";
//string
let str = "this string 23&&";
console.log(str[4]);
// escaping spatial characters (\n,\',\)
let strwithChr = "I'am \n Hi";
console.log(strwithChr);
// Numbers
let y = 5;
console.log(x + y);
let float = 22.5;
console.log(typeof float);

// pars
//booleans
let bool = true;
console.log(10 == 200);
// condition (===, !==, >=, <=, >, <)
let bool2 = false;
console.log(!bool2);
console.log(23 < 7);
let age = 12;
let ag2 = "12";
console.log(age == ag2); //true
console.log(age === ag2); // false
// ternary Operator
console.log(true ? "yeah" : "No");
console.log(false ? "yeah" : "No");
let resultStr = 1 < 55 ? "cool " : "oh sorry";
console.log(resultStr);

// Js methods form Math (.max, .min, .random, .floor, .ceil,)

console.log(Math.max(4234, 3455, 7676, 3445, 3345));
console.log(Math.min(4234, 3455, 7676, 3445, 3345));
let numb = -33.54;
console.log(Math.floor(numb)); //-34
console.log(Math.ceil(numb)); //-33
let str3 = "     hallo evryone";
let randomNum = Math.floor(Math.random() * str3.length);
console.log(str3[randomNum]);

//Js methods for str (.trim, .length, .includes, .split, .toUppercase, .toLowerCase)
console.log(str3.trim().length);
console.log(str3.trim().toUpperCase());
let str4 = "fun work to day ";
console.log(str4.includes("u"));
let strToArr = str4.split(" ");
console.log(strToArr);

// if
if (1 < 4) {
  console.log("cool");
}
console.log("not cool");

// function
function funName(num1, num2) {
  let sumnumbers = num1 + num2;
  return sumnumbers;
}
console.log(funName(5, 145));
//Es6 function
const functionNum = () => {
  return "I am Ec6 function";
};
console.log(functionNum());

// array
const arr = ["zerfa", "toma", "mido"];
console.log(arr);
console.log(arr[arr.length - 1]);
