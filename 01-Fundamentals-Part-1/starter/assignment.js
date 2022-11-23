const country = "America";
const continent = "North America";
const population = 51;
const americaInHalf = population / 2;
const islandQuestion = "is your country an island?";
isIsland = false;

// const language = "english";

// console.log(islandQuestion, isIsland, country, language, continent, population);

// console.log(
//   country +
//     " is in " +
//     continent +
//     " and its " +
//     population +
//     " people speak " +
//     language
// );

// console.log(
//   `${country} is in ${continent} and its ${population} million people speak ${language}`
// );

// console.log(americaInHalf);
// const countryAvgPop = 33;
// const countryAvg = countryAvgPop - population;

// if (population >= countryAvg) {
//   console.log(`${country}'s population is greater than 33 million`);
// } else {
//   console.log(`${country} is ${countryAvg} million below average`);
// }

// if (population <= 50 && language == "english" && !isIsland) {
//   console.log(`${country} is right for you`);
// } else {
//   console.log(`${country} is not right for you`);
// }

// const pop = 30;
// const currentPop = pop >= 33 ? "above" : "below";
// console.log(`${country} population is ${currentPop} average`);

const bill = 300;
const tip15 = bill * 0.15;
const tip20 = bill * 0.2;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const totalCost = bill + tip;

console.log(
  `the bill was $${bill} the tip $${tip} was the total was $${totalCost}`
);
