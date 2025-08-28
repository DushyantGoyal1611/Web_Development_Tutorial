/*
Filter means "Pick only what you want"

1. This File contains practice questions related to Filter
2. Keep only items that pass a test
*/

// ### Questions start from here ---------

// Q1. Even Numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = nums.filter((num) => num%2==0)

// console.log(result);

// Q2. Greater than 10
// const nums = [5, 12, 8, 130, 44];

// const result = nums.filter((num) => num>10)

// console.log(result);


// Q3. Keep only the words that have more than 5 letters.
// const words = ["apple", "banana", "kiwi", "strawberry", "fig"];

// const result = words.filter((word) => word.length>5)

// console.log(result);

// Q4. From this array of numbers, keep only the prime numbers.
// const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const result = nums.filter((num) => {
//     if (num < 2) return false;

//     for(let i=2; i<= Math.sqrt(num); i++){
//         if(num%i == 0){
//             return false
//         }
//     }
//     return true
// })

// console.log(result);

// Q5. Keep only the ones that are Gmail addresses.
// const emails = [
//   "john@gmail.com", "sarah@yahoo.com",
//   "mike@gmail.com", "lisa@outlook.com",
//   "emma@gmail.com"
// ];

// const result = emails.filter((id) => id.includes("@gmail.com"))

// console.log(result);

// Q6. Only with Palendrome
// const words = ["level", "world", "radar", "hello", "madam", "javascript"];

// const result = words.filter((word) => {
//     for(let i=0; i<Math.floor(word.length/2); i++){
//         if(word[i] != word[word.length-i-1]){
//             return false
//         }
//     }
//     return true
// })

// console.log(result);

// Q7. Write code to filter out only the students who scored more than 80.
// const students = [
//   { name: "Alice", marks: 75 },
//   { name: "Bob", marks: 82 },
//   { name: "Charlie", marks: 90 },
//   { name: "David", marks: 60 }
// ];

// const result = students.filter((student) => student["marks"]>80)

// console.log(result);

// Q8. Write the filter so the output only contains words ending with "y".
// const words = ["sky", "apple", "fly", "banana", "try", "grape"];

// const result = words.filter((item) => {
//     if(item.slice(-1) != 'y'){
//         return false
//     }
//     return true
// })

// console.log(result);

// Q9. Filter only the people who are 18 or older
// const people = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 22 },
//   { name: "Mark", age: 15 },
//   { name: "Mary", age: 30 }
// ];

// const result = people.filter((item) => item['age']>=18)

// console.log(result);

// Q10. Filter only the orders that contain **at least one item named "apple"**
// const orders = [
//   { id: 1, customer: "Alice", items: [ { name: "apple", qty: 2 }, { name: "banana", qty: 3 } ] },
//   { id: 2, customer: "Bob", items: [ { name: "orange", qty: 1 } ] },
//   { id: 3, customer: "Charlie", items: [ { name: "apple", qty: 5 }, { name: "orange", qty: 2 } ] }
// ];

// const result = orders.filter((order) => {
//     for(let item of order.items){
//         if(item['name'] == 'apple'){
//             return true
//         }
//     }
//     return false
// })

// console.log(JSON.stringify(result, null, 2));  // to null,2 is used to beautify it and JSON to parse object

// Q11. Filter orders that contain at least one "apple" AND the total quantity of all items is greater than 5.
const orders = [
  { id: 1, customer: "Alice", items: [ { name: "apple", qty: 2 }, { name: "banana", qty: 3 } ] },
  { id: 2, customer: "Bob", items: [ { name: "orange", qty: 1 }, { name: "apple", qty: 1 } ] },
  { id: 3, customer: "Charlie", items: [ { name: "apple", qty: 5 }, { name: "orange", qty: 2 } ] },
  { id: 4, customer: "David", items: [ { name: "banana", qty: 10 } ] }
];

const result = orders.filter((order) => {
    let quantity = 0
    let hasApple = false
    for(let item of order.items){
        quantity += item['qty']
        if(item['name'] == 'apple'){
            hasApple = true
        }
    }
    return hasApple && quantity>5
})
console.log(JSON.stringify(result,null,2));



