const names = ["Zain", "Nancy", "Olga"];
const smileys = ["😎", "🤓", "🥳"];
// .length
// to get the number of elements in an array
console.log(names.length);
// .length -1

// to access the last item
console.log(names[names.length - 1]);

let cityName = [];
console.log(cityName.length);
cityName[0] = "Berlin";
cityName[1] = "Hamburg";
cityName[2] = "Rom";
console.log(cityName);

// .push()
// add an item
cityName.push("kölen");
console.log(cityName);
// .pop()
// remove an item
cityName.pop(cityName);
console.log(cityName);
let removedItem = cityName.pop();
console.log(cityName);
console.log(removedItem);
// .unshift()
// add an item to the beginning
cityName.unshift("fleur");
console.log(cityName);
// .shift()// remove an item to the beginning
cityName.shift("fleur");
console.log(cityName);
let removedEle = cityName.shift("fleur");
console.log(removedEle);

// .indexOf()
// Find the index of an item
const nameList = ["Zain", "Nancy", "Rim", "Olga"];
console.log(nameList.indexOf("Nancy"));

let pos = nameList.indexOf("Nancy");
let n = 1;
// .splice()
// remove an item by the index number
let removedSpesIt = nameList.splice(pos, n);
console.log(nameList);
console.log(removedSpesIt);
for (let i = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
}

//.split() string => Array ############################
// divide a string into an array
let str = "Hi this is me";
let newArr = str.split(" ");
console.log(newArr);
// .join()
// create a string from an array

let newStr = newArr.join(",");
console.log(newStr);
// .concat()
let arr1 = [1, 22, 54];
let arr2 = [25, 87, 69];
let ar3 = arr1.concat(arr2);
console.log(ar3);

const add = ["Zain", "Nancy", "Rim", "Olga"];
let fakeCopy = add;
console.log(fakeCopy);
fakeCopy.push("miya");
console.log(add);
console.log("******************");
// .slice()
// to make a shallow copy

let shallowCpopy = add.slice();
console.log(add.slice());
console.log(shallowCpopy);
shallowCpopy.push("toma");
console.log(shallowCpopy);
console.log(add);
//assignments part
//Repeat it.
// Create a program with two variables: “item” and “times”.

const reaptProg = (item, times) => {
  let arr4 = [];
  for (let i = 0; i < times; i++) {
    arr4.push(item);
  }
  return arr4;
};
console.log(reaptProg("miery", 4));
//Create a program that repeats the “item” as many times as specified by “times”.
//The first variable (“item”) is the item that needs
//repeating while the second argument (“times”) is the number of times the item is to be repeated.
// Print the result in an array. Examples:
//(“example”, 3) ➞ [“example”, “example”, “example”]*/

//Create a function which accepts two arguments: the first argument being an array of numbers,
//and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
let pos1;
const arrFunc = (numArr, num) => {
  let result = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] >= num) {
      result.push(numArr[i]);
    }
  }
  return result.join(", ");
};
console.log(arrFunc([3, 4, 5], 4));
console.log(arrFunc([10, 20, 30], 12));
console.log(arrFunc([0, 10, 3], 0));
//none of them work sorry
//i.e.
//findGreatest([3, 4, 5], 4) ➞ 5
//findGreatest([10, 20, 30], 12) ➞ 20, 30
//findGreatest([0, 10, 3], 4) ➞ 10
