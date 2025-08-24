// // Number


// // toFixed():- round it to a specific number of decimal places
// const num = new Number(12.23456);

// console.log(num.toFixed(0))
// console.log(num.toFixed(2))
// console.log(num.toFixed(1))

// // toPrecision()
// const num_1 = 123.32345
// console.log(num_1.toPrecision(3));
// console.log(num_1.toPrecision(2));
// console.log(num_1.toPrecision(5));

// //toLocaleString()
// const hundreds = 100000000
// console.log(hundreds.toLocaleString("en-IN"));

// // Maths
// console.log(Math);
// console.log(`Absolute Value: ${Math.abs(-4)}`)
// console.log(`Round of Value: ${Math.round(4.3)}`);
// console.log(`If want to round off greater than value: ${Math.ceil(4.3)}`);
// console.log(`If want to round off lower than value: ${Math.floor(4.3)}`);
// console.log(`Max Value: ${Math.max(4,3,6,8)}`);
// console.log(`Min Value: ${Math.min(4,3,6,8)}`);

// // Dice Logic using Math.Random
const min = 1
const max = 6

console.log("Dice is Rolling:::::::::")
const number = max - min + 1   // Very Important formula to calculate number between 2 selected values and +1 is used to avoid '0'
const formula = Math.floor(Math.random() * (number) + min)
console.log(formula);