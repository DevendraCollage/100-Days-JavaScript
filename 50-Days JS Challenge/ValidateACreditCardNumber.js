//* -------------------------------------------------------------------------
//* Programming Challenge: Validate a Credit Card nUmber (Luhn Algorithm)
//* -------------------------------------------------------------------------

//? Write a function to validate credit card numbers using the Luhn algorithm.

// todo Requirements:
//? Write a function named validateCreditCard that takes a credit card number as a string.
//? The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
//? Ensure the function can handle numbers as strings, which may include spaces and dashes.

//* Luhn Algorithm Steps:
// Steps of the Luhn Algorithm
// Prepare the numbers:
// Start with the digits of the number. For example, if validating the number 12345
// Reverse the Digits:
// Reverse the digits of the number. For the example, it becomes 54321.
// Double Every Second Digit:
// Starting from the first digit, double every second digit.
// For out example: 5, 4*2, 3, 2*2, 1 like this.
// Which translates to: 5, 8, 3, 4, 1
// Subtract 9 from numbers than 9:
// If doubling the number results in a numbers greater than 9, subtract 9 from it.
// Now out series is: 5 8 3 4 1
// Sum all digits:
// Add all the digits together.
// 5 + 8 + 3 + 4 + 1 = 21
// Check Modulo 10:
// If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 21 % 10 = 2.1, which is not 0, so 58341 is not a valid number according to Luhn.

const validateCreditCard = (num) => {
  // Initial Step
  num = num.replace(/D/g, "");

  // Step:1 Reverse the Digits
  let reversedNum = "";
  for (let i = num.length - 1; i >= 0; i--) {
    reversedNum = reversedNum + num[i];
  }
  // Step:2 Double Every Second Digit
  let doubleNum = num
    .split("")
    .map((currElem, index) => {
      if (index % 2 !== 0) {
        currElem = currElem * 2;
        // Step:3 Extract the 9 from the greater than 9 number
        if (currElem > 9) {
          currElem = currElem - 9;
        } else {
          currElem = currElem;
        }
      }
      return currElem;
    })
    .reduce((accum, curElem) => accum + Number(curElem), 0);

  return doubleNum % 10 === 0;
};

// Example Usage:
console.log(validateCreditCard("1234 5678 9632")); // Output: false
