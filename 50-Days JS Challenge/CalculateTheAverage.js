//* Challenge: Calculate the Average

//? Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

//* Your function should:

//? Accept an array of numbers as input.
//? Calculate the sum of all te numbers in the array.
//? Divide the sum by the total number of elements in the array to find the average.
//? Return the calculated average.

//! Note:
//* Ensure the function handle arrays of any length.
//* The average should be returned as floating-point number.

const calculateAverage = (arr) => {
  var sum = 0;
  arr.reduce((currElem, nextElem) => {
    return (sum = currElem + nextElem);
  });
  return sum / arr.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([1, 3, 5, 7, 9]));
