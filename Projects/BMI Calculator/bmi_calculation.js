const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        result.textContent = "Please give a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        result.textContent = "Please give a valid weight";
    }else{
        const bmi = weight/((height/100)**2)
        let bmi_text = ""
        if(bmi > 18.6){
            bmi_text = "Underweight"
        }else if(bmi>=18.6 && bmi<=24.9){
            bmi_text = "Normal Range"
        }else{
            bmi_text = "Overweight"
        }
        result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)}<br> ${bmi_text}</span>`;
    }    
})