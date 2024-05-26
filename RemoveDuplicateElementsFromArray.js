//* --------------------------------------------------------
//* Programming Challenge: Remove Duplicates from an Array
//* --------------------------------------------------------

//? 34. Write a function removeDuplicates tat takes an array of elements as input and returns a new array with duplicates elements removed.

//? Your task is to implement the removeDuplicates function using JavaScript and ensure that the returned array contains only unique elements from the input array. The order of elements in the output array should be the same as the original array, with the first occurrence of each unique element preserved.

//* Constraints:
//? The input array may contain elements of any data type.
//? The function should return a new array with duplicate elements removed, while preserving the order of elements from the original array.
//? You should use the provided removeDuplicates function signature without any additional parameters.

//TODO: There are many formulas to perform this program - This is one of them
const removeDuplicates2 = (arr) => {
  //! There are three parameters of the filter method first is current element, index of element, whole array
  let removed = arr.filter((currElem, index) => {
    return arr.indexOf(currElem) === index; // If current element and index will match then show only that elements
  });
  return removed;
};

//TODO: Another formula of removing duplicates using Set()
//* set - set is an object type which only store unique value not duplicate values
const removeDuplicates = (arr) => {
  return [...new Set(arr)]; // I am using spread operator to to fill the value of the array in the array and square brackets to convert into array
};

// Example Usage:
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); // Output: [1,2,3,4,5]
console.log(removeDuplicates(["a", "b", "c", "b", "a"])); // Output: ["a","b","c"]
console.log(removeDuplicates2([1, 2, 3, 3, 4, 4, 5])); // Output: [1,2,3,4,5]
console.log(removeDuplicates2(["a", "b", "c", "b", "a"])); // Output: ["a","b","c"]
