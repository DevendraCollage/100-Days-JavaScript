//* -----------------------------
//* Interview Question:
//* -----------------------------

//? Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

const sumOfSquares = (arr) => {
  return arr.reduce((prev, curr) => {
    return (prev = prev + curr * curr);
  });
};

// Example Usage:
console.log(sumOfSquares([1, 2, 3])); // Output: 14
