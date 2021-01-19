/*More conditions
Make a variable for firstName and age and give each variable values.
 Create an if/else statement to check whether the person’s age is less than 13.
  If so, print “firstName is a child”.
   If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. 
   If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. 
   If none of these conditions apply, print “firstName is a adult”.*/

let firstName = "meriem";
let myAge = 20;
if (myAge < 13) {
  console.log(`${firstName} is a child`);
} else {
  if (myAge >= 13 && myAge < 20) {
    console.log(`${firstName} is a teenager`);
  } else {
    if (myAge >= 20 && myAge < 30) {
      console.log(`${firstName} is a young adult`);
    } else {
      console.log(`${firstName} is a adult`);
    }
  }
}
/*Create a program that capitalizes the first letter of each element in an array of names. Examples:
[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
[“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]*/

const arrayFunc = (arry) => {
  for (let i = 0; i < arry.length; i++) {
    arry[i] = arry[i][0].toUpperCase() + arry[i].substr(1).toLowerCase();
  }
  return arry;
};

console.log(arrayFunc(["matt", "sara", "lara"]));
console.log(arrayFunc(["samuel", "MARIA", "luke", "mary"]));
console.log(arrayFunc(["Cynthia", "Karen", "Jane", "Carrie"]));

/*City Names. 
Create an array of city names. Loop through the array and add the city names to a string. Examples:
[Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.*/

const cityNames = (ary) => {
  let text = "";
  for (let i = 0; i < ary.length; i++) {
    text += ary[i];
    if (i == ary.length - 1) {
      text += ".";
    } else {
      text += ",";
    }
  }
  return text;
};

console.log(cityNames(["Berlin", "Paris", "Prague", "Rome"]));
//Hello

//Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend.
//Bonus: Print the indexes of each item in the array. Examples:
//[Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
//Bonus [Susan, Rezvane, Mark] ➞ expected bonus output:
//“Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array,
///Mark is at index 2 of my friends and family array”.
let text = "";
const frindOrFamly = ["Maria", "Mike", "Paul", "Doven"];
for (let i = 0; i < frindOrFamly.length; i++) {
  text += `Hello ${frindOrFamly[i]} !`;

  console.log(
    `${frindOrFamly[i]} is at index ${frindOrFamly.indexOf(
      frindOrFamly[i]
    )} of my friends and family array,`
  );
}
console.log(text);
/*Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]*/
let addOne;
const array = [3, 5, 2, 4];
{
  for (let i = 0; i < array.length; i++) {
    addOne = array[i] + 1;
    console.log(addOne);
  }
}
