//* Write a function to convert a string to a camelCase and snake_case.

const toCamelCase = (str) => {
  str = str.trim().split(" ");

  str = str.map((currElem, index) => {
    if (index === 0) {
      return currElem.toLowerCase();
    } else {
      return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase();
    }
  });

  return str.join("");
};

//* Example Usage
console.log(toCamelCase("hello world javascript")); // Output: helloWorld

// TODO: Snake_Case:
//* Example Usage

const toSnakeCase = (str) => {
  return str.trim().split(" ").join("_").toLowerCase();
};

console.log(toSnakeCase("hello world how are you javascript")); // Output: hello_world_how_are_you_javascript
