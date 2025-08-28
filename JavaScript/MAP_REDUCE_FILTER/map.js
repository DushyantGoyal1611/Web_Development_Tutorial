/*
Map means "Take each item, do something to it, and return a new array.""

1. This File contains practice questions related to Map
2. Changes every item
*/

// ### Questions start from here ---------

// Q1. Square every item
// const nums = [1,2,3,4]

// const doubled = nums.map(n => n*2)

// console.log(doubled);

// Q2. Triple every item
// const nums = [1,2,3,4]

// const tripled = nums.map(n => n*3)

// console.log(tripled);


// Q3. Capitalize the Array
// const names = ["alice", "bob", "charlie"];

// const capitalize = names.map(items => 
//     items[0].toUpperCase() + items.slice(1)
// )

// console.log(capitalize);

// Q4. Convert into String and Concat $ as prefix
// const nums = [2, 4, 6, 8, 10];

// const convert = nums.map(num => "$".concat(num))

// console.log(convert);

// Q5. create an array of strings that say:
// "Value: 5", "Value: 10", "Value: 15", "Value: 20".


// const nums = [5,10,15,20]

// const convert = nums.map((item) => "Value: ".concat(item))

// console.log(convert);

// Q6. Celsius into Fahrenheit
// const celsius = [0, 10, 20, 30, 40];

// const convert = celsius.map((item) => {
//     fahrenheit_formula = (item*(9/5)) + 32
//     return `${fahrenheit_formula}^F`
// })

// console.log(convert);

// Q7. Calculate Length

// const words = ["hello", "world", "javascript", "map"];
// const size = words.map((item)=> item.length)
// console.log(size);


// Q8. return an array of objects with number and its square

// const numbers = [3, 7, 11, 15];

// const result = numbers.map((num) => {
//     const dict = {
//         "number": num,
//         "square": num*num
//     }
//     return dict
// })

// console.log(result);


// Q9. Return an array where each element is the price after adding 18% GST.
// const prices = [100, 200, 300, 400];

// const price_after_tax = prices.map((price) => price+price*18/100)

// console.log(price_after_tax);

// Q10. return an array of objects with fruit and its length
// const fruits = ["apple", "banana", "cherry"];

// const result = fruits.map((fruit) => {
//     const dict = {
//         "fruit": fruit,
//         "length": fruit.length
//     }
//     return dict
// })


// console.log(result);

// Q11. return an array of objects with original and double and isEven 
// const nums = [1, 2, 3, 4, 5];

// const result = nums.map((num) => {
//     const dict = {
//         "original": num,
//         "double": num*2,
//         "isEven": num%2==0? true : false
//     }
//     return dict
// })

// console.log(result);


// Q12. return an array of objects with original and capitalized and length
// const names = ["alice", "bob", "charlie"];

// const result = names.map((item) => {
//     const dict = {
//         "original": item,
//         "capitalized": item[0].toUpperCase() + item.slice(1),
//         "length": item.length
//     } 

//     return dict
// })

// console.log(result);