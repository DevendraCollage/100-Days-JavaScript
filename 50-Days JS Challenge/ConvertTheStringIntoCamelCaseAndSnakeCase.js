//* ------------------------------
//* Coding Challenge
//* ------------------------------

//? Write a function to convert a string to camelCase and snake_case.

const toCamelCase = (str) => {
  // Method Chaining
  return str
    .trim()
    .split(" ")
    .map((currElem, index) => {
      if (index === 0) {
        return currElem.toLowerCase();
      } else {
        return (
          currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase()
        );
      }
    })
    .join("");
};

const toSnakeCase = (str) => {
  var myStr = str.split(/(?=[A-Z])/);
  return myStr.join("_").toLowerCase();
};

// Example Usage:
console.log(toCamelCase("hello world devendra")); // Output: helloWorldDevendra

console.log(toSnakeCase("helloWorldDevendra")); // Output: hello_world_devendra
