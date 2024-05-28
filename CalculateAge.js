//* ------------------------------------------------------
//* Programming Challenge: Calculate Age from BirthDate
//* ------------------------------------------------------

//? 39. Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format 'YYYY-MM-DD';

//* Requirements:
//? The function must handle leap years and varying numbers of days in each month.
//? Consider the timeZone difference and ensure the age is Calculate based on the current date in your local time zone.
//? The output should be the age in whole years.

// Example Usage:
const calculateAge = (birthDate) => {
  //! You have convert the string into the date
  const bd = new Date(birthDate);
  const cd = new Date();

  //! Get the year from the current Date and Birth Date
  const cy = cd.getFullYear(); // Current Year
  const by = bd.getFullYear(); // Birth Date Year

  //? Subtract the current year from birth year
  let ageDiff = cy - by;

  //? get te month from the current Date and Birth Date
  const cm = cd.getMonth(); // Current Month
  const bm = bd.getMonth(); // Birth Date Month

  let monthDiff = cm - bm;

  if (monthDiff < 0 || (monthDiff === 0 && cd.getDate() < bd.getDate())) {
    ageDiff--;
  }

  return ageDiff;
};

// Example Usage:
console.log(calculateAge("2002-10-19")); // Output: 22

// TODO Hint
//? Check if the current month is less than the birth month or if it's the same month but today's date is before the birth date. If either condition is true, it subtracts one from the age because the birthDay has not yet ocurred this year.
