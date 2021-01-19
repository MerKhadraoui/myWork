// for loop

for (let i = 0; i < 5; ) {
  console.log(i);

  i += 2;
}
console.log("----------");

for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    console.log(`there is number ${i} star in the sky`);
  } else {
    console.log(`there are number ${i} stars in the sky`);
  }
  if (i == 3) {
    console.log(`there are 3  stars  in the sky`);
  }
}
console.log("----------------");

for (i = 5; i > 0; i--) {
  console.log(`i is now ${i}`);
}
console.log("----------------");

for (let i = 10; i >= 1; i--) {
  console.log(`this is Multi table for ${i}`);
  for (let j = 0; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("----------------");
}
console.log("----------------");

for (let i = 0; i <= 5; i++) {
  let num = i * 2;
  console.log(num);
}
console.log("----------------");

/// *shape
for (let i = 0; i <= 5; i++) {
  console.log("*".repeat(i));
}

console.log("----------------");
let drawShape = "";
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= i; j++) {
    drawShape += j + `/**${i}**/`;
  }
  console.log(drawShape);
}
const names = ["Meirem", "Toma", "Zerfa"];
const yourWork = ["webDev", "teacher", "driver"];

for (let i = 0; i < names.length; i++) {
  console.log(`Hi I am ${names[i]}, I will be ${yourWork[i]} `);
}
/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI.*/
let MarkHei = 1.78;
let markMass = 80;
let johnHei = 1.8;
let johnMass = 90;
const calculBMI = (height, mass) => {
  return (bmi = mass / (height * height));
};

console.log(`Mark BMI = ${calculBMI(1.7, 80)} kg/m²`);
console.log(`John BMI = ${calculBMI(1.9, 90)} kg/m²`);
let MarkBMI = calculBMI(170, 80);
let JohnBMI = calculBMI(190, 90);
if (calculBMI(170, 80) > calculBMI(1.9, 90)) {
  console.log(`yes, it’s ${calculBMI(1.7, 80)}, it is`);
} else {
  console.log(` No , it’s ${calculBMI(1.9, 90)}, it is`);
}
console.log();
let color = "red";
switch (color) {
  case "red":
    console.log("cool think");
    break;
  case "blue":
    console.log("cool think 2");
    break;
  case "green":
    console.log("cool think 3 ");
    break;
  case "ehite":
    console.log("cool think4");
    break;
  default:
    console.log("sorry you need enter a color");
}

userKidsNumber = 12;
switch (userKidsNumber) {
  case 1:
    console.log("new perents");
    break;
  case 5:
    console.log("nice");
    break;
  default:
    console.log("good jobs");
}
//Capitalize.
//Create a program that capitalizes the first letter of each element in an array of names. Examples:
//[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
//[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
//[“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const arrayNames1 = ["matt", "sara", "lara"];
const arrayNames2 = ["samuel", " MARIA", "luke", "mary"];
const arrayNames3 = ["Cynthia", "Karen", "Jane", "Carrie"];
const capitalize = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
  }
  return arr;
};
console.log(capitalize(["matt", "sara", "lara"]));
console.log(capitalize(["samuel", " MARIA", "luke", "mary"]));
console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"]));

/*City Names. 
Create an array of city names. Loop through the array and add the city names to a string. Examples:
[Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.*/
let text = "";
const cityNames = ["Berlin", "Paris", "Prague", "Rome"];
for (let i = 0; i <= cityNames.length; i++) {
  text += cityNames[i] + ",";
}
console.log(`"${text}"`);
//Hello
//Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
//[Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
//Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”
let nams = "";
const frindNames = ["Marine", "Mike", "Paul", "Doven"];
for (let i = 0; i <= frindNames.length; i++) {
  nams += `hello  ${frindNames[i]} !` + " ";
}
console.log(nams);
