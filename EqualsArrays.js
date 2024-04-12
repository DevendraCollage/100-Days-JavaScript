//* Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e, contain the same elements in the same order, and false otherwise).

const arraysAreEqual = (arr1, arr2) => {
  //! This if condition will match the size of the arrays
  //? If this arrays is equal with each other then return true otherwise this will go in the else condition
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //! In This condition in this for loop this will match the elements of the arrays and match the result
    //? If this condition false then this will go in the else condition
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  //! If you enter two arrays with blank elements then this condition will true
  return true;
};

//? Example Usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output: True
console.log(arraysAreEqual([1, 2, 3], [4, 5, 6])); // Output: False
console.log(arraysAreEqual([], [])); // Output: True

//* Note:
// The function should return false if the arrays have different lengths.
// The function should compare each element of arr1 wit the corresponding element in arr2.
// The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.
