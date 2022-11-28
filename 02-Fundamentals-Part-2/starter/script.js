"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// function logger() {
//   console.log("My name is jonas");
// }

// // calling / running / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function describeCountry(country, population, city) {
//   const countryStats = `${country} has ${population} and its capital city is ${city}`;
//   console.log(countryStats);
//   return countryStats;
// }

// const america = describeCountry("America", "380 million", "Washington DC");
// const costarica = describeCountry("Costa Rica", "8 million", "San Jose");
// const Europe = describeCountry("England", "55", "London");

// Function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1999);

// console.log(age1, age2);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfChina = percentageOfWorld1(1441);
// const percentageOfAmerica = percentageOfWorld1(350);
// const percentageOfEurope = percentageOfWorld1(746);
// console.log(percentageOfChina);
// console.log(percentageOfAmerica);
// console.log(percentageOfEurope);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentageOfChina = percentageOfWorld2(1441);
// const percentageOfAmerica = percentageOfWorld2(350);
// const percentageOfEurope = percentageOfWorld2(746);
// console.log(percentageOfChina);
// console.log(percentageOfAmerica);
// console.log(percentageOfEurope);

// Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// const retiredPerson = yearsUntilRetirement(1991, "Nick");
// console.log(retiredPerson);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const americaPopPercentage = percentageOfWorld3(350);
// console.log(americaPopPercentage);

// const fruitCutter = (fruit) => {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);
//   console.log(applePieces, orangePieces);
//   const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const describePopulation = (country, population) => {
//   const countryPer = percentageOfWorld2(population);

//   return `${country} has ${population} million poeple which is about ${countryPer} percent of people in the world`;
// };

// console.log(describePopulation("china", 1441));
// console.log(describePopulation("america", 350));
// console.log(describePopulation("Europe", 250));

// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Nick"));
// console.log(yearsUntilRetirement(1950, "mike"));

// const checkWinner = (koalaAvg, dolphinAvg) => {
//   if (koalaAvg >= dolphinAvg * 2) {
//     console.log(`Koalas win with ${koalaAvg} vs ${dolphinAvg}`);
//   } else if (dolphinAvg >= koalaAvg * 2) {
//     console.log("Dolphins win!");
//   } else {
//     console.log("Nobody wins becuase you didnt score enough points");
//   }
// };

// const calcAvg = (a, b, c) => {
//   const average = (a + b + c) / 3;
//   return average;
// };

// // Test 1
// const koalaAvg1 = Math.round(calcAvg(65, 54, 60));
// const dolphinAvg1 = calcAvg(23, 34, 27);

// // Test 2
// const koalaAvg2 = calcAvg(44, 23, 71);
// const dolphinAvg2 = calcAvg(85, 54, 41);

// checkWinner(koalaAvg1, dolphinAvg1);
// checkWinner(koalaAvg2, dolphinAvg2);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);

// const firstName = "Nick";
// const Nick = [firstName, "velazquez", 2037 - 1999, "Programmer", friends];
// console.log(Nick);

// // Excersize
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3);

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements to end of array
// const newLength = friends.push("Jay");
// console.log(friends);

// // Add element to beginning of array
// friends.unshift("John");
// console.log(friends);

// // Remove last element from array
// friends.pop();
// const popped = friends.pop();

// // Remove first element from array
// const first = friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Steven"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Peter");
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const population = [50, 1441, 103, 450];
// console.log(population.length === 4);

// const percentages = [
//   percentageOfWorld1(population[0]),
//   percentageOfWorld1(population[1]),
// ];

// console.log(percentages[1]);

// const neighborCountries = ["Candada", "Mexico"];

// neighborCountries.push("Utopia");
// console.log(neighborCountries);

// neighborCountries.pop();
// console.log(neighborCountries);

// neighborCountries[neighborCountries.indexOf("America")] = "wow america";

// console.log(neighborCountries);

// const percentageOfWorld = (population) => {
//   population = (population / 7900) * 100;
//   return population;
// };
// const describePopulation = (country, population) => {
//   const percentage = percentageOfWorld(population);
//   console.log(
//     `${country} has a population of ${population} and its percentage of the world is ${percentage}`
//   );
// };

// console.log(describePopulation("china", 1441));

