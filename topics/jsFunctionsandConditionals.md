## Functions 

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Functions Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

A function is a reusable block of code that can be invoked by a name. Functions can take in parameters and return a value.
```javascript
function functionName(parameter1, parameter2) {
  // code to be executed
  return value;
}
//call
functionName(arguments)
```
### Arrow Functions
A shorthand way of writing function expressions
```javascript
const functionName = (param1, param2) => {
    // code to be executed
}
//Example:
const checkAge = age => age >= 18 ? 'You are an adult' : 'You are a minor';  // Left side of : will run if true, right side if false
```

## Conditional Statements

[Back to Table of Contents](../README.md/#Table-of-Contents)

Conditional statements are used to make decisions in code. The most common type of conditional statement is the if-else statement.

### If Else Statements
```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true
} else {
    // code to be executed if all conditions are false
}
```

### Switch Statements
```javascript
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression does not match any case
}
```

### Ternary Operator
shorthand way to write a basic if-else statement in a single line of code.
```javascript
let result = condition ? parameter1 : parameter2;

//Example:
const checkAge = age => age >= 18 ? 'You are an adult' : 'You are a minor';  // Left side of : will run if true, right side if false
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

## Regex

[Mozilla MDN Regex Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Character Classes
```javascript
| Character Classes | Explanation                                         | Example                                              |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\d/              | Matches any digit (0-9)                             |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\D/              | Matches any non-digit character                     |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\w/              | Matches any word character (alphanumeric characters |                                                      |
|                   | and underscores)                                    |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\W/              | Matches any non-word character (non-alphanumeric    |                                                      |
|                   | characters and spaces)                              |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\s/              | Matches any whitespace character                    |                                                      |   
|                   | (space, tab, newline, etc.)                         |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\S/              | Matches any non-whitespace character                |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[a-z]/           | Matches any lowercase letter from a to z            |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /^[A-Z]/          | Matches any uppercase letter from A to Z at the     |                                                      |
|                   | start of the string                                 |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[a-zA-Z]/        | Matches any letter, both uppercase and lowercase    |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[0-9]{3}/        | Matches exactly 3 digits                            |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[0-9a-zA-Z]/     | Matches any alphanumeric character                  |                                                      |
|                   | (letters and digits)                                |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\b[A-Za-z]+\b/   | Matches any word consisting of one or more letters  |                                                      |
|                   | (case-insensitive), surrounded by word boundaries   |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
```

### Assertions
```javascript
| Assertions        | Explanation                                         | Example                                              |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| ^                 | Matches the start of a line                         | /^A/ Matches any uppercase letter A at the           |
|                   |                                                     |  start of the string                                 |
|-------------------|-----------------------------------------------------|------------------------------------------------------|                
| $                 | Matches the end of a line                           | /$z/ Matches any lowercase letter z at the end of    |
|                   |                                                     |   the string                                         |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| \b                | Matches a word boundary (^\w|\w$|\W\w|\w\W)         |  /\bgreen\b/ Matches the word "green" surrounded     |
|                   |                                                     |  by word boundaries                                  |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\W/              | Matches any non-word character (non-alphanumeric    |                                                      |
|                   | characters and spaces)                              |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\s/              | Matches any whitespace character                    |                                                      |   
|                   | (space, tab, newline, etc.)                         |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\S/              | Matches any non-whitespace character                |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[a-z]/           | Matches any lowercase letter from a to z            |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /^[A-Z]/          | Matches any uppercase letter from A to Z at the     |                                                      |
|                   | start of the string                                 |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[a-zA-Z]/        | Matches any letter, both uppercase and lowercase    |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[0-9]{3}/        | Matches exactly 3 digits                            |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[0-9a-zA-Z]      | Matches any alphanumeric character                  |                                                      |
|                   | (letters and digits)                                |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\b[A-Za-z]+\b/   | Matches any word consisting of one or more letters  |                                                      |
|                   | (case-insensitive), surrounded by word boundaries   |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|

\B // Matches a non-word boundary
//Example:
/\Bgreen\B/ // Matches any instance of the letters "green" NOT surrounded by word boundaries

(?=...) // Positive lookahead assertion. Matches if the pattern inside the parentheses can be matched
//Example:
/\d(?=%)/ // Matches a digit only if it is followed by a % symbol

(?!...) // Negative lookahead assertion. Matches if the pattern inside the parentheses cannot be matched
//Example:
/\d(?!%)/ // Matches a digit only if it is NOT followed by a % symbol

(?<=...) // Positive lookbehind assertion. Matches if the pattern inside the parentheses can be matched before the current position
//Example:
/\w+(?=\t) // Matches a word followed by a tab, but doesn't include the tab in the match.

(?<!...) // Negative lookbehind assertion. Matches if the pattern inside the parentheses cannot be matched before the current position
//Example:
/\d+(?!.) // Matches a digit not followed by a period, for example when matching a number but not matching a float.

```
 
