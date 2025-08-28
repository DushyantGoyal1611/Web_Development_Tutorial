const isPalindrome = (value) => {
    n = value.length
    mid = Math.floor(n/2)

    for(let i=0; i<mid; i++){
        if(value[i] != value[n-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"))