//* --------------------------------------------------------
//* Coding Challenge - Recursive Number Range Generator
//* --------------------------------------------------------

//? 30. Write a recursive function called numberRangeRecursive that generate an array containing consecutive numbers from a to b (inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to v (inclusive).

//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b.

const numberRangeRecursive = (start, end, arr = []) => {
  // You can pass the array as a parameter in the function
  //? Base Case with Recursion
  if (start > end) {
    return arr;
  }
  arr.push(start);
  return numberRangeRecursive(start + 1, end, arr); //? Recursive Case
};

// Example Usage:
console.log(numberRangeRecursive(0, 5)); // Output: [0,1,2,3,4,5]
console.log(numberRangeRecursive(3, 7)); // Output: [3,4,5,6,7]
console.log(numberRangeRecursive(-2, 2)); // Output: [-2,-1,0,1,2]
