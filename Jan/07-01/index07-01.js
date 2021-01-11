
 // Exersice1
 //1Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random()*6)+1);






////the area of A circle   formula A= p * r²
r = 5;
function calAreaCircle(monP) {
    return A =  Math.PI * (Math.pow(r, 2));
  }
  
  console.log(Math.PI);
  
  console.log(calAreaCircle(r));
  console.log("the area of A circle is :" + (calAreaCircle(r).toFixed(2))+" m²");


 /* 1 Task
Create a function that takes the age and return the age in days.
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.*/


function calcAge(age){
let d=365;
let ld=366;
let don2=(age/4)-1;
 let normelYear=don2 *d ;
let leapYear=(age-don2)*ld;
return resultAgeD=normelYear+leapYear;

}   

console.log("your Age in Days is : "+ calcAge(60));

/*Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
wins get 3 points
draws get 1 point
losses get 0 points*/

function calcPoints(wins,draws,losses){
let pointW=wins*3;

return sumPoints=pointW+draws;

}

console.log("Sum of your points is: "+ calcPoints(3,2,4));
console.log(calcPoints(3,2,4)>=15?console.log("you are qualified"):console.log("you are not qualified"));



/*A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"*/


function  wordLowercas(recherche){

return text = recherche.includes("cat");


}

console.log(wordLowercas("FBMGFKGcGJGNaGBKMt"));
