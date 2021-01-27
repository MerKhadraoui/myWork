// **Pig Latin Translation**
// Create a function that takes a string of words and moves the first letter of each word to the end of it,
// then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.
// Extra Practice

// Preserve proper capitalization as in the examples below.
// Examples:

// - pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
// - pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
// - pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."

const pigLatin = (str) => {
  let result = [];
  let strToLowerCas = str.toLowerCase();
  let wordsArray = strToLowerCas.split(" ").pop();
  console.log(wordsArray);
  let lastChara = "";
  let charactercsInWord;
  for (let i = 0; i < wordsArray.length; i++) {
    charactercsInWord = wordsArray[i].split("");
    if (i == wordsArray.length - 1) {
      lastChara = charactercsInWord.pop();
    }
    if (
      charactercsInWord[0] == "A" ||
      charactercsInWord[0] == "E" ||
      charactercsInWord[0] == "I" ||
      charactercsInWord[0] == "O" ||
      charactercsInWord[0] == "U" ||
      charactercsInWord[0] == "a" ||
      charactercsInWord[0] == "e" ||
      charactercsInWord[0] == "i" ||
      charactercsInWord[0] == "o" ||
      charactercsInWord[0] == "u"
    ) {
      if (i == 0) {
        charactercsInWord = charactercsInWord[0].toUpperCase();
      }
      let wordsWithVo = charactercsInWord.join("") + "way" + lastChara;
      result[i] = wordsWithVo;
    } else {
      let firstCharInWorsd = charactercsInWord.shift();
      if (i == 0) {
        charactercsInWord = charactercsInWord[0].toUpperCase();
      }

      //console.log(firstCharInWorsd);
      result[i] =
        charactercsInWord.join("") + firstCharInWorsd + "ay" + lastChara;
    }
  }
  return result.join(" ");
};
console.log(pigLatin("Cats are great pets."));

// **One is not like the others**
// Create a function that takes an array of numbers and return the number that’s unique.

// Examples:
// * unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// * unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// * unique([3, 3, 3, 7, 3, 3]) ➞ 7

// const unique = (numArr) => {
//   let result;
//   let copyNumArry = numArr.slice();
//   let shiftElement;

//   for (let i = copyNumArry.indexOf(shiftElement); i <= numArr.length; i++) {
//     shiftElement = copyNumArry.shift();
//     if (!shiftElement == numArr[i]) {
//       result = shiftElement;
//     }
//   }
//   return result;
// };
// console.log(unique([0, 0, 0.77, 0, 0]));
// console.log(unique([3, 3, 3, 7, 3, 3]));
