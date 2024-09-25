//* ----------------------------------------
//* Programming Question: Hash tag Generator
//* ----------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a give input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without space.
//? If the length of the input string is greater that 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((currElem) => {
    return currElem.replace(currElem[0], currElem[0].toUpperCase());
  });
  str = `#${str.join("")}`;
  return str;
};

console.log(generateHash("my name is devendra parmar"));
// Output: #MyNameIsDevendraParmar
