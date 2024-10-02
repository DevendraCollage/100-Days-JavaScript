//* Write a function tat takes a number a input and returns the sum of its digits.

const sumOfDigit = (n) => {
  //! Formula-1 to solve this approach
  //   if (n < 0) {
  //     return;
  //   }
  //   var num = n.toString().split("");
  //   var arr = num.map(Number);
  //   var sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum = sum + arr[i];
  //   }
  //   return sum;

  //! Formula-1
  if (n < 0) {
    return;
  }
  let arr = Array.from(String(n));
  return arr.reduce((a, b) => parseInt(a) + parseInt(b));
};

// Example usage:
console.log(sumOfDigit(12345)); // Output: 15
console.log(sumOfDigit(102030)); // Output: 6
console.log(sumOfDigit(4321)); // Output: 10

//* Constraints:
//? The input number will always be a positive integer.
//? The input number can have multiple digits.
//? The output should be the sum of all the digits in the input number.
