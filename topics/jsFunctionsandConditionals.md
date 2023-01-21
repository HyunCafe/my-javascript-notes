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
