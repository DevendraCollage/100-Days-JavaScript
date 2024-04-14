//* Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

const removeDuplicates = (arr) => {
  let newArray = []; //TODO: This is the array there will be store our new array
  for (let i = 0; i < arr.length; i++) {
    if (newArray.indexOf(arr[i]) === -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// Example Usage:
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2])); // Output: [1,2,3,4,5]
console.log(removeDuplicates([5, 6, 2, 1, 4, 5, 7])); // Output: [5,6,2,1,4,7]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // Output: [1,2,3,4,5]
console.log(removeDuplicates([])); // Output" []

//* The new Set() method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or oject references.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The elements in the input array are not guaranteed to be sorted.
//? The output array should retain the original order of elements from the input array.
