//* -------------------------------------------------------
//* Programming Challenge: Extract Numbers from a String
//* -------------------------------------------------------

//? 47. Write a regular expression to extract all numbers from a given string.

//* Requirements:
//? Extract all numbers from a string.
//? Return the numbers as an array.

//* Use Cases
//? Passing numerical data from text.
//? Extracting numeric values for calculations.
//? Filtering numbers from mixed content.

const extractNumbers = (str) => {
  let regex = /[0-9]+/g;
  return str.match(regex);
};

// Example Usage:
console.log(extractNumbers("abc123def456")); // Output ["123","456"]
console.log(extractNumbers("no numbers here")); // Output: null
console.log(extractNumbers("1a2b3c4d")); // Output: ["1", "2", "3", "4"]
console.log(extractNumbers("100, 200 and 300")); // Output: ["100", "200", '300]
console.log(extractNumbers("")); // Output: null

//* Constraints:
//? Extract all numeric values.
//? Return as an array.

//TODO: \d: Matches any digit (0-9)
//TODO: +: Matches one or more of the preceding token (i.e., digits)
//TODO: g: Global flag, to find all matches in the string.
