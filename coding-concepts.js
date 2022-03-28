// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: The method ".push" adds the value "indigo" to the array and returns the new length of the array.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The method ".length" counts how many characters the value of variable "cohort" has. 


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: This function gives the 5th character (0 = "H") as output. [4] determines which character to take from "Hello World!"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: This function spits out the array's word that is located on the position 1 (0 = Javascript, 1 = Ruby)


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: (Function can not be verified/ doesn't run after removing //). The method ".UpperCase" transforms the two "weekDays" into uppercase letters.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The operator "typeof" returns a string that indicates the type of "dataTypes.length". ".length" indicates that it has to be a number.
