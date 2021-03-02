// object
const car = {
  name: "ford",
  year: "2020",
  color: "red",
};
let newCar = car;
newCar.name = "BMW";
// 1 clone erray
const names = ["olga", "zain", "jack", "Nancy"];
const namesClone = [...names];
console.log(namesClone);
namesClone[0] = "meriem";

//2
const newClonArr = [].concat(names);

names[1] = 114;
console.log(newClonArr);
console.log(namesClone);
// 3
const lastWay = names.slice();
