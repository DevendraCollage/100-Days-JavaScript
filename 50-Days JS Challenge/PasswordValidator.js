//* ---------------------------------------------
//* Coding Challenge: Simple Password Validator
//* ---------------------------------------------

//* Write a function called simplePasswordValidator that takes a single parameter:

//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:

//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise , it should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? false otherwise.

//todo Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.

const simplePasswordValidator = (str) => {
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  for (let char of str) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpper = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLower = true;
    } else if (!isNaN(Number(char))) {
      hasDigit = true;
    }
  }

  if (!hasLower || !hasUpper || !hasDigit || str.length < 8) {
    return false;
  }

  return true;
};

// Example Usage:
console.log(simplePasswordValidator("adfsdjdjdjd")); // Output: false
console.log(simplePasswordValidator("asdfghdydh1")); // Output: false
console.log(simplePasswordValidator("asdfhhD1")); // Output: true
console.log(simplePasswordValidator("asdfghjklQ1")); // Output: true
