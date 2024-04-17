//? Find the Minimum value in the array

//* Write a function findMin that takes an array of numbers as input and returns the minimum value found in array

//* Constraints
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicates values.

const findMin = (arr) => {
  // 1. You can use inbuilt function to find min and max value using Math object
  //   if (arr.length >= 1) {
  //     return Math.min(...arr); // This spread the individual elements from the array
  //   } else {
  //     return "Please Give the Elements of the Array! and Array is Empty!";
  //   }

  // 2. You can get the min values also like this using sort method (Type-1)
  arr = arr.sort((a, b) => {
    if (a > b) {
      // This method will sort the array in ascending order
      return -1;
    }
  });
  return arr[arr.length - 1]; // This will return the last element of the sorted array
};

//* Example Usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable menage for empty array)

//* Note:
//? Ensure the function handles edge cases gracefully, such as an empty input array.
//? Consider using ES6 features like the spread syntax (...) for a concise implementation.

// TODO: In JavaScript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
//? For Example, is arr is [5, 10,2,8], then ...arr expands to 5, 10, 2 , 8,
