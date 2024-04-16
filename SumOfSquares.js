//* --------------------------------
//*     Interview Questions
//* --------------------------------

//? Write a function to calculate the sum of squares of all elements in an array. For example, give the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 14.

const sumOfSquares = (arr) => {
  //   let sum = 1; // TODO: This will store the sum of the squares
  //   for (let i = 1; i < arr.length; i++) {
  //     sum = sum + arr[i] * arr[i]; // TODO: This will calculate the sum of the squares
  //   }
  //   return sum; //? And This will return the sum to the function

  //! And also you can done like this using reduce method
  //   return arr.reduce(
  //     (accum, currElem) => (accum = accum + currElem * currElem),
  //     0
  //   );

  //! And also you can done like this using another trick of for loop
  let sum = 0;
  for (const elem of arr) {
    sum = sum + elem * elem;
  }
  return sum;
};

//* Example Usage:
console.log(sumOfSquares([1, 2, 3])); // Output: 14
console.log(sumOfSquares([5, 8, 4])); // Output: 105
