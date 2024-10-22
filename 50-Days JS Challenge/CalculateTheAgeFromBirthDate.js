//* -------------------------------------------------------
//* Programming Challenge: Calculate Age From BirthDate
//* -------------------------------------------------------

//? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the form "YYYY-MM-DD"

// todo Requirements:
//? The function must handle leap years and varying numbers of  days in each month accurately.
//? Consider the timezone difference and ensure the age is calculates based on the current date in your local time zone.
//? The output should be the age in whole years.

const calculateAge = (d) => {
  // Current date
  let curDate = new Date();
  // Birth Date
  birthDate = new Date(d);

  // Years
  let age = curDate.getFullYear() - birthDate.getFullYear();

  // Month
  let monthDiff = curDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && curDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

console.log(calculateAge("2002-10-19"));
