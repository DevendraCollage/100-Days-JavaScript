//* Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  let reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    return true;
  }
  return false;
};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//* ------------------------------
//* Constraints
//* ------------------------------

//? The input string may contain letters, digits, spaces, punctuation, and special characters.
//? The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
//? Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
//? The function should return true if the input string is a palindrome ad false otherwise.

//! Note:

//? .replace(/\W/g, ""): Uses the replace() method with a regular expression (/\W/g) to remove all non-word characters from the string. Here:
//? \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).
//? The g flag performs a global search, meaning it replaces all occurrences of non-word characters in the string.
//? So, replace(/\W/g, "") replaces all non-word characters, with an empty string, effectively removing them from the string.