// const calcTip = function (bill) {
//   if (bill >= 50 && bill < 300) {
//     return bill * 0.15;
//   } else if (bill < 50) {
//     return bill * 0.1;
//   } else {
//     return bill * 0.2;
//   }
// };

// console.log(calcTip(301));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const fullBill = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// const totalCost = [
//   `Your bill is $${bills[0]} + $${tips[0]} = $${fullBill[0]}`,
//   `Your bill is ${bills[1]} + ${tips[1]} = ${fullBill[1]}`,
//   `Your bill is ${bills[2]} + ${tips[2]} = ${fullBill[2]}`,
// ];

// console.log(bills, tips, totalCost);

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1997,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const nick = {
//   firstName: "Nick",
//   lastName: "Velazquez",
//   birthYear: 1999,
//   job: "Programmer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };

// console.log(nick.calcAge());
// console.log(nick);
// console.log(nick["calcAge"](1991));

// console.log(nick);

// console.log(nick.lastName);

// console.log(nick["lastName"]);
// console.log(nick.getSummary());

// const interestedIn = prompt(
//   "What do you want to know aboiut Nick? Choose between firstName , lastName, age, job, and friends"
// );

// if (nick[interestedIn]) {
//   console.log(nick[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName , lastName, age, job, and friends"
//   );
// }

// nick.location = "America";
// nick["twitter"] = "@jonasschmedtman";
// console.log(nick);

// myCountry.population = 352;
// myCountry["population"] = 350;

// console.log(
//   `${myCountry["country"]} has ${myCountry["population"]} million ${myCountry.language} speaking people, 2 neighboring countries and a capital called ${myCountry.capital}`
// );

// Challenge
// 'Jonas has 3 friends and his best friend is called Michael'

// console.log(
//   ` ${nick.firstName} has ${nick.friends.length} friends and his best friend is called ${nick.friends[0]}`
// );

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());
// const myCountry = {
//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`;
//   },
//   country: "America",
//   capital: "Washington DC",
//   language: "English",
//   population: 350,
//   neighbors: ["canada", "Mexico"],
//   checkIsland: function () {
//     return `${this.neighbors.length > 0 ? true : false} `;
//   },
// };

// const calcBmi = function (height, weight) {
//   const bmi = (weight / height) ** 2;
//   return bmi;
// };

// const marksBmi = {
//   name: "Mark",
//   weight: 78,
//   height: 1.69,
//   calcBmi: function (height, weight) {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const johnsBmi = {
//   name: "John",
//   weight: 109,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const higherBmi = function (markBmi, johnBmi) {
//   if (markBmi > johnBmi) {
//     console.log(
//       `${marksBmi.name}'s bmi is higher than ${johnsBmi.name}'s at ${Math.round(
//         marksBmi.bmi
//       )} vs ${johnBmi}`
//     );
//     return markBmi;
//   } else if (johnBmi > markBmi) {
//     console.log(
//       `${johnsBmi.name}'s bmi is higher than ${marksBmi.name}'s at ${Math.round(
//         johnsBmi.bmi
//       )} vs ${Math.round(markBmi)}`
//     );
//     return johnBmi;
//   }
// };
// marksBmi.calcBmi();
// johnsBmi.calcBmi();

// console.log(highesrBmi(marksBmi.bmi, johnsBmi.bmi));

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep = rep += 1) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1997,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i]);

//   // filling an array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let a = 0; a < years.length; a++) {
//   ages.push(2037 - years[a]);
// }
// console.log(ages);

// // continue and break;
// console.log("ONLY STRINGS");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   types.push(typeof jonas[i]);
//   console.log(jonas[i], typeof jonas[i]);
// }
// console.log("Break with Number");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   types.push(typeof jonas[i]);
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1997,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // 0,1 ... 4

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let i = 1; i <= 50; i++) {
//   console.log(`voter number ${i} is currently voting`);
// }
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const percentages2 = [];
// const populations = [50, 1441, 103, 450];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages2);

// console.log(percentageOfWorld1(populations[0]));

// for (let excersize = 1; excersize < 4; excersize++) {
//   console.log(`-------- Starting excersize ${excersize}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repitition ${rep}`);
//   }
// }

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(listOfNeighbours[i][y]);
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repitiion ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end");
  }
}
