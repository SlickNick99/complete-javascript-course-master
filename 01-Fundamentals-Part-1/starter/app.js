// let js = "amazing";
// if (js === "amazing") alert("Javascript is fun!");

// let firstName = "Nick";
// console.log(firstName);

// let lastName = "Velazquez";
// console.log(firstName + lastName);

// let javascriptIsFun = true;

// console.log(javascriptIsFun);

// Math operators
// let currentYear = 2022;
// const ageSarah = currentYear - 2004;
// const ageNick = currentYear - 1999;
// const firstName = "Nick";
// const lastName = "Velazquez";
// const isFullAge = ageSarah >= 18;
// console.log(ageNick, ageSarah);

// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10

// x *= 4; // x = x * 4 = 100

// x++; // x = x + 1

// x--; // x = x - 1
// console.log(x);

// // Comparison operators
// // >, <, >=, <=

// console.log(ageNick > ageSarah);
// console.log(ageSarah >= 18);

// let markWeight1 = 172;
// let markHeight1 = 5.5;

// let johnWeight1 = 209;
// let johnHeight1 = 6.4;

// let markBmi1 = markWeight1 / markHeight1 ** 2;

// let johnBmi1 = johnWeight1 / johnHeight1 ** 2;

// let markHigherBmi1 = markBmi1 > johnBmi1;
// let johnHigherBmi1 = johnBmi1 > markBmi1;

// if (markHigherBmi1 === true) {
//   console.log("Marks BMI is higher than Johns");
// } else {
//   console.log("johns BMI is higher than Marks");
// }
// console.log(markBmi1);
// console.log(johnBmi1);
// console.log(johnHigherBmi1);

// const markWeight2 = 209;
// const markHeight2 = 6.1;

// const johnWeight2 = 187;
// const johnHeight2 = 5.7;

// const markBmi2 = markWeight2 / markHeight2 ** 2;

// const johnBmi2 = johnWeight2 / johnHeight2 ** 2;

// const markHigherBmi2 = markBmi2 > johnBmi2;
// const johnHigherBmi2 = johnBmi2 > markBmi2;

// console.log(`marks bmi is ${markBmi2}`);
// console.log(`Johns bmi is ${johnBmi2}`);
// if (markHigherBmi2) {
//   console.log("Marks BMI is higher than Johns");
// } else {
//   console.log("johns BMI is higher than Marks");
// }

// console.log(johnHigherBmi2);

// const firstName = "Nick";
// const job = "teacher";
// const birthYear = 1999;
// const currentYear = 2022;
// const age = currentYear - 1999;

// const nick = "I'm " + firstName + ", a " + age + " year old " + job;

// console.log(nick);

// const nickNew = `I'm ${firstName}, a ${age} year old ${job}`;
// console.log(nickNew);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can get her driving license`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah cannot get her driving license she has ${yearsLeft} years left in order to get her license`
//   );
// }

// const birthYear = 2021;

// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23));

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// 5 falsy value: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Nick"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Dont't spend it all");
// } else {
//   console.log("You should get a job");
// }

// let height;

// if (height) {
//   console.log("Yay height is defined");
// } else {
//   console.log("height is undefined");
// }

// const age = 18;
// if (age === 18) console.log("You're 18");

// const favNum = Number(prompt("What's your favorite number"));

// console.log(favNum);

// if (favNum === 23) {
//   // '23' == 23
//   console.log("Cool 23 is an amazing number");
// } else if (favNum === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favNum !== 23) {
//   console.log("why not 23?");
// }

// const numNeighbors = Number(
//   prompt("How many neighbors does your country have?")
// );

// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const hasDriversLicense = true; // a;
// const hasGoodVision = false; // b

// const isTired = true; // c

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// console.log(hasDriversLicense || hasGoodVision || isTired);

// const dolphinsAvgScore1 = (111 + 108 + 89) / 3;
// const koalaAvgScore1 = (101 + 105 + 110) / 3;

// const minScore = 100;

// console.log(Math.round(dolphinsAvgScore1), Math.round(koalaAvgScore1));

// if (dolphinsAvgScore1 && koalaAvgScore1 <= minScore) {
//   console.log("No one wins you both suck");
// } else if (
//   dolphinsAvgScore1 > koalaAvgScore1 &&
//   dolphinsAvgScore1 >= minScore
// ) {
//   console.log("dolphins win!");
// } else if (dolphinsAvgScore1 < koalaAvgScore1 && koalaAvgScore1 >= 100) {
//   console.log("koalas win!");
// } else {
//   console.log("Its a draw");
// }

const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory video");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;

//   default:
//     console.log("Not a valid day!");
// }

// const promptDay = prompt("What day is it?");

// if (promptDay == "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (promptDay === "tuesday") {
//   console.log("Prepare theory video");
// } else if (promptDay === "wednesday" || promptDay === "thursday") {
//   console.log("Write code examples");
// } else if (promptDay === "friday") {
//   console.log("Record videos");
// } else if (promptDay === "saturday" || promptDay === "sunday") {
//   console.log("Wnjoy the weekend");
// } else {
//   console.log("Not a valid day");
// }

// const language = prompt("What language do you speak?");

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("Most number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;

//   default:
//     console.log("Great language too: :D");
// }

const age = 15;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);
