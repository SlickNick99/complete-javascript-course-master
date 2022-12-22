'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Bruschetta', 'Garlic Bread'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { nameRestaurant, openingHours, categories } = restaurant;
const {
  nameRestaurant: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 5, [5, 6]];
// // const [i, j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Defualt values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const pizzaRestaurant = {
  name: 'Pizza Pizza',
  appetizers: ['Caesar salad', 'Chicken wings', 'Garlic bread'],
  toppings: ['Pepperoni', 'Sausage', 'Peppers', 'Jalapenos'],
  location: '4140 bixby road',
  openHours: {
    mon: { open: 11, close: 8 },
    tues: { open: 11, close: 8 },
    fri: { open: 10, close: 12 },
    sat: { open: 10, close: 12 },
  },
  orderDelivery: function ({ toppingsIndex, appetizersIndex, address, time }) {
    console.log(
      `Your order - Appetizer ${this.appetizers[appetizersIndex]} Toppings: ${this.toppings[toppingsIndex]}, going to: ${address}, at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3 = 'none') {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

pizzaRestaurant.orderDelivery({
  address: '1904 n camino',
  time: '6:30pm',
  toppingsIndex: 2,
  appetizersIndex: 0,
});

const myArray = [1, 2, 3, 4];

const [i, k] = myArray;
console.log(i, k);

const badNewArray = [7, 8, 9, myArray[0], myArray[1], myArray[2]];
badNewArray.unshift(3);
console.log(badNewArray);

const newArr = [1, 2, ...myArray];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

// Iterables: arrays, strings, maps, sets NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log();

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
// ];
// console.log(ingredients);
// pizzaRestaurant.orderPasta(...ingredients);
// pizzaRestaurant.orderPasta(ingredients[0], ingredients[1]);

// const newRestuarant = {
//   ...restaurant,
//   founder: 'Gessipe',
// };

const restaurantCopy = { ...restaurant };
restaurant.name = 'Ristorante Roma';
console.log(restaurantCopy, restaurant);

// SPREAD because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST becuase on left side of =
const [c, d, ...others] = [1, 2, 3, 4, 5];
console.log(c, d, others);

const [pizza, rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
};

add(2, 3);

add(6, 7, 7, 89);

add(2, 3);

let user = {
  firstName: 'John',
  years: 30,
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = function (salaries) {
  let topEarner = 0;
  for (let i = 0; i < salaries.length; i++) {
    if (salaries[i] > topEarner) {
    }
  }
};

// let { firstName, years: age, isAdmin = false } = user;
// console.log(firstName, age, isAdmin);

const data = [1, 2, 3];

const [f] = data;
console.log(f);
const [l, m, e, h = 4] = data;
console.log(e);
