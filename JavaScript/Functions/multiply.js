const multiple = (...value) => {
    let product = 1
    for(let num of value){
        product *= num
    }
    return `Numbers: ${value.join(" ")} → Product = ${product}`;
}

console.log(multiple(2,3,5))