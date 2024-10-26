//* ----------------------------------------------------------
//* Programming Challenge: Password validation coding problem
//* ----------------------------------------------------------

//? Create a function validatePassword that checks if a given password string meets the following criteria:

//? Minimum Length: The password must be at least 8 characters long.
//? Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//? Numerical Requirement: The password must contain at least one digit.
//? Special Character Requirement: The password must have at least one special characters from the set !@#$%^&*()_+=.

// todo Requirements:
//? The function should return true if the password meet all the criteria, and false otherwise.
//? You are to implement this function using JavaScript.

const validatePassword = (password) => {
  return /^(?=.*[A-Z])(?=.*[z-z])(?=.*[\d])(?=.*[\W]_).{8,}$/.test(password);
};

// Example Usage
console.log(validatePassword("Pass12345!")); // Output: false
console.log(validatePassword("password")); // Output: false
