//* -------------------------------------------------
//* Programming Challenge: Check Object Emptiness
//* -------------------------------------------------

//? Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. Am empty object is defined as an object with no own properties.

//? You task is to implement the isEmptyObject function using JavaScript and return a message indicating whether the object is empty or not.

// todo Constraints:
//* The input object may have any number of properties, including zero.
//* The function should return a message indicating whether the object is empty or not.
//* You should use the provided isEmptyObject function signature without any additional parameters.

const isEmptyObject = (obj) => {
  // This will not proper working
  //   return obj.length === 0 ? "It's Empty!" : "It's Not!";

  //   for (let key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       return "It's Not!";
  //     }
  //   }
  //   return "It's Empty!";

  return Object.keys(obj).length === 0;
};

// Example Usage:
console.log(isEmptyObject({ name: "devendra" })); // Output: it's not
console.log(isEmptyObject({})); // Output: it's empty
console.log(isEmptyObject({ keyWithNull: null })); // Output: it's not
