//* Write a function that takes a number as input and returns the sum of its digits.

const sumOfDigits = (num) => {
  let sum = 0; //! This initializes a variable to store the sum of the digits.
  while (num > 0) {
    //! This will run when numb is greater than 0 condition.
    sum = sum + (num % 10); //! This will add the last digit of the number to the sum variable.
    num = Math.floor(num / 10); //! This will update value of the num this will remove the last of the number.
  }
  return sum;
};

//* Example Usage:
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21

//* Constraints
//? The input number will always be a positive integer.
//? The input number can have multiple digits.
//? The output should be the sum of all the digits in the input number.

//* Extra Work
//? This function calculates the sum of digits without converting the number to a string.

//! I will already use this trick to calculate the sum
