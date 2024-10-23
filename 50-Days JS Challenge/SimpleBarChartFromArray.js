//* ---------------------------------------------------------
//* Programming Challenge: Simple bar Chart from Array Data
//* ---------------------------------------------------------

//? Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

const generateBarChart = (arr) => {
  const newArr = arr.map((currElem, index) => {
    let star = "";
    let number = 0;
    while (number < currElem) {
      star += "*";
      number++;
    }
    return `${index + 1} : ${star}`;
  });
  return newArr.join("\n");
};

console.log(generateBarChart([5, 3, 9, 2]));

// Output:
// 1: *****
// 2: ***
// 3: *********
// 4: **
