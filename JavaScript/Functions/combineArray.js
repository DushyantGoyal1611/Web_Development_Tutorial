const combineIt = (...value) => {
    const newArr = [].concat(...value);
    
    const seen = new Set(newArr);

    return [...seen];
}

const arr = combineIt([1, 2], [2, 3], [3, 4, 5])
console.log(arr)