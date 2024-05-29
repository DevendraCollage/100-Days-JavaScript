//* -------------------------------------------------
//* Programming Challenge: Simple Currency Converter
//* -------------------------------------------------

//? 41. Write a function to convert an amount from one currency to another using static exchange rates.

//* Requirements:
//? Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
//? Use a fixed object to store exchange rates relative to a base currency (e.g., USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.

// Object
const rates = {
  USD: 1, // base Currency
  EUR: 0.9, // 1 USD = 0.9
  GBP: 0.8, // 1 USD = 0.8
  INR: 82, // 1 USD = 82
};

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  let amountInUSD = 0;
  if (fromCurrency !== "USD") {
    amountInUSD = amount / rates[fromCurrency];
  } else {
    amountInUSD = amount;
  }
  let convertedAmount = 0;
  if (toCurrency !== "USD") {
    convertedAmount = amountInUSD * rates[fromCurrency];
  } else {
    convertedAmount = amountInUSD;
  }

  return convertedAmount;
};

// Example Usage:
console.log(convertCurrency(100, "GBP", "EUR")); // Output: will depend on the rates provided
