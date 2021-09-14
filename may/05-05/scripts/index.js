import { data, data2 } from "./data.js";
let dataImport = JSON.parse(data);
let data2Import = JSON.parse(data2);
console.log(dataImport, data2Import);
let totalObj = { data2Import, dataImport };
const section = document.querySelector("#bread");
console.log(section);

totalObj.forEach((obj) => {
  obj.forEach((elem) => {
    let { name, age, add } = elem;
    let card = ` <div>
   <h2>${name}</h2>
  <h3>${age}</h3>
  <h4>${add}</h4>
  </div>`;
    section.innerHTML += card;
  });
});
