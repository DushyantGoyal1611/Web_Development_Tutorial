const makeSentence = (subject="Someone",...words) => {
    return `${subject} ${words.join(" ")}`
}

result1 = makeSentence("Dushyant", "loves", "JavaScript")
result2 = makeSentence(undefined, "Dushyant", "loves", "JavaScript")
console.log(result1);
console.log(result2);
