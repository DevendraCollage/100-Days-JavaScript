//* Write a function that takes a String as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase)

const countVowels = (str) => {
  let count = 0; //TODO: This is the variable that will store the count of the vowels available in the string
  str = str.toLowerCase(); //? This will convert the string to lowercase if user will supply a lower or upper case string
  for (let i = 0; i <= str.length; i++) {
    if (
      //* This will check the condition if the vowels occur in the string this will increment the count
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      count++;
    }
  }
  return count;
};

//* Example Usage:
console.log(countVowels("Hello World!")); // Output: 3
console.log(countVowels("The QUICK Brown FOX!")); // Output: 5
console.log(countVowels("Rajkot")); // Output: 2

//* Constraints
//? The input string may contains letters in both uppercase and lowercase.
//? The output should be a non-negative integer representing the count of vowels in the input string.
