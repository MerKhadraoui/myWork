// const on = document.querySelector("#on");
// const off = document.querySelector("#off");
// const lightBox = document.querySelector(".light");

// function lightOn() {
//   this.style.backgroundClolor = "yellow";
// }
// function lightOff() {
//   this.style.backgroundClolor = "white";
// }
// const on = () => {
//   lightBox.addEventListener("onclick", lightOn);
// };
// const off = () => {
//   lightBox.addEventListener("onclick", lightOff);
// };
let uservalue = 0;
const result = document.querySelector(".result");
const input = document.querySelector("#input");
const currency = document.querySelector("#currency");
function registerValues(e) {
  uservalue = e.target.value;
}
function convert() {
  let curentCurrenyVal;
  switch (currency.value) {
    case "euro":
      curentCurrenyVal = 1;
      break;
    case "dollar":
      curentCurrenyVal = 1.2;
      break;
    case "yen":
      curentCurrenyVal = 0.09;
      break;
  }
  result.innerHTML = `${curentCurrenyVal * parseInt(uservalue)} euro`;
}
currency.addEventListener("change", convert);
input.addEventListener("keyup", registerValues);
