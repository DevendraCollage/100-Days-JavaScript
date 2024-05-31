//* -----------------------------------------------------------
//* Programming Challenge: Password Validation Coding Problem
//* -----------------------------------------------------------

//? 45. Create a function validatePassword that checks if a given password string meets the following criteria:

//? Minimum Length: The password must be at length 8 characters long.
//? Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//? Numerical Requirements: The password must contain at least one digit.
//? Special Characters: The password must have at least one special character from the set !@#$%^&*()-_+.

//* Requirements:
//? The function should return if the password meets all the criteria, and false otherwise.
//? You are o implement this function using JavaScript.

const validatePassword = (password) => {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,} $/.test(password);
};

// Example Usage:
console.log(validatePassword("Pass123!")); // Output: True
console.log(validatePassword("password")); // Output: False
