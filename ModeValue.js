//* ------------------------------------------------
//* Coding Challenge : Find the Mode in an array
//* ------------------------------------------------

//? 24. Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

const findMode = (arr) => {
  // Place the logic here
  let counts = {};
  let maxNum = 0;
  let mode;

  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }
  return "The Most Repeated Number in the Array is : " + mode;
};

//? Above object work like that
// obj {
//     "name" : "devendra"
// }

// Example Usage:
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2

//* Constraints
//? The Input array will always contain at least one elements.
//? The mode will always be unique (i.e., there wan't be multiple number with the same highest frequency).
