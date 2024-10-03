//* Write a function that take a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).

const countVowels = (str) => {
  //! Type-1 to solve this problem.
  var strChar = str.split("");
  var count = 0;
  for (let i = 0; i < strChar.length; i++) {
    if (
      strChar[i].toLowerCase() == "a" ||
      strChar[i].toLowerCase() == "e" ||
      strChar[i].toLowerCase() == "i" ||
      strChar[i].toLowerCase() == "o" ||
      strChar[i].toLowerCase() == "u"
    ) {
      count++;
    }
  }

  return count;

  //! Type-2 to solve this problem.
  var vowels = ["a", "e", "i", "o", "u"];
  var arr = str.split("");
  var count = 0;
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};

//? Example usage:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("The QUICK Brown FOX")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0

//TODO Constraints
//? The input string may contain letters in both uppercase and lowercase.
//? The output should be a non-negative integer representing the count of vowels in the input string.
