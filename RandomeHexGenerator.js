//* -----------------------------------------------
//* Coding Challenge: Random Hex Color Generator
//* -----------------------------------------------

//? 33. Write a function randomHexColor that generates a random hexadecimal color code each time it is called. THe function should return a string representing the random color code in the format "#RRGGBB", where RR, GG, and BB are two-digit hexadecimal numbers representing the red, green, and blue components of the color, respectively.

//? Your challenge is to implement the randomHexColor function using JavaScript and ensure that ut produces a valid hexadecimal color code with a length of 7 characters (including the # symbol).

//* COnstraints:
//? The output color code should always start with # followed by six hexadecimal characters (RRGGBB).
//? The function should not take any parameters.
//? The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color codes.

//* Hint:
// Converts the random number into a hexadecimal string representation.

const randomHexColor = () => {
  const randomNumber = Math.random().toString(16).slice(2, 8).padEnd(6, 0);
  /*
  - toString(16) - Means Convert the  random number into base 16 string
  - slice(2 ,8) - This is means we omit the first two decimal number and get the after the next six characters.
  - padEnd(6,0) - This is useful for when the total 6 characters not find then append the 0 to the end of the string to complete the string with six characters.
  */
  return `#${randomNumber}`;
};

// Example Usage:
console.log(randomHexColor()); // Output: This will generate every time new color code
