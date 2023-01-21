## Loops

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Loops Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### For Loops

A for loop is used to iterate over an array or an object. <br>
The for loop has three parts: the initializationExpression, the conditionExpression, and the incrementExpression.
```javascript
for (let i = 0; i < array.length; i++) {
  // code to be executed
}

//Example:
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### For In Loops
Looping through properties of an object
 ```javascript
const object = { key1: "value1", key2: "value2" };
for (const key in object) {
    console.log(key + ": " + object[key]);
}

//Example:
const obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
  console.log(obj[prop]);
}
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

### For Of Loops
Looping through elements of an array or a string
 ```javascript
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}
```

### For Each Loops
A For Each loop is a method that allows you to iterate through and perform a function on each element of an array.
 ```javascript
array.forEach((element, index, array) => {
    // code to be executed for each element
});

//Example:
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num * 2); // Output: 2, 4, 6, 8, 10
});

//Example 2:
let users = [{name: "John", email: "john@example.com"}, {name: "Jane", email: "jane@example.com"}, {name: "Bob", email: "bob@example.com"}];

users.forEach(function(user, index, array) {
  console.log(`Name: ${user.name} Email: ${user.email}`);
});
// Or can use an arrow function
users.forEach((user, index, array) => {
  console.log(`Name: ${user.name} Email: ${user.email}`);
});

//Example 3:
function squareSum(arr) {
    let sum = 0;
    arr.forEach(element => sum += element * element);
    return sum;
}
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

### While Loops
 A while loop is used to execute a block of code repeatedly as long as a given condition is true.
 ```javascript
 while (condition) {
  // code to be executed
}

//Example:
let password = "password123";
let input;

while (input !== password) {
  input = prompt("Enter your password:");
}

console.log("Access granted!");
```

### Do While Loops
Executing code as long as a certain condition is true
 ```javascript
while (condition) {
    // code to be executed
}
```
