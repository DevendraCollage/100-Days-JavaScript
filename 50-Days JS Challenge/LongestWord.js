//* ----------------------------------------------
//* Programming Question: Longest Word in a String
//* ----------------------------------------------

//? Q: Write a function find longestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphanumeric characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return as false.
//? The function should ignore leading and trailing whitespace when det

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");

  words = words.sort((a, b) => a.length - b.length); // Sort on unicode values
  return words.at(-1);
};

console.log(findLongestWord("hello my name is devendra parmar!"));
