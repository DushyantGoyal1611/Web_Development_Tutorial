// Immediately Invoked Function Expressions (IIFE)
// Mostly for Async

// Normally we call our function like this:
function db_call1(){
    console.log("Normal Call");
    console.log("Database Connected");
}

db_call1();


/*
Q. How to use IIFE?
Ans. Cover it in ()

Rule of Thumb:
Whenever you write an IIFE right after another statement,
always use a semicolon before the IIFE to prevent JS from trying to combine them.

*/ 


(function db_call2(){
    console.log("IIFE Call")
    console.log("Database Connected")
})();


// Q. Why do we use iife

/* 1. Avoid Polluting the Global Scope
Variables declared inside a normal function can still be accessible if not scoped properly.
IIFEs create a 'private scope'
*/

// (function(){
//     var secret = "I am hidden";
// })();

// console.log(secret);IIFE so they interfere with other code
// 'secret' doesn’t leak to the global scope because the "IIFE creates its own scope".

/* 2. Run Code Immediately
Sometimes, you want a function to execute once, when the script loads, without calling it manually.
*/

// (function initApp(){
//     console.log("App Initialized");
// })();

/*initApp runs immediately—perfect for setup code
like connecting to a database, configuring settings, or initializing UI components.*/


/* 3. Encapsulate Logic
You can keep helper functions and variable private inside IIFE so they interfere with other code
*/

// (function(){
//     function helper(){
//         console.log("Helping....");
//     }
//     helper() // will succeed
// })();

// // helper(); // will fail

// helper is hidden from the outside world.

/* 4. Can Accept Parameters
You can pass data into an IIFE safely:
*/

// (function(name){
//     console.log(`Hello ${name}`);
// })("Dushyant");

// No global variables needed.

// IIFE using Arrow Function
((name) => console.log(name))("Dushyant")