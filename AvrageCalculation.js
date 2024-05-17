//* --------------------------------------
//* Coding Challenge
//* --------------------------------------

//? 21. Write a function called calculateMean that takes an array as input and returns the mean (average) of those numbers.

//TODO In Math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

//? Constraint:
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.

//* Calculate mean without using any inbuilt method of the javascript
const calculateMean = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

//* Calculate mean using any inbuilt method
const CalculateAverage = (arr) => {
  if (arr === 0) {
    return 0;
  }
  let sum = arr.reduce((accum, curElem) => accum + curElem, 0);
  return sum / arr.length;
};

// Example Usage: First Type
console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateMean([10, 20, 30])); // Output: 20
console.log(calculateMean([-1, 0, 1])); // Output: 0
console.log(calculateMean([])); // Output: Nan

// Example Usage: Second Type
console.log(CalculateAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(CalculateAverage([10, 20, 30])); // Output: 20
console.log(CalculateAverage([-1, 0, 1])); // Output: 0
console.log(CalculateAverage([])); // Output: 0
