// old life with no Objects
const obj = {
  1: "meriem",
  2: "toma",
};
const userObj = {
  name: "meriem",
  lastName: "KHadraoui",
  age: 33,
  fat: true,
};
console.log(userObj.name);

console.log(userObj["name"]);
console.log(userObj.name);

const obj2 = {};
obj2.name = "toma";
obj2["age"] = 33;
console.log(obj2);
obj2["age"] = 43;
console.log(obj2);

const save = new Object();
console.log(save);

//cool for
for (let prop in userObj) {
  console.log(`userObj.${prop}:  `);
}

// tel me more about you
const person = {
  name: "meriem",

  birthYear: 1987,
  gender: "femmel",
  hight: 162,
  print: function () {
    console.log(
      `I am ${this.name}, I was born in ${
        this.birthYear
      } your age is ${this.age()}`
    );
  },
  age: function () {
    let currentYear = new Date().getFullYear();
    let age = currentYear - this.birthYear;
    return age;
  },
};
person.print();

//object.assing

const obj1 = { kids: 2, cars: 3 };
const obj3 = { colors: ["green", "gray", "black"], pets: "dogs" };
const totalObj = Object.assign({ name: "Meriem" }, obj3, obj1);
console.log(totalObj);
// object.definedProparties()
const newPresonObj = {};
Object.defineProperty(newPresonObj, "care", { value: "audi", writable: true });
console.log(newPresonObj.care);

Object.defineProperties(newPresonObj, {
  p1: {
    value: "cool",
    writable: true,
  },
  p2: {
    value: "prety",
    writable: false,
  },
  p3: {
    value: "34",
    writable: true,
  },
});
console.log(newPresonObj.p1);

// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.

const person1 = {
  name: "meriem",

  birthYear: 1987,
  gender: "femmel",
  hight: 162,
  age: 33,
};

for (let prop in person1) {
  console.log(`person1.${prop}:  ${person1[prop]}`);
}

// Object.keys
let keysArr = Object.keys(person);
console.log(keysArr);

// Object.values
console.log(Object.values(person));
// Create a function that returns an array of the properties of a javascript object.

// Given the following object
// const student = {
// firstName: "Zain",
// lastName: "Oil",
// class: 48 };
// Create a method that prints the following:
// "Zain Oil a student in class 48"
const javascriptobject = () => {
  const student = {};
  Object.defineProperties(student, {
    firstName: { value: "Zain", writable: true },
    lastName: { value: "Oil", writable: true },
    class: { value: 48, writable: true },
    print: {
      value: function () {
        console.log(
          ` ${this.firstName} ${this.lastName} a student in class ${this.class} `
        );
      },
    },
  });
  console.log(Object.keys(student));
  console.log(Object.values(student));
  console.log(Object.entries(student));
  student.print();
  return student;
};
javascriptobject();

// obj.hasOwnProperty(prop); look for spechel prop
//Object.seal(obj); can not adde new prop
