//* Write a function findMax that tales an array of numbers as input and returns the maximum number in the array.

const findMax = (arr) => {
  //! 1st way to find max element from the array
  return Math.max(...arr);

  //! 2nd way to find max element from the array
  var maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }

  return maxNum;
};

//* Example Usage:
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([-5, -6, -7, -8, -1])); // Output: -1
console.log(findMax([10])); // Output: 10
