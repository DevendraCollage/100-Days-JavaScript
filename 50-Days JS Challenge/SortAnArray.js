//* -----------------------------------
//* Programming Question: Sort an Array
//* -----------------------------------

//? Write a function to sort an array of numbers in an ascending order.

const sortAscending = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return sorted;
};

// Example usage:
console.log(sortAscending([5, 3, 4, 1, 8, 50])); // Output: [1,3,4,5,8,50]

// todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers store in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.
