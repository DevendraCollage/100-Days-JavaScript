//* -------------------------------
//* Coding Challenge
//* -------------------------------

//? Write a function to check is a string starts with a specific substring.

const withStart = (str, subStr) => {
  //! Type-1 Using Builtin function
  if (str.toLowerCase().startsWith(subStr.toLowerCase())) {
    return true;
  }
  return false;

  //!Type-2 Using Slice
  return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
};

//todo Constraints:
//? str: A string (e.g., "Hello world").
//? subStr: A substring to check if it starts the give string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

// Example Usage:
console.log(withStart("Hello world", "hello")); // Output: true
console.log(withStart("Hello world", "World")); // Output: false
