/*
Reduce means "Combine all items into a single result.""

1. This File contains practice questions related to Reduce
3. reduce reduces an array to a single value (number, string, object, etc.) by repeatedly applying a function.
2. Squash into one value
*/

// ### Questions start from here ---------

// Q1. Use reduce to find the sum of all numbers
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc,curr)=> acc+=curr, 0)
// console.log(result);

// Q2. Multiply all numbers
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc,curr)=> acc*=curr,1)
// console.log(result);

// Q3. Flatten an array
// const arrays = [[1, 2], [3, 4], [5, 6]];
// const result = arrays.reduce((acc,curr) => acc.concat(...curr), [])
// console.log(result);

// Q4. Count occurrences of items in an array
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const result = fruits.reduce((acc,fruit) => {
//     acc[fruit] = (acc[fruit] || 0)+1
//     return acc
// },{})

// console.log(result);

// Q5. Use reduce to calculate the total quantity of "apple" across all orders
// const orders = [
//   { id: 1, customer: "Alice", items: [ { name: "apple", qty: 2 }, { name: "banana", qty: 3 } ] },
//   { id: 2, customer: "Bob", items: [ { name: "orange", qty: 1 }, { name: "apple", qty: 1 } ] },
//   { id: 3, customer: "Charlie", items: [ { name: "apple", qty: 5 }, { name: "orange", qty: 2 } ] },
//   { id: 4, customer: "David", items: [ { name: "banana", qty: 10 } ] }
// ];

// const result = orders.reduce((acc, curr) => {
//     for(let item of curr['items']){
//         if(item['name'] == 'apple'){
//             acc+=item['qty']
//         }
//     }
//     return acc
// },0)


// console.log(result);

// Q6. Use reduce to create an object showing total quantity of each item
// const orders = [
//   { id: 1, customer: "Alice", items: [ { name: "apple", qty: 2 }, { name: "banana", qty: 3 } ] },
//   { id: 2, customer: "Bob", items: [ { name: "orange", qty: 1 }, { name: "apple", qty: 1 } ] },
//   { id: 3, customer: "Charlie", items: [ { name: "apple", qty: 5 }, { name: "orange", qty: 2 } ] },
//   { id: 4, customer: "David", items: [ { name: "banana", qty: 10 } ] }
// ];

// const result = orders.reduce((acc,curr) => {
//     let dict = {}
//     for(let item of curr['items']){
//         dict = {
//             item['name']: acc+=item['qty']
//         }
//     }

//     return dict
// }, {})

// console.log(result);



const fun = () =>{
    var password = true
    console.log(val);
    
}
console.log(password);

