//* ------------------------------------------------
//* Programming Challenge: Email Address Validation
//* ------------------------------------------------

//? 44. You're tasked with implementing a function to validate email addresses using a regular expression. Write a function validateEmail(email) that takes a string email as input and returns true if the email address is valid according to the following rules:

//TODO 1: Local part of the email address (before the "@") can contain:
//? Alphanumeric characters (A-Z, a-z, 0-9)
//? Special characters: period ".", underscore "_", percent "%", plu "+", or hyphen "-".
//? Consecutive periods are not allowed (e.g., "..")
//? Special characters cannot appear at the beginning or end of the local part

//TODO 2: The domain part of the email address (after the "@") can contain:
//? Alphanumeric characters (A-Z, a-z, 0-9)
//? Hyphen "-"
//? Period "."
//? Must contain at least one period
//? The top-level domain (TLD) must contain at least two alphanumeric characters.
// (e.g., "com", "org", "nte", etc)

const validateEmail = (email) => {
  return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-za-z]{2,}$/.test(
    email
  );
};

// Example usage:
console.log(validateEmail("john.doe@example.com")); // True
console.log(validateEmail("invalid..dot@domain.com")); // False
console.log(validateEmail("missing@dotcom")); // False
console.log(validateEmail("no@domain")); // False
