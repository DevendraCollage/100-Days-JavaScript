//* Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

const findMax = (arr) => {
  return Math.max(...arr);
};

// Example Usage:
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([-1, -2, -3, -4, -5])); // Output: -1
console.log(findMax([5])); // Output: 5
