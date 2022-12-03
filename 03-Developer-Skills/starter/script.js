// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1 Understanding what the problem is
// What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - Whats a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// -Subtract min from max (amplitude) and return it

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) min = curTemp;
//     console.log(max, min);
//   }
//   return max - min;
// };

// const newAmplitude = calcTempAmplitudeNew([3, 5, 7], [9, 0, 5]);

// console.log(newAmplitude);
// PROBLEM 2
// function should now recieve 2 arrays of temps
//1 (Understanding the problem)
// - With 2 arrays , should we implement functionality twice? NO!

// 2) Breaking up into sub-problems
// How to merge 2 arrays?

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',

//     // C) FIX
//     value: Number(prompt('Degrees celcius: ')),
//   };
//   // B) FIND
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) min = curTemp;
//     console.log(max, min);
//   }
//   return max - min;
// };

// const newAmplitude = calcTempAmplitudeNew([3, 5, 7], [9, 0, 5]);

// console.log(newAmplitude);

// 1 Understanding what the problem is
// Array transformed to string, seperated by ...

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with concat
// - string needs to contain day (index + 1)
// - Add ... between elements and start and end of string

// console.log(`data1 is 17... data2 is 21... data3 is 23...`);
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const allData = data1.concat(data2);
// console.log(allData);
// const printForecast = arr => {
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}... in ${i + 1} days, `;
//   }
//   console.log(str);
//   return str;
// };

// printForecast(allData);
// console.log(printForecast([17, 21, 23]));
// printForecast();

// TEST DATA1: {17, 21, 23}
// TEST DATA2: {12, 5, -5, 0, 4}

// Log how many beds were sold this year in this manner
// "34 beds were sold in January 200 beds were sold in february and there were 2104 beds sold this year"

// 1. Underestanding what the problem is?
// Array transformed to string
// How do we add all the numbers together?
// How to combine Months of year to the array order

// 2. Breaking up into sub problems
// Adding all the total beds sold
// Adding the number assigned to a month without hardcoding the month
// add the months in the same function but a different for loop then possibly combine both of them into a log statement

// logging the whole string
// console.log(
//   'In the month of January 34 mattreses were sold and 2104 were sold in total'
// );
// const bedsSoldMonthly = [34, 200, 188, 19, 10, 78, 93, 205, 609, 500, 78, 100];

// const allSoldBeds = function (beds) {
//   let allBeds = 0;
//   for (let i = 0; i < beds.length; i++) {
//     allBeds += beds[i];
//   }

//   return allBeds;
// };

// allSoldBeds(bedsSoldMonthly);

// const months = [
//   'January',
//   'Februrary',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'december',
// ];

// const salesAndMonths = function (sales, months) {
//   let totalSales = 0;
//   for (let i = 0; i < sales.length && i < months.length; i++) {
//     totalSales += sales[i];
//     console.log(
//       `In the month of ${months[i]} ${sales[i]} were sold and ${totalSales} were sold this year` +
//         `${allSoldBeds(bedsSoldMonthly)}`
//     );
//   }
//   return totalSales;
// };

// salesAndMonths(bedsSoldMonthly, months);
// const bedSales = function (a) {
//   let totalBeds = 0;

//   for (let i = 0; i < a.length; i++) {
//     totalBeds += a[i];
//     console.log(
//       `In the month of ${months[i]} ${a[i]} beds were sold and ${totalBeds} total beds sold`
//     );
//   }

//   return totalBeds;
// };

// const monthsOfYear = function (months) {
//   let completeMonths = '';
//   for (let i = 0; i < months.length; i++) {
//     completeMonths = months[i];
//     return completeMonths;
//   }
// };
// monthsOfYear(months);

// bedSales(bedsSoldMonthly);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTips = function (bills) {
//   let tipLeft = 0;
//   let totalBill = 0;

//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] > 50 && bills[i] < 300) {
//       tipLeft = bills[i] * 0.15;
//     } else {
//       tipLeft = bills[i] * 0.2;
//     }
//     totalBill += bills[i] + tipLeft;
//     tips.push(tipLeft);
//     totals.push(totalBill);
//     const total = Math.round(tips[i]) + totals[i];

//     console.log(total);
//   }
//   // return total;
// };
// const calcAvg = function (a) {
//   let avg = 0;

//   for (let i = 0; i < a.length; i++) {
//     avg += a[i];
//   }

//   // return avg;
//   avg /= a.length;
//   console.log(avg);
//   return avg;
// };

// // console.log(tips);
// // console.log(totals);
// // console.log(calcTips(bills));

// calcTips(bills);
// calcAvg(bills);
// console.log(tips);
// console.log(totals);
// console.log(calcAvg(totals));
