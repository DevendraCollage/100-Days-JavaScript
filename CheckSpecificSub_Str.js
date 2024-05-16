//* ----------------------------------
//* Coding Challenge
//* ----------------------------------
//? 19: Write a function to check if a given string starts with a specific substring

// Input :

//? str: A string (e.g., "Hello, world");
//? subStr: A substring to check if it starts with a specific substring (e.g., "Hello, ")
//? Output: true if the string starts with a specific substring, false otherwise.

const startsWith = (str, substr) => {
  //* Type-1 to solve this problem
  if (str.toLowerCase().startsWith(substr)) {
    return true;
  } else {
    return false;
  }

  //* Type-2 to solve this problem
  return str.toLowerCase().slice(0, substr.length) === substr;
};

// Example Usage:
console.log(startsWith("Hello world", "hello")); // Output: true
console.log(startsWith("Hello world", "world")); // Output: false
