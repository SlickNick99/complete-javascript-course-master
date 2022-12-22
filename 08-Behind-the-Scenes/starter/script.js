'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = console.log('You are a millenial');
//     }
//   }

//   printAge(1994);
//   return age;
// }
// const firstName = 'Jonas';
// console.log(calcAge(1991));

// Functions

// console.log(addDecl(4, 5));
// console.log(addExpress(4, 5));
// console.log(addArr(4, 5));
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpress = function (a, b) {
//   return a + b;
// };
// const addArr = (a, b) => a + b;

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(
    //     self.year >= 1991 && self.year <= 1996
    //       ? 'You are a millenial'
    //       : 'You are not a millenial'
    //   );
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(
        self.year >= 1991 && self.year <= 1996
          ? 'You are a millenial'
          : 'You are not a millenial'
      );
    };
    isMillenial();
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const matilda = {
  year: 2017,
};

jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);
console.log(age);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;

console.log(marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
