//* Introduction to Regular Expressions

/*
Regular expressions are sequences of characters that define a search pattern. These patterns are widely used for string searching and manipulation. In validation, regex helps ensure that strings such as email addresses and passwords conform to expected formats.
*/

//* Basic Syntax ⬇️:

//TODO: Literals: Ordinary characters like 'a', '1', or '%'.
//TODO: Metacharacters: Characters with special meanings, like `,` (any character), `^ (caret)` (start of string), '$' (end of string), etc.
//TODO: Character classes: Sets of characters, like `[a-z]` for any lowercase letters.
//TODO: Character classes & shortcuts: In addition to specific characters sets, regex includes several shorthand character classes that help match common character types.
//? `[a-z]` you can use this regex for the only single characters.
// Example:
// in between a to z you can use this expression for the single character [a,b,c, etc]

//* Digit Character ⬇️:

//? - `\d` : matches any digit (0-9).
//? - `\D` : matches any non-digit character.

//* Whitespace Characters ⬇️:

//? - `\s` : matches any whitespace character (including spaces, tabs, and line breaks).
//? ` '\S' : matches any non-whitespace character.

//TODO: Quantifiers: Specify how many times a character can occur, like `+` (one or more) or `*` (Zero or more time) or `{1,3}` (between one and three times).

//TODO: Escape Characters: Use a backslash (`\`) to escape special characters and treat them like ordinary characters.
//* Examples:
//? - `\.` : Matches a literal dot.
//? - `\$` : Matches a dollar sign `$`.
//? `\^` : Matches a caret `^`.

//* Practice - Email Validation ⬇️:

//! to validate an email, we want to check three main things:
//? 1. Local Part: The part before the `@` symbol.
//? 2. Domain: The part after the `@` but before the top-level domain.
//? Top-level domain (tld): The last part following the last dot.
