//* Challenge : Calculate the Average

//* Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

//* Your function should:

//? Accept an array of numbers as input.
//? Calculate the sum of all the numbers in the array.
//? Divide the sum by the total number of elements in the array to find the average.
//? Return the sum of all the numbers in the array

const calculateAverage = (arr) => {
  let sum = 0; //? This will store the sum of the array elements sum
  for (let i = 1; i <= arr.length; i++) {
    sum = sum + i;
  }

  //? Calculate the average of sum
  let average = sum / arr.length;
  return average;
};

//* Example Usage:
console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
