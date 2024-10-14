//* ------------------------------------------
//* Coding Challenge: Number Range Generator
//* ------------------------------------------

//? Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the number in the range. It defines to an empty array.

//* Output:
//? An array containing consecutive numbers fro a to b (inclusive).

//todo Constrains:
//? a and b will be integers.
//? a will be less than or equal to b.

const numberRange = (a, b) => {
  let arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
};

// Example usage:
console.log(numberRange(0, 5)); // Output: [0,1,2,3,4,5]
console.log(numberRange(3, 8)); // Output: [3,4,5,6,7,8]
