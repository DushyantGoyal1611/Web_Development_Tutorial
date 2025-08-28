const setElements = (value) => {
    const seen = new Set();

    for(let num of value){
        if(!seen.has(num)){
            seen.add(num)
        }
    }

    return [...seen]
}

const result = setElements([1,2,1,2,4,3,4,5,5,6,7,4,2,])
console.log(result)