//* ----------------------------------------------
//* Interview Question: Check the Triangle Type
//* ----------------------------------------------

//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle "equilateral", "isosceles", or "scalene".

const checkTriangleType = (s1, s2, s3) => {
  //* Check the sides and return return the result
  if (s1 === s2 && s1 == s3) {
    return "equilateral";
  } else if (s1 == s2 || s2 == s3 || s1 == s3) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

// todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides of equal length, return "isosceles".
//? If all three sides of equal length, return "scalene".
