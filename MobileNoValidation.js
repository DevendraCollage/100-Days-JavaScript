//* ------------------------------------------------
//* Programming Challenge: Mobile Number Validation
//* ------------------------------------------------

//? 46. Write a function that takes a string as input and returns true if the sting represents a valid Indian mobile number, and false otherwise.

//* Validation Requirements:
//? Length: An Indian mobile number should have exactly 10 digits.
//? Starting Digit: The number must start with 6,7,8, or 9, which are valid starting digits for Indian mobile numbers.

const validateINMobileNo = (mobile) => {
  return /^[6789][\d]{9}$/.test(mobile);
};

// Example Usage:
console.log(validateINMobileNo("9988776655")); // Output: True
console.log(validateINMobileNo("6655889922")); // Output: True
console.log(validateINMobileNo("1122445577")); // Output: False
console.log(validateINMobileNo("2200441155")); // Output: False

//* Constraints:
//? The input string may contain numeric characters only.
//? Assume input strings will not include any country codes.
