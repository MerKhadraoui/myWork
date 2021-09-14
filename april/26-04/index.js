const create = () => {
  // 1. step
  const newElement = document.createElement("div");

  const newText = document.createTextNode("I am a new element 😉");

  // 2. step
  // div                  // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
const addToList = () => {
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    // const listItem = document.querySelectorAll("li");
    // listItem.forEach((item) => {
    //   item.style.color = colorGen();
    // });
    const newContainer = document.createElement("div");
    const donButton = document.createElement("button");
    const deletButton = document.createElement("button");
    donButton.innerHTML = "l";
    deletButton.innerHTML = "x";
    newContainer.appendChild(donButton);
    newContainer.appendChild(deletButton);
    newLi.appendChild(newContainer);
    //
    // delet and add
    const check = () => newLi.classList.toggle(".completed");
    const del = () => newLi.remove();
    deletButton.addEventListener("click", del);
    donButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
const colorGen = () => {
  let result = "#";
  let colorCod = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCod[Math.floor(Math.random() * 16)];
  }
  return result;
};

const keyCheck = (event) => {
  if (event.key == "Enter") addToList();
};
const userInput = document.querySelector("#userData");
userInput.addEventListener("keypress", keyCheck);
