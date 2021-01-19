
// old school Function
function print(str) {
    console.log(str);
}
// The new form of create a function Es 6 const display=(str)=>{ console.log(str);};

const display = (str) => {
    console.log(str);

};
print("Hi");
display("Meriem");
const sum = (y, x) => x + y;
console.log(sum(4, 6)); const isBigger = (num1, num2) => num1 < num2;
console.log(isBigger(33, 87));
const calculatSum = (x1, y1) => {
    let v = 234;
    return x1 + y1 * v;
};
const printFullWord = (firstName, age, add) => console.log(`Hi ${firstName}, I am ${age},I live is${add}`)
printFullWord("meriemkhadraoui", 33, "Hamburg");

let isLogged = false;
const login = () => { isLogged = true; };
login();
let name1 = "Meriem";
let name2 = "miya";
let name3 = "toma";
let namesArray = [name1, name2, name3];
console.log(namesArray[0]);
let numrArr = [0, 1, 5, 3, 9, 8, 7, 2, 5];
console.log(numrArr[6]);
let myHobs = ["cooking", "football", "dance", "chess"];
//
for (let i = 0; i < myHobs.length; ++i) {
    console.log(myHobs[i]);
}
for (let i = 10; i >= 0; i--) {
    console.log(`1 * ${i} = ${i * 1}`);
}
const charArr = ["amina", "boubi", "cathia"];
for (let i = 0; i < charArr.length; i++) {
    console.log(charArr[i][0].toUpperCase());
}

const namesArr = ["meirem", "khadraoui"];
for (let i = 0; i < namesArr.length; i++) {
    console.log(namesArr[i][0].toUpperCase() + namesArr[i].slice(0));
}
let firstA = true;
let firstB = false;
let firstC = 11 == 23;
if ((firstA == firstB && firstC != firstA) && firstA == firstB) {
    console.log("wow");

}
else {
    console.log("I don't ");

}
//Write a program that will iterate from 0 to 20. For each iteration, 
//it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }

}

/*     Write programs that produce the following outputs:
100 200 300 400 500 600 700 800 900 1000
*/
text = " ";
for (i = 0; i <= 10; i++) {
    text += i * 100 + " ";

}

console.log(text);

//0 2 4 6 8 10
text = " ";
for (i = 0; i <= 5; i++) {
    text += 2 * i + " ";
    if (i % 2 == 0) {

    }


}
console.log(text);


//3 6 9 12 15
text = " ";
for (i = 0; i <= 15; i+=3) {
    text += i + " ";
    if (i % 2 !== 0) {

    }


}
console.log(text);
//9 8 7 6 5 4 3 2 1 0
text="";
for (let i = 9; i >= 0; i--){
text+=i+" ";
}
console.log(text)


    //1 1 1 2 2 2 3 3 3 4 4 4
    text = " ";
countNum = 0;
for (let i = 1; i <= 4;) {
    text += i + " ";
    if (countNum %4) {
        i++;
        countNum = 0;

    }
    countNum++;


}
console.log(text);



let strToArra = "Hi this is me";
let strToArra1 = strToArra.split(" ");
console.log(strToArra1);
let cackTo = strToArra1.join(" ");
console.log(cackTo);
console.log("Hi".repeat(4));



//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4   ||

text = " ";
countNum = 0;
  for (let i = 0; i <= 4;) {
    text += countNum + " "; 
    if (countNum !=0 && countNum % 4 == 0) {
     i++;

        countNum = 0;
 
    }
   countNum++;

}
console.log(text);















