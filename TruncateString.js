//* ------------------------------------------
//* Coding Challenge
//* ------------------------------------------

//? 28. Write a function called truncateString that takes two parameters:

//? str: A string that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the truncated string.

const truncateString = (str, count) => {
  //! You can solve this question like this
  if (count <= 0) {
    return str;
  }
  if (str.length > count) {
    return str.slice(0, count).concat("...");
  }

  //! You can solve this question using also Ternary Operator:
  return count <= 0 ? str : str.slice(0, count).concat("...");
};

// Example Usage:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 5)); // Output: A-tisket...

//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuations marks.
//? The maximum length maxLength will be a positive integer.
//? The output string length should not exceed maxLength + 3 characters due to the addition of '...'.
