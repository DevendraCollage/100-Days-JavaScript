//* ----------------------------------
//* Coding Challenge
//* ----------------------------------

//* Write a function to calculate the factorial of a number.(Using Recursion)

//* Recursion:
//? Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input until it reaches a base case.

//* Base Case:
//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, leading to what's know as infinite recursion.

//* Recursive Case:
//? The recursive case is the condition in a recursive function that determines when the function should call itself again. It's typically an expressive or condition that evaluates to true for certain inputs. Indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.

const factorial = (n) => {
  // Base Case
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1); // Recursive Case
  }
};

// Example Usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(1)); // Output: 1
