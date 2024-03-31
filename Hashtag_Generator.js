//*---------------------------------------------
//* Programming Question: Hash Tag Generator
//*---------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string .
//? Tha hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalize and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function to accomplish this task.

const generateHash = (str) => {
  //? If the length of string is greater than 280 and string is empty than function return only false
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  //* First of all convert the string into array
  str = str.split(" ");

  //* Replace the characters with Capital Characters
  str = str.map((currElem) =>
    currElem.replace(currElem.charAt(0), currElem.charAt(0).toUpperCase())
  );
  //* Join all the characters together
  str = str.join("");

  return `#${str}`;
};

console.log(generateHash("my name is devendra parmar"));
//! Output: #MyNameIsDevendraParmar
