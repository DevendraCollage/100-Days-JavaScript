//* ----------------------------------------
//* Programming Challenge: Date Validation
//* ----------------------------------------

//? Write a function named isValidDate that takes a single input representing a date and determines if it is a valid date in the format MM/DD/YYYY. The valid date range should be from January 1, 1900, to December 31, 2099.

// todo Requirements:
//* Format Check: The date must strictly follow the MM/DD/YYYY format. Ensure that slashes (/) are used as separators.
//? Month Validation: Valid months are from 01 (January) to 12 (December).
//? Day Validation: Days should be valid according to the month:
//? 01-31 for January, March, July, August, October, December.
//? 01-30 for April, June, September, November.
//? 01-28 for February in common years, and 01-29 for February in leap years.
//? Year Validation: Years should be within the range from 1900 to 2099.

const isValidDate = (date) => {
  return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(
    date
  );
};

// Example Usage:
console.log(isValidDate("12/15/2021")); // Output: true
console.log(isValidDate("02/09/2021")); // Output: true
console.log(isValidDate("04/31/2020")); // Output: true
