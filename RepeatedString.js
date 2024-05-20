//* --------------------------------------
//* Coding Challenge : Repeat a String
//* --------------------------------------

//? 27. Write a function called repeatString that takes two parameters:

//? str: A string that needs to be repeated.
//? num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.

const repeatString = (str, num) => {
  let result = "";
  if (num == 0) {
    return str;
  } else {
    for (let i = 0; i < num; i++) {
      result = result + str;
    }
  }

  return result;
};

// Example Usage:
console.log(repeatString("abc", 3)); // Output: abcabc

//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuations marks.
//? The input number num will be a non-negative integers.
//? The output string length should not exceed the length of str multiplied by num.
