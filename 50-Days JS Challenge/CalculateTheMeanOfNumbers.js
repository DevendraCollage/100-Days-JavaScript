//* --------------------------------
//* Coding Challenge
//* --------------------------------

//? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//todo In Math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

//? Constraints:
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.

const calculateMean = (arr) => {
  //! Type-1 Iterative Approach
  if (arr.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var avg = total / arr.length;
  return avg;

  //! Type-2 Using Reduce
  if (arr.length === 0) {
    return 0;
  }
  var sum = arr.reduce((accum, curr) => accum + curr, 0);
  return sum / arr.length;
};

// Example Usage:
console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateMean([10, 20, 30])); // Output: 20
console.log(calculateMean([-1, 0, 1])); // Output: 0
console.log(calculateMean([])); // Output: 0
