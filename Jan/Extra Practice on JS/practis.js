//#doubleChar
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples

// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "

// Notes

// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
const doubleChar = (str) => {
  let result = [];
  atrToArr = str.split("");
  for (let index = 0; index < atrToArr.length; index++) {
    const element = atrToArr[index];
    result.push(element);
    result.push(element);
  }
  return result.join("");
};
console.log(doubleChar("String"));

// Create a function that changes specific words into emoticons.
// Given a sentence as a string, replace the words smile, grin,
//sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
// Examples
// emotify("Make me smile") ➞ "Make me :D"

// emotify("Make me grin") ➞ "Make me :)"

// emotify("Make me sad") ➞ "Make me :("
const emotify = (strWithEmo) => {
  let strToArr = strWithEmo.split(" ");
  const objEmo = {
    smile: ":DM",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };
  for (let prop in objEmo) {
    if (prop == strToArr[strToArr.length - 1]) {
      strToArr.pop();
      strToArr.push(objEmo[prop]);
    }
  }
  return strToArr.join(" ");
};
console.log(emotify("Make me smile"));
console.log(emotify("Make me grin"));
