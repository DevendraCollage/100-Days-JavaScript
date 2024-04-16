//* Write a function called isPowerTwo that takes an integer num as input and returns true if num if a power of two, and false otherwise.

const isPowerTwo = (num) => {
  //! And Also you can done like this
  let op = false; //? This will store result of the number is power of two or not
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      op = true;
    }
  }
  return op;

  //! You can check also like this
  //   if (num % 2 === 0) {
  //     // TODO: This will divide the number with 2 then reminder is 0 then its number power of two
  //     return true;
  //   } else if (num == 0 && num < 0) {
  //     return "Zero and negative not consider as power of two!";
  //   } else {
  //     // TODO: Otherwise false
  //     return false;
  //   }

  //! Or Also you can done like this using bitwise operator.
  //   return (num & (num - 1)) === 0;
};

//* Example Usage:
console.log(isPowerTwo(8)); // Output: True
console.log(isPowerTwo(10)); // Output: False
console.log(isPowerTwo(5)); // Output: False
console.log(isPowerTwo(7)); // Output: False
console.log(isPowerTwo(0)); // Output: False

//* Notes:
//? The input num will be a positive integer.
//? Zero (0) and negative integers are not considered powers of two.
//? The function should return true if the give number is a power of 2, and false otherwise.
//? We can solve it using bitwise operator too but its your choice of to do it.
