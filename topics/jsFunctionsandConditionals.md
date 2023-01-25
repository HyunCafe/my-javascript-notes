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
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

## Regex

[Mozilla MDN Regex Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[Back to Table of Contents](../README.md/#Table-of-Contents)

```javascript
/\d/ //Matches any digit (0-9)

/\D/ //Matches any non-digit character

/\w/ //Matches any word character (alphanumeric characters and underscores)

/\W/ //Matches any non-word character (non-alphanumeric characters and spaces)

/\s/ //Matches any whitespace character (space, tab, newline, etc.)

/\S/ //Matches any non-whitespace character

/[a-z]/i //Matches any lowercase letter from a to z ( case-insensitive )

/^[A-Z]/ //Matches any uppercase letter from A to Z at the start of the string

/[a-zA-Z]/ //Matches any letter, both uppercase and lowercase

/[0-9]{3}/ //Matches exactly 3 digits

/[0-9a-zA-Z]/ //Matches any alphanumeric character (letters and digits)

/\b[A-Za-z]+\b/ // Matches any word consisting of one or more letters (case-insensitive), surrounded by word boundaries
```
```javascript
 // Options used after the closing / (/[...]/) expression:
g (global): matches all occurrences of the pattern in the input string, rather than stopping after the first match.
i (insensitive): makes the regular expression case-insensitive, so it will match both uppercase and lowercase characters.
m (multiline): when used with the ^ and $ anchor characters, it allows them to match the start and end of each line in the input string, rather than the start and end of the whole string.
u (unicode): enables the use of unicode in the regular expression, allowing for the matching of unicode characters and properties.
y (sticky): when used with the search() method, it starts the search at the last position of the previous match rather than the default position of 0.
s (dotAll): allows the . character to match newline characters as well.

//Example:
let vowels = /[aeiou]/gi;  // match all vowels case-insensitive and globally
```
