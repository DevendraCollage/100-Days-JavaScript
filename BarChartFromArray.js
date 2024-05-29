//* ---------------------------------------------------------
//* Programming Challenge: Simple Bar Chart from Array Data
//* ---------------------------------------------------------

//? 40. Create a function generateBarChart that takes an array of numbers and generates a simple txt-based bar chart.

// TODO: Type-1 to solve this problem
// const generateBarChart = (arr) => {
//   // Place the logic here
//   const newArr = arr.map((currElem, index) => {
//     let star = "";
//     let num = 0;
//     while (num < currElem) {
//       star = star + "*";
//       num++;
//     }
//     return `${index + 1}: ${star}`;
//   });
//   return newArr.join("\n");
// };

//TODO: Type-2 Second Alternate way to solve this question
const generateBarChart = (arr) => {
  return arr
    .map((currElem, index) => {
      return `${index + 1}: ${"*".repeat(currElem)}`;
    })
    .join("\n");
};

// Example Usage
console.log(generateBarChart([5, 3, 9, 2]));

// 1: *****
// 2: ***
// 3: *********
// 4: **
