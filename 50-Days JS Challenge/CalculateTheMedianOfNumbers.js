//* --------------------------------
//* Coding Challenge
//* --------------------------------

//? Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average o the two middle values.

//? For example, the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 is (5+7)/2 = 6.

//todo Tips
//? Sort the array in ascending order.
//? If the array has an odd numbers of elements, the median is the middle elements.
//? If the array has an even number of elements, the median is the average of the two middle elements.

const findMedian = (arr) => {
  // Step:1 Sort the array
  arr.sort((a, b) => a - b);

  // Step:2 Check if the array length is odd or even
  let len = arr.length;
  let mid = Math.floor(len / 2);

  // Step:3 For even length array
  if (len % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  }

  // Step:4 For odd length array
  else {
    return arr[mid];
  }
};

console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
console.log(findMedian([2, 4, 6, 8])); // Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6
