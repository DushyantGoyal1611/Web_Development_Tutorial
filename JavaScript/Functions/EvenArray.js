// const filterEvenNumbers = (nums) => {
//     const newArr = []
//     for(let num of nums){
//         if(num%2 == 0){
//             newArr.push(num)
//         }
//     }
//     return newArr
// }

// result = filterEvenNumbers([1, 2, 3, 4, 5, 6])
// console.log(result)



// Using Filter
// const filterEvenNumbers = nums => nums.filter(num => num%2 == 0)

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Square the even number arr using filter and map

const evenArr = nums => nums.filter(num => num%2 == 0)
const sqArr = nums => nums.map(evenArr*evenArr)


console.log(sqArr([1, 2, 3, 4, 5, 6]))
