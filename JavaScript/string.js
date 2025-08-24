// Note: String are primitive data types and immutable(non-changing) means all changes happens in its copy.
// to understand it properly check 'replaceall' example


const text = "learning javascript"

// to find the size of the text
console.log(`Size of the Text is: ${text.length}`)

// to find the character at particular index
console.log(`Using CharAt: ${text.charAt(2)}`)

// to find the index of particular character
console.log(`Using IndexOf: ${text.indexOf('j')}`)


// to convert it into Uppercase
console.log(`Uppercase: ${text.toUpperCase()}`)

// to convert it into Lowercase
console.log(`Lowercase: ${text.toLowerCase()}`)

// to Capitalize the first Word
capital_text = text.charAt(0).toUpperCase() + text.slice(1)
console.log(`Capitalize: ${capital_text}`)

// Reverse a string
let rev = ""
size = text.length
for(let i=size-1; i>=0; i--){
    rev += text.charAt(i)
}

console.log(`Reverse String is: ${rev}`)


// Concatenation
console.log("Hello"+"World")
console.log(text.concat(" from Chai aur Javascript"))


// Trim (Removing Trailing white spaces from string)
space_text = "    I am Batman      "
console.log(`Before trim: ${space_text}`)
console.log(`After trim: ${space_text.trim()}`)


// Using Replace and Replace All
console.log("Using Replace:")
console.log(text.replace(" ","")) // Removed the space between Learning and Javascript

const replace_text = "Learning Javascript Learning"
console.log("Using Replace All:")
console.log(replace_text.replaceAll("Learning", "Completed"));
console.log(replace_text)

// split():- A string can be converted to an array with the split() method:
console.log(text.split(" "))
string_arr = text.split(" ")
console.log(`Accessing First Element: ${string_arr[0]}`)