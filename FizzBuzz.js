//* -------------------------------------------
//* Programming Challenge: FizzBuzz Challenge
//* -------------------------------------------

//? 43. Write a function fizzBuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on the following rules:

//* Constraints:
//? For each number i in the range from startNum to end Num (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.

const fizzBuzz = (startNum, endNum) => {
  for (let i = startNum; i <= endNum; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// Example Usage-1
console.log("This is an example 1");
fizzBuzz(1, 15);
// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
console.log("\n");

// Example Usage-2
console.log("This is an example 2");
fizzBuzz(12, 20);
// Output: ["Fizz", 13, 14 "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]
