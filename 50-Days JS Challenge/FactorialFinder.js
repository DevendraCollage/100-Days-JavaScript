//* Challenge: Factorial Finder

//? Write a function factorial that takes a non-negative integer numb as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal  to n. The factorial of 0 s defined as 1.

//? Here are some examples of factorial calculation:

// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120
// You function should work for any-negative integer input

//TODO Using Iterative Approach
const factorial1 = (n) => {
  fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
};

//TODO Using Recursive Approach
const factorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Example Usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(3)); // Output: 6

console.log(factorial1(5)); // Output: 120
console.log(factorial1(0)); // Output: 1
console.log(factorial1(3)); // Output: 6
