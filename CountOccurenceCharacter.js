//* -----------------------------------------------------
//* Interview Question: Count Occurrences of Characters
//* -----------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of time the specified character appears in the string.

const countChar = (str, word) => {
  str = str.toLowerCase(); // We can convert the string into lower case letters
  word = word.toLowerCase(); // We can convert also the word into lower case letters

  countWord = str.split(""); // This will convert the string into array

  return countWord.reduce((accum, curChar) => {
    if (curChar == word) {
      accum++;
    }
    return accum;
  }, 0);
};

console.log(countChar("MissIsip", "I")); // Output: 3

// todo: Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).
