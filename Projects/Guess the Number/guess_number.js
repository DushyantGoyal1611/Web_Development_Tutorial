const form = document.querySelector(".form");

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min +1) + min)
}
let generatedNum = getRandomNumber(1, 100);
let guesses = []
let guessCounter = 10;

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(`Generated Number is ${generatedNum}`)

    const guessedNum = Number(document.getElementById("guessField").value)
    const result = document.querySelector(".lowOrHi");
    guesses_arr = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");

    if(guessCounter > 0){
        if(generatedNum === guessedNum){
            result.innerText = "Perfect";
        }else if(generatedNum > guessedNum){
            result.innerText = "Low";
        }else{
            result.innerText = "High";
        }
        guesses.push(guessedNum)
        guesses_arr.innerHTML = guesses.join(",")
        guessCounter--;
        lastResult.innerText = guessCounter;
    }else {
        result.innerText = "Game Over";
    }
    
})