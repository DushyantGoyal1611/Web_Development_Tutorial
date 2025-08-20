// for(let i=0; i<5; i++){
//     let row=""
//     for (let j = 0; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row)
// }


// for(let i=0; i<5; i++){
//     let row = ""

//     for(let j=5; j>i; j--){
//         row += "*"
//     }
//     console.log(row)
// }

// Traingle
// for(let i=0; i<5; i++){
//     let row = ""
//     for(let j=5; j>i; j--){
//         row += " "
//     }
//     for(let k=0; k<i; k++){
//         row += "* "
//     }
//     console.log(row)
// }


// Diamond
// for(let i=0; i<5; i++){
//     let row = ""
//     for(let j=5; j>i; j--){
//         row += " "
//     }
//     for(let k=0; k<i; k++){
//         row += "* "
//     }
//     console.log(row)
// }
// for(let i=0; i<5; i++){
//     let row = ""
//     for(let j=0; j<i; j++){
//         row += " "
//     }
//     for(let k=5; k>i; k--){
//         row += "* "
//     }
//     console.log(row)
// }


// Numbers
// for(let i=0; i<=5; i++){
//     row = ""
//     for(let j=1; j<=i; j++){
//         row += j+" "
//     }
//     console.log(row)
// }

// let num = 1
// for(let i=1; i<5; i++){
//     row = ""
//     for(let j=1; j<=i; j++){
//         row += num+ " "
//         num++
//     }
//     console.log(row)
// }



// Find a Prime Number using Loop
// let num = 7
// let isPrime = true

// if(num<=1){
//     isPrime = false;
// }else{
//     for(let i=2; i<=num/2; i++){
//         if(num%i==0){
//             isPrime = false
//             break
//         }
//     }
// }

// if(isPrime){
//     console.log("Prime")
// }else{
//     console.log("Not Prime")
// }

// find the largest number in an array
// let arr = [3, 7, 2, 9, 4]
// max = arr[0]
// for(let element of arr){
//     if(element > max){
//         max = element
//     }
// }
// console.log(max)

// count how many even and odd numbers are in an array
// let arr = [3, 7, 2, 9, 4]
// even_count = 0
// odd_count = 0

// for(let element of arr){
//     if(element%2==0){
//         even_count++
//     }else{
//         odd_count++
//     }
// }

// console.log(`Even Count:${even_count}\nOdd Count:${odd_count}`)

// Even and Odd without Prime

// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let even_count = 0;
// let odd_count = 0;

// function isPrime(num){
//     if(num<=1){
//         return false
//     }
//     for(let i=2; i<=num/2; i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }

// for(let element of arr){
//     if(!isPrime(element)){
//         if (element % 2 === 0) {
//             even_count++;
//         } else {
//             odd_count++;
//         }
//     }
// }

// console.log(`Even Count (excluding primes): ${even_count}`);
// console.log(`Odd Count (excluding primes): ${odd_count}`);


// calculate the sum of all prime numbers in an array
// let arr = [2, 3, 4, 5, 6, 7, 8, 9]
// value = 0

// function isPrime(num){
//     if(num<=1){
//         return false
//     }
//     for(let i=2; i<=num/2; i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }

// for(let element of arr){
//     if(isPrime(element)){
//         value += element
//     }
// }

// console.log(value)


// Array Methods
// arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// arr.shift()
// arr.splice(1,1,"Ola")
// arr.push("Amazon")
// console.log(arr) 

// Functions
// function sum(a, b){
//     return a+b
// }

// let a=2, b=3;
// result = sum(a, b)
// console.log(result)

// Arrow Functions (Anonymous)
// const sum =  (a, b) => {return a+b}

// console.log(sum(4,5))

// ForEach Method (forEach does not return a new array.)
// arr = [1,2,3,4,5]
// arr.forEach(element => {
//     console.log(element*element)
// });


// // Map Method
// arr = [1,2,3,4,5]

// newArr = arr.map(element => {
//     return element+2
// });

// console.log(newArr)

// Filter Method
// arr = [1,2,3,4,5]

// newArr = arr.filter(element => {
//     return element%2==0
// })

// console.log(newArr)


// function sum(a, b){
//     return a+b
// }

// let result = sum(2,3)
// console.log(result)

// let result = (a, b) => a+b

// console.log(result(3,2))


// Functions
// function welcomeMSG(name){
//     return (`Hello ${name} from JavaScript`)
// }

// result = welcomeMSG("Dushyant")
// console.log(result)


// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map(element => element.length)

// console.log(a2)

// (function () {
//     console.log("this run immediately")
// })();

// take an array of numbers and returns the sum of all even numbers greater than 10.
// let arr = [5, 12, 8, 130, 44, 7]

// arr2 = arr.filter(element => {
//     if(element>10 && element%2==0){
//         return element
//     }
// }).reduce((res, current) => {
//     return res+current
// })

// // arr3 = arr2.reduce((res, current) => {
// //     return res+current
// // })

// console.log(arr2)

// 
let n = 10
let arr = []

for(let i=1; i<=n; i++){
    arr[i-1] = i
}

console.log(arr)

arr2 = arr.reduce((res, current) => res+current)
arr3 = arr.reduce((res, current) => res*current)

console.log(arr2)
console.log(arr3)