//* --------------------------------------------------------
//* Programming Challenge: Number of Days Between Two Dates
//* --------------------------------------------------------

//? 38. Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the form 'YYYY-MM-DD'.

//! Hint:
//* Days = 24*60+60+1000

const calculateDaysBetweenDates = (date1, date2) => {
  // Place the logic here
  //! You have convert the string into the date
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  let diffDay = Math.abs(d1 - d2); //? Now get the difference between the two dates
  let diffDays = Math.ceil(diffDay / (24 * 60 * 60 * 1000));
  return diffDays;
};

// Examples Usage:
console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31")); // Output: 30
