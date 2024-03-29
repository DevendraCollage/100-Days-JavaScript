//* --------------------------------------------------
//* Programming Questions: Longest Word in a String
//* --------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and return the longest word in the string. If there are multiple longest words, return the one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input is empty or contain only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {
  // This condition for if the str is empty or contain only whitespace then return false
  if (str.trim().length === 0) {
    return false;
  }

  // Now convert the string into array
  strArr = str.split(" ");

  // Then sort the array by the words (In Ascending order)
  //   strArr.sort((a, b) => a.length - b.length);
  // You can sort also like this
  strArr.sort((a, b) => b.length - a.length);

  // And also you can use reduce method
  return strArr.reduce(
    (accumulator, currElem) =>
      currElem.length > accumulator.length ? currElem : accumulator,
    ""
  );

  // Now return the longest words from the array
  //   return strArr.at(-1);
  // You can return also like this
  return strArr[0];
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: jumped
