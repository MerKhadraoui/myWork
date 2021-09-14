// where I can link my js file

// window.alert === alert

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node
const container = document.querySelector(".container");
container.style.backgroundColor = "gray";
console.log(container);
const spanList = document.querySelectorAll(".container span");
console.log(spanList);
spanList.forEach((span) => {
  span.innerHTML = "nice 🧐";
  span.style.backgroundColor = "gray";
});
console.log(spanList.length);
spanList[2].style.backgroundColor = "red";

const menu = document.querySelector("#menuList");
console.log(menu);
// const highlight = document.querySelector(".highlight");
// highlight.style.backgroundColor = "yellow";
const highlight = document.querySelectorAll('li[class="highlight"]');

highlight[0].style.backgroundColor = "red";
// add classList
const moreClass = document.querySelector(".main");
moreClass.classList.add("text");
moreClass.classList.add("small");
moreClass.classList.add("smaller", "flex-size");
console.log(moreClass);
// remove classList
moreClass.classList.remove("flex-size");

// add class Arry
let classArr = ["classOne", "classTwo"];
moreClass.classList.add(...classArr);
console.log(moreClass.classList);

moreClass.style.cssText = "font-size:2.3rem; color:blue;";
const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  console.log(mood);
  const body = document.querySelector("body").style;
  console.log(mood);
  if (mood) {
    body.backgroundColor = "black";
  } else {
    body.backgroundColor = "white";
  }
};
