//* ------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in the Array
//* ------------------------------------------------------

//? Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

const findMin = (arr) => {
  //! Formula-1 Iterative Approach
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;

  //! Formula-2 Using Sort
  arr = arr.sort((a, b) => {
    if (b > a) {
      return -1;
    }
  });
  return arr[0];

  //! Formula-2 Using Math Objects
  return Math.min(...arr);
};

// Example Usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

//* Notes:
//? Ensure the function handled edge cases gracefully, such as an empty input array.
//? Consider using ES6 features like the spread syntax (...) for a concise implementation.

//TODO In JavaScript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
//? For example, if arr is [5,10,2,8], the ...arr expands to 5, 10, 2, 8.
