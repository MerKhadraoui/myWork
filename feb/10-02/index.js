const car = {
  name: "ford",
  year: "2020",
  color: "red",
};

//shallow clone for an object using .assign()
const newCloneObj = Object.assign({}, car);
console.log(newCloneObj);
newCloneObj.name = "bmw";
console.log(car);

// Recursion
// factorial example
const factorial = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(7));

// Deep copy using recursion
function deepCpy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCpy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == "array") {
    return obj.map(deepCpy);
  }
  return obj;
}
const crandNewCloned = deepCpy(car);
console.log(crandNewCloned);
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

const scrabbl = (playerScore) => {
  return playerScore.reduce((acc, cur) => acc + cur.score, 0);
};
console.log(
  scrabbl([
    { tile: "“N”", score: 1 },
    { tile: "“K”", score: 5 },
    { tile: "“Z”", score: 10 },
    { tile: "“X”", score: 8 },
    { tile: "“D”", score: 2 },
    { tile: "“A”", score: 1 },
    { tile: "“E”", score: 1 },
  ])
);
//4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {“John”: name, “teacher”: job}
const switchKeyAndValue = (obj1) => {
  let obj2 = {};
  for (let prop in obj1) {
    obj2[obj1[prop]] = prop;
  }
  return obj2;
};
console.log(switchKeyAndValue(person));
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }
// Expected Output:
// {“John”: name, “teacher”: job}
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
