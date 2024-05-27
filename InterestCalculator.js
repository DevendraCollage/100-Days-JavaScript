//* ----------------------------------------------------
//* Programming Challenge: Simple Interest Calculator
//* ----------------------------------------------------

//? 37. Write a function calculateSimpleInterest that calculates the simple interest give the principal amount, rate of interest per annum, and time in year.

const calculateSimpleInterest = (amount, rate, year) => {
  let amt = (amount * rate * year) / 100;
  return amt;
};

// Example Usage:
console.log(calculateSimpleInterest(1000, 5, 3)); // Output: 150
