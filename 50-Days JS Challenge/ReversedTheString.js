//* --------------------------------
//* Coding Challenge
//* --------------------------------

//? Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed strings.

const reversedString = (str) => {
  return str.split("").reduce((a, b) => (a = b + a), "");
};

// Example Usage:
console.log(reversedString("Hello")); // Output: olleH
console.log(reversedString("Darshan")); // Output: nahsraD
