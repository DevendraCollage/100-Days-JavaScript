//* ---------------------------------
//* Coding Challenge
//* ---------------------------------

//* Write a function called repeatString that takes two parameters:

//? str: A string that needs to be repeated
//? num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times number and return the resulting string.

const repeatString = (str, n) => {
  if (n > 0) {
    return str.repeat(n);
  } else {
    return str;
  }
};

// Example Usage:
console.log(repeatString("ab", 5)); // Output: ababababab
console.log(repeatString("devendra", 0)); // Output: devendra

//todo Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.
