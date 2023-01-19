## Conditional Statements

[Back to Table of Contents](#Table-of-Contents)

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
### Ternary Operator
shorthand way to write a basic if-else statement in a single line of code.
```javascript
let result = condition ? parameter1 : parameter2;
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
