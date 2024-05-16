//* ---------------------------------
//* Coding Challenge
//* ---------------------------------
//? 17: Write a function to check if a character is uppercase or lowercase

//* Type-1 to solve the question
//! Function to check the character is upper case or not
const isUpperCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }

  //* Type-2 Solve the question
  return char === char.toUpperCase();
};

//! Function to check the character is lower case or not
const isLowercase = (char) => {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return true;
  } else {
    return false;
  }

  //* Type-2 Solve the Question
  return char === char.toLowerCase();
};

//* Constraints
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.
// Example usage:
console.log(isUpperCase("S")); // Output: true
console.log(isLowercase("B")); // Output: true

//* Notes:
//? Ensure that the function correctly identifies uppercase based on their ASCII
//? Optimize the function to handle edge cases efficiently
