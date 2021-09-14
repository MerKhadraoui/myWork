// Events:
// User Events (interaction) and Browser Events (loading, etc...)
document.addEventListener("load", console.log("HI"));
// Listening:
// Higher order functions aka functions that accept function (callbacks)
const divText = document.querySelector(".text");

const print = () => {
  divText.innerHTML += "Hi am conclick ";
};
const btn = document.querySelector("#more");
btn.onclick = () => {
  divText.innerHTML += "this is from js";
};
// - Listening to user actions
//   `EventTarget.addEventListener(<namespace>, <callback>)`
// - Mouse Events:
// `click`, `mouseenter`, `mouseleave`
// const rest=()=>{
//     header.style.
// }
// - Keyboard Events:
// `keydown`, `keyup`
function keyUp(e) {
  console.log(e);
  this.style.backgroundColor = "orange";

  if (e.code == "KeyL") {
    alert("you are cool");
  }
}
function keyDown(e) {
  this.style.backgroundColor = "blue";
}
function keyPress(e) {
  this.style.backgroundColor = "yellow";
}
const userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUp);
userInput.addEventListener("keydown", keyDown);
userInput.addEventListener("keypress", keyPress);
