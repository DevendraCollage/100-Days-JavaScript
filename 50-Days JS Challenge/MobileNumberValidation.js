//* -------------------------------------------------
//* Programming Challenge: Mobile Number Validation
//* -------------------------------------------------

//? Write a function that takes a string as input and returns true if the string represents a valid Indian mobile number, and false otherwise.

// todo Validate Requirements:
//? Length: An Indian mobile number should have exactly 10 digits.
//? Starting Digit: The number must start with 6,7,8, or 9, which are valid starting digits for Indian mobile numbers.

const validateMobileNumber = (MNumber) => {
  return /^[6-9][0-9]{9}$/.test(MNumber);
};

// Example Usage:
console.log(validateMobileNumber("9876543210")); // Output: true
console.log(validateMobileNumber("012345789")); // Output: false
console.log(validateMobileNumber("987654321")); // Output: false
