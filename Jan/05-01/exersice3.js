
//Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!
//1. Minimum and maximum
//a. Lowest Number
console.log(Math.max(3.01,51, 67.5,33.7));
console.log(Math.min(34.44,5676, 671));
//Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));
//b. Highest Number
//Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));

//2. Rounding

//a. Round up

//Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log(Math.floor(3321.32321), Math.floor(326.76), Math.floor(76788.7), Math.floor(-9.78),Math.floor(43.342) );


//b. Round down
//Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(Math.ceil(3321.32321), Math.ceil(326.76), Math.ceil(76788.7), Math.ceil(-9.78),Math.ceil(43.342) );

//Strings and Numbers
//1. Concatenation.
//Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let varString="I got the Master Degree in June ";
let varNumbr=2015;
console.log(`"${varString}${varNumbr}"`);
//In this case, what is the + operator doing? Comment your answer in the js file.
//the "+" concatenate a String Variable and Number Variable
//2. Converting 
//Create a variable with the value of “1005”. Convert it to a number.
let int1="1005";
console.log(parseInt(int1));
//Create a variable with the value of “10.05". Convert it to a number.
let int2="10.05";
console.log(parseInt(int2,10));