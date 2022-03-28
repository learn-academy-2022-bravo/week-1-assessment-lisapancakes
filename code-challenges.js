// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Create a function with two strings
const stringify = (stringA, stringB) => {
// Compare if stringA has more characters than stringB
    if (stringA.length > stringB.length) {
// If stringA is longer, return StringA
        return stringA;
// Otherwise, return stringB
    } else if (stringB.length > stringA.length) {
      return stringB;
// If they are equal, return the "They are equal"
    } else if (stringB.length === stringA.length) {
      return "They are equal!";
    }
  };
// Run the function  
//  console.log(stringify(fruit1, fruit2));

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Create a function that takes in a given number and determines if the number is below boiling point
const isBoilingPoint = (temp) => {
    const boilingPoint = 212;
  
// Determine if the number is at/above/below the boiling point?
    if (temp === boilingPoint) {
      return "Yay, at boiling point!";
    } else if (temp > boilingPoint) {
      return "Higher than boiling point!";
    } else if (temp < boilingPoint) {
      return "Lower than boiling point!";
    }
  };
 // Run the function 
 // console.log(isBoilingPoint(temp1));
 // console.log(isBoilingPoint(temp2));
 // console.log(isBoilingPoint(temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Create a function to combine two arrays 
const arrayCombiner = (array1, array2) => {
  // Combine the arrays 
  // [3, 7, 0, 36, -9] + [8, -7, 42, 9, 13]
  const combinedArray = array1.concat(array2);
  //Return the length of new array
  // [3, 7, 0, 36, -9, 8, -7, 42, 9, 13].length = 10
  return combinedArray.length;
};
//Run the function
//console.log(arrayCombiner(myNumbers1, myNumbers2));

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

const currentCohort = "Bravo 2022"

//Create a function that takes in a string
const reverseString = (str) => {
// Split the string
    const splitString = str.split("");
// Reverse the string
    const reverseArray = splitString.reverse();
// Bring characters back to an array
    const joinArray = reverseArray.join("");
  return joinArray;
};
//Run the function
//console.log(reverseString(currentCohort));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Create a function called "isEven" with no parameters
const isEven = () => {
// Create a loop so that every value from the array gets rendered through
    for (let i = 0; i < myArray.length; i++) {
      // Figure out if number is even or odd
      let num = myArray[i];
      if (num % 2 == 0) {
        myArray[i] = "even";
        // console.log('even')
      } else {
        // console.log('odd')
        myArray[i] = "odd";
      }
    }
    return myArray;
  }; 

//Run the function
//console.log(isEven());

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtractNum = (num1, num2) => {
    if (num1 <= num2) {
        return (num2 - num1);
    } else {
        return (num1 - num2);
    }
};
// Run the function
//console.log(subtractNum(number1, number2));
