//* --------------------------------------------------
//* Coding Challenge: Simple Password Validator
//* --------------------------------------------------

//? 31. Write a function called simplePasswordValidator that takes a single parameter:

//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria.

//? The length of the password must be at least 8 characters.
//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The function should return true if the password is meets all the criteria, otherwise if should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? False otherwise.

//* Constraints:
//? The input string password will contain only alphameric characters and punctuations marks.

const simplePasswordValidator = (pass) => {
  //! get the length of the password
  let len = pass.length;

  //! Check for the string contains the lowercase, uppercase and digit includes or not
  let hasLowercase = /[a-z]/.test(pass);
  let hasUppercase = /[A-Z]/.test(pass);
  let hasDigit = /\d/.test(pass);

  //! Check the condition based on criteria that is given
  if (len >= 8) {
    // todo If this condition match then pass to the inner condition
    if (hasLowercase && hasUppercase && hasDigit) {
      // todo If this condition match then pass to and return that condition value
      return true;
    }
  }
  // todo If otherwise any condition not match then this will be returned
  return false;
};

// Example Usage:
console.log(simplePasswordValidator("asdfasdfasdf")); // false
console.log(simplePasswordValidator("asdfasdfasdf1")); // Output: false
console.log(simplePasswordValidator("Devendraparmar22")); // Output: true
console.log(simplePasswordValidator("Devendraparmar22d")); // Output: true
