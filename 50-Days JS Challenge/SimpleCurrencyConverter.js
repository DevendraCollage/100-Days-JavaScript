//* ------------------------------------------------
//* Programming Challenge: Simple Current Converter
//* ------------------------------------------------

//? Write a function to convert amount from on current to another using static exchange rates.

//todo Requirements:
//? Write a function named convertCurrent that takes three parameters: amount, fromCurrency, and toCurrency.
//? Use a fixed object o store exchange rates relative to a base currency (e.g, USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, the USD to EUR.

const rates = {
  USD: 1, // base currency
  EUR: 0.9, // 1 USD = 0.9 EUR
  GBP: 0.8, // 1 USD = 0.8 GBP
  INR: 82, // 1 USD = 82 INR
};

const convertCurrency = (amount, fc, tc) => {
  let amountInUSD = 0;
  if (fc !== "USD") {
    amount = amount / rates[fc];
  } else {
    amountInUSD = amount;
  }

  let convertedAmount = 0;
  if (tc !== "USD") {
    convertedAmount = amountInUSD * rates[tc];
  } else {
    convertedAmount = amountInUSD;
  }

  return convertedAmount;
};

// Example Usage:
console.log(convertCurrency(100, "GBP", "EUR")); // Output: will depends on the rates provided
