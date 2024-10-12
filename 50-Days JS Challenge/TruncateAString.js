//* -------------------------------------
//* Coding Challenge: Truncate a String
//* -------------------------------------

//* Write a function called truncateString that takes two parameters:

//? str: A String that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds specified maxLength. If truncation occurs, the  function should add '....' to the end of the truncated string.

const truncateString = (str, n) => {
  if (n <= 0) {
    return str;
  }
  if (str.length > n) {
    return str.slice(0, n).concat("...");
  }
};

// Example Usage:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // Output: A-tisket....

//todo Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The maximum length maxLength will be a positive integer.
//? The output string length should not exceed maxLength + 3 characters due to the addition of '....'.
