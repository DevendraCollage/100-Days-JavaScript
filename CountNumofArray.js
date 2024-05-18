//* ---------------------------------------
//* Coding Challenge
//* ---------------------------------------

//? 23. Write a JavaScript function to count the occurrence of each element in an array and store the counts in an objects. The key of the object should represent the elements of the array, and the values should represent th number of time each element appears in the array.

//? Here's what the function do:

// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.
// Iterate through each number in the array.
// For each number, increment the count in the counts object.
// If the count for  number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each element.

// Input:
const numbers = [1, 2, 2, 3, 1, 4, 2];

//* Count the number how many times repeat in the array
let counts = {};
for (const element of numbers) {
  counts[element] = (counts[element] || 0) + 1;
}

// Output:
// {'1':2, '2':3, '3':1, '4':1}
/**
 * In that Object what should give the key value pair
 * 1 is repeat in the array 2 time
 * 2 is repeat in the array 3 time
 * 3 is repeat in the array 1 time
 * 4 is repeat in the array 1 time
 */

// Constraints:
//? The input array may contain positive integers only.
//? You can assume that the input array is not empty.

//! Help: This is for getting knowledge
// const obj = {};

// // Setting a property using square brackets
// obj["name"] = "Devendra";
// console.log(obj); // Output: {name: 'Devendra'}

// // Accessing a property using square brackets
// // Accessing the key of the object
// console.log(obj["name"]); // Output: Devendra
