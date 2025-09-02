const allButtons = document.querySelectorAll(".button")

const body = document.querySelector('body')

allButtons.forEach(function (button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        // Using if-else statements
        // if(e.target.id == "grey"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == "yellow"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == "blue"){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == "white"){
        //     body.style.backgroundColor = e.target.id
        // }

        // Using Switch
        // switch(e.target.id){
        //     case "grey":
        //         body.style.backgroundColor = e.target.id
        //         break
        //     case "yellow":
        //         body.style.backgroundColor = e.target.id
        //         break
        //     case "blue":
        //         body.style.backgroundColor = e.target.id
        //         break
        //     case "white":
        //         body.style.backgroundColor = e.target.id
        //         break
        //     default:
        //         body.style.backgroundColor = "white"            
        // }

        // Optimized Switch
        // switch(e.target.id){
        //     case "grey":
        //     case "yellow":
        //     case "blue":
        //     case "white":
        //         body.style.backgroundColor = e.target.id
        //         break
        //     default:
        //         body.style.backgroundColor = "white" 
        // }

        // Even Shorter version
        body.style.backgroundColor = ['grey', 'white', 'blue', 'yellow'].includes(e.target.id)
        ? e.target.id : "white";
    })
})
