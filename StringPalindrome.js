//* Write a function to detemine whether a givven string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) => {
  //? First the convert the string in lowercase
  str = str.toLowerCase().replace(/\W/g, ""); // This will place the none word character with the spaces
  //? Reverse the string
  let reverse = str.split("").reverse().join("");
  //? Compare the reverse string with the original string
  if (str === reverse) return true;
  else return false;
};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//* ---------------------------
//* Constraints
//* ---------------------------

//* 1. The input string may contain letters, digits, spaces, punctuation, and special characters.
//* 2. The function should be case-sensitive, meaning "Racecar" and "racecar" should be considered the same.
//* 3. Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
//* 4. the function should return true if the input string is a palindrome and false otherwise.
