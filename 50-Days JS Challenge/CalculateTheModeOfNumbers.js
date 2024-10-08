//* ---------------------------------------------
//* Coding Challenge: Find the mode in an Array
//* ---------------------------------------------

//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

function findMode(arr) {
  let counts = {};
  let max = 0;
  let mode;
  for (let elem of arr) {
    counts[elem] = (counts[elem] || 0) + 1;
    if (counts[elem] > max) {
      max = counts[elem];
      mode = elem;
    }
  }

  return mode;
}

// Example usage:
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2

//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always unique (i.e., there won't be multiple numbers with the same highest frequency)
