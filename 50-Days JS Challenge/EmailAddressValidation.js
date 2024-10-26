//* ------------------------------------------------
//* Programming Challenge: Mail Address validation
//* ------------------------------------------------

//? You're tasked with implementing a function to validate email address using a regular expression. Write a function validateEmail(email) that takes a string email as input and  returns true if the email address is valid according to the following rules:

// todo 1. The local part of the email address (before the '@') can contain:
// Alphanumeric characters (A-Z, a-z, 0-9)
// Special characters: period '.', underscore '_', percent '%', plus '+', or hyphen '-'
// Consecutive periods are not allowed
// Special characters cannot appear at the beginning or end of the local part

// todo 2. The domain part of the email address (after the "@") can contain:
// Alphanumeric characters (A-Z, a-z, 0-9)
// Hyphen "-"
// Period "."
// Must contain at least one period
// The top-level domain (TLD) must contain of at least two alphanumeric characters. (e.g., "com", "org", "net", etc).

const validateEmail = (email) => {
  return /^[A-za-z0-9]+(?:[.%_+][A-za-z0-9]+)*@[A-za-z0-9]+\.[A-za-z]{2,}$/.test(
    email
  );
};

// Example Usage
console.log(validateEmail("dev.web@example.com")); // Output: true
console.log(validateEmail("invalid..dot@domain.com")); // Output: false
