// printing out
console.log("Miya");
let firstName= "meriem";
console.log(firstName.length);

let somthing=32423;
somthing=4576;
console.log(somthing);

// constant variable.
const fatherName="Lkhamissi khadraoui";
console.log(fatherName);
// var ist a global variabl

var global="i am meriem";
// function functionname (parametr);{}

function print(str){
console.log(str);

}
print("miyakhad");
print(1997);
 let oString="hi My Name is Meriem, I'm 33 year.";
print(oString.length);
let str1 =oString.substring(5);
console.log(str1);
let str2= oString.substring(6, 17);
console.log(str2);
//
let str3=oString.toUpperCase();
console.log(str3);
let str4=oString.toLowerCase();
console.log(str4);
let nam="MeRieM";
let Fnam=nam[0];
console.log(Fnam);
let Res=nam.substring(1).toLowerCase();
console.log(Res);
let fiNam= Fnam+Res;
console.log(fiNam);
//Exercises 
//1.Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let sant="I can walk in the park all day!";
let sant1=sant.substring(18, 23);
console.log(sant1);
// 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let helloWorld="Hello world";
let hello=helloWorld.toUpperCase();
console.log(hello);
// 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let anotherVar="Earthlings";
let hello2=anotherVar.toLowerCase();
console.log(hello2);
//  4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.

let newVar="JavaScript";
let newVar1=newVar.substring(3, 6);
console.log(newVar1);

//. Check if the sentence “nice shoes” contains the letter l.

let sentence="nice shoes";
let check=sentence.includes("l");
console.log(check);
//6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
let firstChar= anotherVar[0]+anotherVar+anotherVar[0];
console.log(firstChar);
