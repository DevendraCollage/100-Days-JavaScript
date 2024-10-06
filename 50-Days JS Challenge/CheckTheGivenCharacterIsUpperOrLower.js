//* ------------------------------
//* Coding Challenge
//* ------------------------------

//? Write a function to check if a character if uppercase or lowercase.

//* Constraints:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

const isUpperCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
};

const isLowerCase = (char) => {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return true;
  }
  return false;
};

// Example Usage:
console.log(isUpperCase("D")); // Output: true
console.log(isLowerCase("D")); // Output: false

//* Notes:
//? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
//? Optimize the function to handle edge cases efficiently.
