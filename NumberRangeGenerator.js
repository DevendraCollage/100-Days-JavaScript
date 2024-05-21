//* -----------------------------------------
//* Coding Challenge : Number Range Generator
//* -----------------------------------------

//? 29. Write a function called numberRange that generates an array of containing consecutive numbers from a to b (inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. If defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to b (inclusive).

//* Constraints:
//? a abd b will be integers.
//? a will be less than or equal to b.

const numberRange = (num1, num2) => {
  let arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i); // This will add the number one after the another at the last
  }
  return arr;
};

// Example Usage:
console.log(numberRange(0, 5)); // Output: [0,1,2,3,4,5]
console.log(numberRange(3, 7)); // Output: [3,4,5,6,7]
console.log(numberRange(-2, 2)); // Output: [-2,-1,0,1,2]
