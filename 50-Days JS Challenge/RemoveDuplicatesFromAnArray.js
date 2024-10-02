//* Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

const removeDuplicates = (arr) => {
  let newArr = new Set(arr);
  return Array.from(newArr, Number);
};

// Example Usage:
console.log(removeDuplicates([1, 2, 3, 1, 5, 4])); // Output: [1,2,3,4,5]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // Output: [5,6,7,8,9]
console.log(removeDuplicates([])); // Output: []

//* The new Set() method in JavaScript create new Set object. A set object is a collection of unique values. It an store any type of value, whether primitive values or object reference.

//TODO Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The elements in the input array are not guaranteed to be sorted.
//? The output array should retain the original order or element from the input array.
