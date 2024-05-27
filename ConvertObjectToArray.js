//* ---------------------------------------------------------------
//* Programming Challenge: Convert Object to Array and Vice Versa
//* ---------------------------------------------------------------

//* 36 .Our task is to implement to functions:

//? Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.

//? Convert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (As returned by the objectToArray function) and returns a new object with the keys and values from the arrays.

//? Ensure that the conversion functions work correctly for objects with various data types as values, such as strings, numbers, and objects.

//* Constraints:
//? The input object may contain properties of any data type.
//? The input array must contain arrays with exactly two elements (key-value pairs).
//? The output object should have properties in the same order as the original object.
//? You should use the provided function signature (objectToArray and arrayToOject) without any additional parameters.

// Example Object:
const obj = {
  name: "Kodifier dev",
  age: 22,
  city: "Rajkot",
};

// Example Object:

const arr = [
  ["name", "Kodifier dev"],
  ["age", 22],
  ["city", "Rajkot"],
];

// Convert the object to an array of key-value pairs.
const objectToArray = (obj) => {
  let entries = Object.entries(obj);
  return entries.flat();
};

// Convert the array of key-value pairs back to an object.
const arrayToObject = (arr) => {
  let newObj = Object.fromEntries(arr);
  return newObj;
};

//? Call the function
console.log(objectToArray(obj));
console.log(arrayToObject(arr));
