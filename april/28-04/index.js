// Traversing
//  Node vs Element Nodes
const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
const ele2 = document.querySelector("body").previousSibling;
console.log(ele2); //#text⏎
// firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText);
console.log(mainText.textContent);

// nodeName, nodeType, id, innerText
let text = document.querySelector("span");
console.log(text.nodeType);
// closest
let closetEle = text.closest(".cool");
console.log(closetEle.textContent);
let names = document.querySelectorAll("li");
console.log(names);
names.forEach((name) => {
  console.log(name.textContent);
  //use mathches to tack spechel element
  if (name.matches(".teacher")) {
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
  }
});

const allChildren = document.querySelectorAll("document");
allChildren.forEach((child) => {
  if (child.nodeType == "8")
    // if (child.nodeType==Node.COMMENT_NODE)
    console.log(child);
});

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

// querySelector
// function generatePassword() {
//   var length = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }
// console.log(generatePassword());
