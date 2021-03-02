var x;
x = "";
console.log(typeof x);
///
true ? console.log("cool") : console.log("not cool");
let bool = 0;
//
let str = "meriemrrr";
console.log(str[str.length - 1]);
// trim()

let longStr = "Hi itas memeriem           ";
console.log(longStr.trim());

function display(str) {
  console.log(str);
}
display("meirem");
//// Numbers
let y = 3;
let w = 44;
console.log(w / y + w);
/// 0,2 0.2
let int1 = "1meriem";
console.log(int1);
let int2 = 1.5;
console.log(int1 + " " + int2);
isNaN(int1) ? console.log("yeah its  not number") : console.log("nop");
let int = 233;
console.log(int);
console.log("+++++++++++");
// converting
let newNum = parseInt(int1, 10);
console.log(newNum);

intStum = newNum + int2;
console.log(intStum);
let newFloat = parseFloat(int2);
console.log(newFloat);

// * + - /
let a = 56;
let b = 11;
let sum = a + b;
let div = a / b;
let mul = a * b;
console.log(sum, mul, div);
// -- ++
++a;
b--;
console.log(a--, ++b);
// **
let power = a ** 3;
console.log(power);
// 3.33
let float1 = 13.4;
let realLint = Math.floor(float1);
console.log(realLint);
//
let realLint2 = Math.ceil(float1);
console.log(realLint2);
// Mth.Max
console.log(Math.max(34, 56, 67, 344));
// Math.min
console.log(Math.min(11, 12, 0));
