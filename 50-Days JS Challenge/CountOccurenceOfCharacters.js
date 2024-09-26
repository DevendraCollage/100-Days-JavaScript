//* --------------------------------------------------
//* Interview Question: Count Occurrences of Character
//* --------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified characters appears in the string.

const countChar = (str, char) => {
  //? Logic-1
  //   var countChar = 0;
  //   var arrChar = str.split("");
  //   for (let i = 0; i < arrChar.length; i++) {
  //     if (arrChar[i].toLowerCase() == char || arrChar[i].toUpperCase() == char) {
  //       countChar++;
  //     }
  //   }
  //   return countChar;

  //? Logic-2
  str = str.toLowerCase();
  char = char.toLowerCase();

  totalCount = str.split("").reduce((accum, currChar) => {
    if (currChar == char) {
      accum++;
    }
    return accum;
  }, 0);

  return totalCount;
};

console.log(countChar("MissIssippi", "I")); // Output: 4

// todo Constraints:
//? The function should be case-sensitive
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII Character (the function should accept any character that is part of the ASCII character set and ts printable).
