//* ----------------------------------------------------
//* Programming Challenge: Extract Numbers from a String
//* ----------------------------------------------------

//? Write a regular expression to extract all numbers from a given string.

// todo Requirements:
//? Extract all numbers from a string.
//? Return the numbers as an array.

// todo Use Case:
//? Parsing numerical data from text.
//? Extracting numeric values for calculations.
//? Filtering numbers from mixed content.

const extractNumbers = (str) => {
  let regex = /\d+/g;
  return str.match(regex);
};

// Example Usage:
console.log(extractNumbers("abc123")); // Output: [123]
console.log(extractNumbers("a1b2c3d4e5")); // Output: [1,2,3,4,5]
console.log(extractNumbers("no numbers here")); // Output: null
console.log(extractNumbers("100, 200 and 300")); // Output: [100,200,300]
