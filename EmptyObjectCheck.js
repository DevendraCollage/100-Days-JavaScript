//* ------------------------------------------------
//* Programming Challenge: Check Object Emptiness
//* ------------------------------------------------

//? 35. Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

//? Your task is to implement the isEmptyObject function using JavaScript and return a message indicating whether the object is empty or not.

//* Constraints:
//? The input object may have any number of properties, including zero.
//? The function should return a message indicating whether the object is empty or not.
//? You should use the provided isEmptyObject function signature without any additional parameters.

const isEmptyObject = (obj) => {
  for (const key in obj) {
    if (Object.keys(obj).length === 0) {
      return "It's Empty";
    } else if (obj[key] == null) {
      return "It's Empty";
    } else if (typeof obj[key] == "undefined") {
      return "It's Empty";
    } else {
      return "It's not Empty";
    }
  }
};

// Example Usage:
console.log(isEmptyObject({ programmingLanguage: "JavaScript" })); // Output: "It's not empty"
console.log(isEmptyObject({})); // Output: "It's Empty"
console.log(isEmptyObject({ KeyWithNull: null })); // Output: "It's Empty"
console.log(isEmptyObject({ KeyWithUndefined: undefined })); // Output: "It's Empty"
