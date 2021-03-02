// Destructuring objects as function parameters
function fun(num = 0, { name = "new" }) {
  console.log(num);
  let firstNume = { name };
  console.log(firstNume);
  return;
}
console.log(fun(2, {}));
// getter// setter

const userData = {
  firstNume: "steel",
  lastName: "soWhat",
  get fulName() {
    console.log(`${this.firstNume} ${this.lastName}`);
  },
  set fulName(obj) {
    this.firstNume = obj.name;
    this.lastName = obj.lastnam;
  },
};
const obj = { name: "meriem", lastnam: "khadraoui" };
userData.fulName;
userData.fulName = obj;
userData.fulName;
console.log("++++++++++++++++++");
// constructor only with olde function  one
function Person(name, age, act) {
  this.name = name;
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hey ${this.name}, you are too old ${this.age} and you do ${this.act} `
    );
  };
}
let zain = new Person("zain", 21, ["sleep"]);
zain.printOut();

// for in its used for object
for (let prop in zain) {
  console.log(`zain ${prop} : ${zain[prop]}`);
}

//for of arr used for arr
let family = [
  ["mery", 22, "teacher"],
  ["olga", 40, "chef"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
// forEach arr we can use the index
family.forEach((arr) => arr.forEach((element) => console.log(element)));
// for of arr
for (let [key, val] of Object.entries(zain)) {
  console.log(`${key}: ${val}`);
}

//isDivisibel % and isDividebal use/

// Creat a constructor function that receive product details (productName,prise,inventory)
//then build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

// constructor only with olde function  one
function Product(productName, prise, inventory) {
  this.productName = productName;
  this.prise = prise;
  this.inventory = inventory;
  this.display = function () {
    console.log(
      `Form item ${this.productName}, selling prise ${this.prise} €. we have ${this.inventory} in our store`
    );
  };
}
let Pepsi = new Product("Pepsi", 2.33, 2232);
Pepsi.display();

// get & set, create a car object that uses getter and setter method to get and set
//the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const userCarData = {
  modelName: "steel",
  modelNumber: "soWhat",
  enginCapacity: "",
  get carData() {
    console.log(`${this.modelName} ${this.modelNumber} ${this.enginCapacity}`);
  },
  set carData(str) {
    let arrStr = str.split(" ");
    this.modelName = arrStr[0];
    this.modelNumber = arrStr[1];
    this.enginCapacity = arrStr[2];
  },
};

userCarData.carData;
userCarData.carData = "BMW 2005 400";
userCarData.carData;

// class
class Animals {
  constructor(_kind, _hometown, _age) {
    this.kind = _kind;
    this.hometown = _hometown;
    this.age = _age;
  }
  display() {
    console.log(`this very cute ${this.kind} lives in ${this.hometown} `);
  }
}
const cat = new Animals("cat", "la", 3);
cat.display();
console.log(cat);
console.log(typeof Animals);

class Color {
  constructor() {
    this.name = "";
    this.tep = 0;
  }
}
const red = new Color();
console.log(red);
red.name = "red";
red.tep = 12;
console.log(red);

class TV {
  constructor(_brand = samsung, _channel = 12, _volume = 10) {
    this.brand = _brand;
    this.Channel = _channel;
    this.volume = _volume;
  }

  incVolume() {
    if (this.volume < 10) {
      console.log(this.volume++);
    } else {
      ("this is too much");
    }
  }
  decVolum() {
    if (this.Channel > 0) {
      console.log(this.Channel--);
    } else {
      ("mut");
    }
  }

  rest() {
    this.Channel = 12;
    this.volume = 10;
  }
  namdomChannel() {
    this.Channel = Math.floor(Math.random() * 50) + 1;
  }
  display() {
    return `this Tv ${this.brand} , had ${this.Channel} channels and the volume is  ${this.volume}`;
  }
}
const smartTv = new TV("samsung");
console.log(smartTv);
smartTv.decVolum();
console.log(smartTv.display());

class Student{
    constructor(_firstName,_lastName)

    }
