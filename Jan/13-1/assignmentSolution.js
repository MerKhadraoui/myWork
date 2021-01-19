let storeArr = ["milk", "eggs", "cheese", "butter"];
const inventoryCheck = (str) => {
    return storeArr.includes(str);

};
console.log(inventoryCheck("ham"));

const calcLifetimeSupply = (perAge, amountPerDay) => {
    // let result = 0;
    let amountPeryear = amountPerDay * 365;
    let yearsToLive = 100 - perAge;
    let result = amountPeryear * yearsToLive;
    return result;
}
console.log(calcLifetimeSupply(40, 3));
/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT*/
const drawShape = () => {
    let text = "";
    for (let i = 0; i < 4; i++) {
        text += "T";
        console.log(text);
    }
}
drawShape()



// coure de 13-01








/*Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/
const numbersCount = (num) => {
    let text;
    for (i = num; i > 0; i--) {
        text = "";
        for (j = 1; j <= i; j++) {
            text += j + "";
        }
        console.log(text);
    }
}
numbersCount(4);

const dogAge = (numdogToHuman1) => {
    let result = numdogToHuman1 * 7;
    return `your Doggy is ${result} yeart old in dog years!`
};
console.log(dogAge(14));



const countOccurrences = (str, char) => {
    let result = str.split("");

    let counter = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == char) {
            counter++;
        } 
    }

    return result;
}
console.log(countOccurrences("this is  a string", "i"));




/* 78910*/
const drawShape=()=>{

for (let i=10;i>=7;i--){
   let text1=""; 
   for (let j=7; j<=i;j++){
    text1+= j+"";
   }
    console.log(text1)
}

}
drawShape();
    



  