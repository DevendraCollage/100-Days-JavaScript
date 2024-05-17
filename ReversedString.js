//* --------------------------------------
//* Coding Challenge
//* --------------------------------------

//? 20. Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reverse string.

//* This simple way to reverse the string using inbuilt methods of the javascript
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

//* You can reverse string using without using inbuilt methods
const ReverseString = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
};

// Example Usage:
console.log(reverseString("Hello")); // Output: olleH //? This is the reverse string using inbuilt methods of the javascript
console.log(ReverseString("Devendra")); // Output: ardneveD //? This is the reverse string using without inbuilt methods
