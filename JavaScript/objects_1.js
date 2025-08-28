const sym = Symbol("id")

const jsUser = {
    name: "Dushyant",
    "full name": "Dushyant Goyal",
    [sym]: 12345,
    age: 100,
    location: "haryana",
    email: "goyal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[sym]);


// Changing Email
// jsUser['email'] = "goyaldushyant1611@gmail.com"
// console.log(`Changed Email to ${jsUser['email']}`)

// // Locking the object using freeze
// Object.freeze(jsUser)

// jsUser['email'] = "dushyantgoyal07@gmail.com"
// console.log(`Changing Email After Freeze: ${jsUser['email']}`)
// console.log(jsUser)

// Adding Element
jsUser.greeting = function(){
    console.log(`Hello ${this['full name']}`)
}

console.log(jsUser.greeting())


