//* ----------------------------------------------
//* Programming Challenge: Validate Hex Color Code
//* ----------------------------------------------

//? 48. Write a regular expression to validate a hex color code (e.g., #a3c113)

//* Requirements:
//? The hex color code should start with "#"
//? It should be followed by either 3 or 6 hexadecimal characters.

//* Use Cases
//? Validating color codes in design tools.
//? Ensuring consistent color format in CSS.
//? Filtering valid hex color codes in data processing.

const validateHexColor = (hex) => {
  return /^#([A-Fa-f\d]{6}|[A-Fa-f\d]{3})$/.test(hex);
};

// Test Cases
console.log(validateHexColor("#a3c113")); // Output: true
console.log(validateHexColor("#fff")); // Output: true
console.log(validateHexColor("#fffd")); // Output: false
