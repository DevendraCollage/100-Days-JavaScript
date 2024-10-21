//* ---------------------------------------------------------
//* Programming Challenge: Number of Days Between Two Dates
//* ---------------------------------------------------------

//? Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format 'YYYY-MM-DD'

const calculateDaysBetweenDates = (a, b) => {
  let date1 = new Date(a);
  let date2 = new Date(b);
  let diff = Math.abs(date2 - date1);
  return diff / (24 * 60 * 60 * 1000);
};

console.log(calculateDaysBetweenDates("2024-10-01", "2024-10-31"));
