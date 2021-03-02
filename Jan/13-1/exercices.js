// Create a function that takes a number.
// as its only argument and returns true .
//if it's less than or equal to zero,
// otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
const isLEQZero = (num) => {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isLEQZero(34));

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Examples:

// monthName(3) ➞ "March"
const monthName = (monthNum) => {
  let result = "";
  let thNum = monthNum - 1;
  if (thNum >= 0 && thNum <= 12) {
    result = months[thNum];
  } else {
    result = `sorry you need to enter number between 1 and 12`;
  }
  return result;
};
console.log(monthName(3));

/* create a function should.
 that checks if a store contains a specific product.
  in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/
let storeArr = ["milk", "eggs", "cheese", "butter"];
const inventoryCheck = (producName) => {
  result = storeArr.includes(producName);

  return result;
};
console.log(inventoryCheck("tomatos"));
console.log(inventoryCheck("cheese"));

///////////////////////////7
//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! .
//The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".
// Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments:
// person age and the amount he will eats per day.
// The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

const calcLifetimeSupply = (age, snack) => {
  let lifeTime = 100 - age;
  let yearsAmount = snack * 365;

  let result = lifeTime * yearsAmount;

  return `The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!`;
};
console.log(calcLifetimeSupply(25, 2));

/////////////////////////////////////
/*
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/

const drawShape = () => {
  let text2;
  for (let i = 5; i >= 0; i--) {
    text2 = "";
    for (let j = 1; j <= i; j++) {
      text2 += j;
    }
    console.log(text2);
  }
};
drawShape();
