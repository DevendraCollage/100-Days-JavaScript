//* Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e, contain the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return true;
  }
  var flag = true;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        flag = false;
      }
    }
  }
  return flag;
};

//* Example Usage:
console.log(arraysAreEqual([1, 2, 3, 4, 5], [1, 2, 3])); // Output: false
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output: true
console.log(arraysAreEqual([], [])); // Output: true

//! Note:
//? The function should return false if the arrays have different lengths.
