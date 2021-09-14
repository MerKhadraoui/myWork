// Change the font of the body element.
const body = document.querySelector("body");
body.style.fontFamily = "Arial";
// Center the text of h1 on the page.
const title = document.querySelector(".title");
title.style.textAlign = "center";
//main
const mainSec = document.querySelector(".main");
mainSec.style.display = "flex";
mainSec.style.flexFlow = "row wrap";
mainSec.style.justifyContent = "space-around";
mainSec.style.boxSizing = "boder-box";
//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
const category = document.querySelectorAll(".category");
category.forEach(({ style: cat }) => {
  console.log(cat);
  cat.fontSize = "1.5rem";
  cat.fomtStyle = "bold";
  cat.bordeBottom = "1px black solid";
});
//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const colorGen = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  // one more thing
  result += "50";
  return result;
};

// color generator in other way 😉
const colorGenOtherWay = () => {
  let r = Math.floor(random() * 255);
  let g = Math.floor(random() * 255);
  let b = Math.floor(random() * 255);
  let a = Math.random();

  return `rgba(${r},${g},${b},${a})`;
};
const food = document.querySelectorAll(".food-category");
food.forEach(({ style: item }) => {
  //   item.backgroundColor = colorGenOtherWay();
  item.backgroundColor = colorGen();
  item.width = "30%";
  item.heigth = "10rem";
  item.textAlign = "center";
  item.padding = "1rem";
  item.borderRadius = "5px";
});
// Select all even allergy-info items. Give the even items a different background color.
const allergy = document.querySelectorAll(".allergies .allergy-info ");
allergy.forEach(({ style: item }, i) => {
  if (i % 2 == 0) {
    item.backgroundColor = colorGen();
  }
});
// const allergy = document.querySelectorAll(".allergy-info :nth-child(even)");
// allergy.forEach(({ style: item }) => {
//   if (i % 2 == 0) {
//     item.backgroundColor = colorGen();
//   }
// });
// Make the allergy-warning appear as a column in the center of the page.
const allergySec = document.querySelector(".allergy-warning").style;
allergySec.display = "flex";
allergySec.flexFlow = "column";
allergySec.justifyContent = "center";
allergySec.alignItems = "center";
//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";
const foodItems = document.querySelectorAll(".food-desc");
foodItems.forEach(({ style: item }) => {
  item.border = "5px solid orange";
});
const media = window.matchMedia("(max-wigth:400px)");
console.log(media);
