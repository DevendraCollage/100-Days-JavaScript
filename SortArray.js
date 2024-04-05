//* -----------------------------------------
//* Programming Questions: Sort and Array
//* -----------------------------------------

//? Write a function to sort an array of numbers is an ascending order.

//! Type-1 To Sort But this will not proper work on the array
// const sortAscending = (arr) => {
//   return arr.sort();
// };

//! Type-2 To Sort
const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b); // Ascending
  return arr.sort((a, b) => b - a); // Descending
};

// Example usage:
console.log(sortAscending([5, 8, 96, 1])); // Output: [1,5,8,96]
console.log(typeof sortAscending[2]);

// todo Requirements:
//? The function should take an array of numbers as input.
//? If should return a new array with the number sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.
