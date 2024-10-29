//* -----------------------------------------------
//* Programming Challenge: Validate Hex Color Code
//* -----------------------------------------------

//? Write a regular expression to validate a hex color code (e.g., #a3c113).

//todo Requirements:
//? The hex color code should start with "#".
//? It should be followed be either 3 or 6 hexadecimal characters.

//* Use Case
//? Validating color codes design tools.
//? Ensuring consistent color code format in CSS.
//? Filtering valid hex color codes in data processing.

const validateHexColor = (color) => {
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(color);
};

// Example Uses:
console.log(validateHexColor("#a3c113")); // Output: true
console.log(validateHexColor("#fff")); // Output: true
console.log(validateHexColor("#fffffff")); // Output: false
