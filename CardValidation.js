//* ------------------------------------------------------------------
//* Programming Challenge: Validate a Card Number (Luhn Algorithm)
//* ------------------------------------------------------------------

//? 42. Write a function to validate a card number using the Luhn algorithm.

//* Requirements:
//? Write a function named validateNumber that takes a card number as a string.
//? The function should return true is the number is valid according to the Luhn algorithm, and false otherwise.
//? Ensure the function can handle numbers as strings, which may include spaces and dashes.

//* Luhn Algorithm Steps:
//* Steps of the Luhn Algorithm
//* Prepare the number:

//? Start with the digits of the number. For example, if validating the number 10027398716.
//? Reverse the Digits:
//? ✅  Reverse the digits of the number. For the example, it becomes 61789372001.

//? Double Every Second (Even) Digit:
//? Starting from the first digits, double second digit.
//? ✅ For My Example: 6, 1*2, 7, 8*2, 9, 3*2, 7, 2*2, 0, 0*2, 1

//? Subtract 9 from Numbers Higher than 9:
//? If doubling the number result in a number greater than 9, subtract 9 from it.
//? ✅ Now our series is: 6, 2, 7, 7, 9, 6, 7, 4, 0, 0, 1

//? Sum All Digits:
//? Add all the digits together.
//? ✅ 6 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 0 + 0 + 1

//? Check the modulo 10:
//? If the sym modulo 10 is 0, then the number is valid according to the Luhn formula.
//? ✅ 66 % 10 = 6, which is not 0, os 79927398713 is not a valid number according to Luhn.

const validateNumber = (str) => {
  //! Initial step to remove the space from the number
  str = str.replace(/\D/g, ""); //* Means replace the non element with the space and i will use also the global flag

  //TODO: Step-1 Reverse the number
  let reverseStr = str.toString().split("").reverse().join("");
  //   console.log(reverseStr);

  //TODO: Step-2 Double The Every Second (Even) Digit
  let doubleNum = reverseStr.split("").map((currElem, index) => {
    if (index % 2 !== 0) {
      currElem = currElem * 2;
    }
    return currElem;
  });
  //   console.log(doubleNum);

  //TODO: Step-3 Subtract 9 from Numbers Higher than 9
  let subNum = doubleNum.map((currElem, index) => {
    if (currElem > 9) {
      currElem = currElem - 9;
    }
    return currElem;
  });
  //   console.log(subNum);

  //TODO: Step-4 sum all the digits
  let sum = 0;
  subNum.forEach((currElem) => {
    sum = sum + Number(currElem);
  });
  //   console.log(sum);

  //TODO: Step-5 If the sym modulo 10 is 0, then the number is valid according to the Luhn formula.
  if (sum % 10 == 0) {
    console.log("Valid Number");
  } else {
    console.log("Invalid Number");
  }
};

// Example Usage:
console.log(validateNumber("1234 5678 1234 7894")); // Output: Invalid Number
