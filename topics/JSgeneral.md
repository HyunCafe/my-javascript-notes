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
```

### For In Loops
Looping through properties of an object
 ```javascript
const object = { key1: "value1", key2: "value2" };
for (const key in object) {
    console.log(key + ": " + object[key]);
}
```

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
array.forEach(function(element) {
    // code to be executed for each element
});
```

### While Loops
 A while loop is used to execute a block of code repeatedly as long as a given condition is true.
 ```javascript
 while (condition) {
  // code to be executed
}
```

### Do While Loops
Executing code as long as a certain condition is true
 ```javascript
while (condition) {
    // code to be executed
}
```

## Arrays 

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Arrays Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Array Methods

#### push
adds one or more elements to the end of an array and returns the new length of the array.
array.push(element1, element2, ..., elementX);
```javascript
array.push(element1, element2, ..., elementX);

//Example:
let array = [1, 2, 3];
console.log(array.push(4, 5, 6)); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5, 6]
```

#### pop
removes the last element from an array and returns that element.
```javascript
array.pop();

//Example:
console.log(array.pop()); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5]
```

#### shift
removes the first element from an array and returns that element.
```javascript
array.shift();

//Example:
console.log(array.shift()); // Output: 1
console.log(array); // Output: [2, 3, 4, 5]
```

#### unshift
adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
array.unshift(element1, element2, ..., elementX);

//Example:
console.log(array.unshift(-1, 0)); // Output: 6
console.log(array); // Output: [-1, 0, 2, 3, 4, 5]
``
adds or removes elements from an array.
```javascript
// first argument is the index where to start adding/removing elements
// second argument is the number of elements to remove
// third argument is the element(s) to add
array.splice(index, howMany, element1, element2, ...);

//Example:
let array = [1,2,3,4,5];
console.log(array.splice(2, 2, 6, 7)); // Output: [3, 4]
console.log(array); // Output: [1, 2, 6, 7, 5]
```

#### slice
returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
```javascript
// first argument is the starting index, second argument is the ending index
array.slice(begin, end);

//Example:
let array = [1,2,3,4,5];
console.log(array.slice(1,3)); // Output: [2,3]
```

#### indexOf
returns the first index at which a given element can be found in the array, or -1 if it is not present.
```javascript
array.indexOf(searchElement, fromIndex);

//Example:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.indexOf(5)); // Output: 4
console.log(numbers.indexOf(15)); // Output: -1
```

#### includes
returns a boolean indicating whether an array includes a certain element.
```javascript
array.includes(searchElement, fromIndex);

//Example:
console.log(numbers.includes(5)); // Output: true
console.log(numbers.includes(15)); // Output: false
```

#### filter
creates a new array with all elements that pass the test implemented by the provided function.
```javascript
array.filter(callback(element, index, array), thisArg);

//Example:
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//Example 2: remove elements from array and create a new array from it
function removeFromArray(array, ...elemRemove) {
  return array.filter(filtered => {
    return !elemRemove.includes(filtered);
  });
}
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
```

#### map
creates a new array with the results of calling a provided function on every element in the calling array.
```javascript
array.map(callback(currentValue, index, array), thisArg);

//Example:
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

#### sort
sorts the elements of an array in place and returns the sorted array.
```javascript
array.sort(compareFunction);

//Example:
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### concat
joins two or more arrays and returns a new array that contains all the elements from the original arrays.
```javascript
array1.concat(array2, array3, ...);

//Example:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```
#### join
joins all elements of an array into a string.
```javascript
array.join(separator);

//Example:
let fruits = ['Apple', 'Banana', 'Mango'];
let fruitString = fruits.join(', ');
console.log(fruitString); // "Apple, Banana, Mango"
```
#### reverse
reverses the order of the elements in an array
```javascript
array.reverse();

//Example:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

//Example 2: create a new array that is reversed of the array
function reverseString(word) {
  // Step 1: Spread the characters of the word into an array
  let wordArray = [...word];

  // Step 2: Reverse the order of elements in the array using the reverse() method
  wordArray.reverse();

  // Step 3: Convert the array back into a string using the join() method
  let reversedWord = wordArray.join('');

  // Step 4: Return the reversed string
  return reversedWord;
}
console.log(reverseString('Hello, World!')); // Output: !dlroW ,olleH

```

#### reduce
applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
```javascript
const result = array.reduce((accumulator, currentValue, currentIndex, array) => {
   // logic to update accumulator based on currentValue and currentIndex 
   return accumulator;
}, initialValue);
console.log(result);


//Example:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

//Example 2:
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce(function(accumulator, currentValue) {
// accumulator = a
// currentValue = b
  return accumulator + currentValue;
}, 0);
// currentIndex = not used in this example
// array = numbers
console.log(sum);
```

#### forEach
executes a provided function once for each array element.
```javascript
array.forEach(function(currentValue, index, array), thisArg);

//Example:
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(currentValue, index, array) {
  console.log(currentValue, index);
});

// Output:
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
```

#### Generate Random Selection

* To generate random selection from an array <br>
```javascript
const arrayChoices = ['choice1', 'choice2', 'choice3' ...etc];
const randomSelect = arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
```
#### Check in Array for Element
```javascript
// Declare an array and an element to check
let myArray = [1, 2, 3, 4, 5];
let elementToCheck = 3;

// Check if the array includes the element
if (myArray.includes(elementToCheck)) {
    console.log(`The element ${elementToCheck} is present in the array.`);
} else {
    console.log(`The element ${elementToCheck} is not present in the array.`);
}
```
## DOM Manipulation

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Event Listeners 

[Mozilla Event Listen Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

some common event types being: 
```javascript
"click": fired when an element is clicked.
"mouseenter": fired when the mouse cursor enters an element.
"mouseleave": fired when the mouse cursor leaves an element.
"submit": fired when a form is submitted.
"change": fired when the value of an element changes.
"input": fired when the value of an input element changes.
"keydown": fired when a key is pressed down.
"keyup": fired when a key is released.
"load": fired when a page or an image finishes loading.
"resize": fired when the browser window is resized.
"scroll": fired when the user scrolls an element.
"touchstart": fired when the user starts touching an element on a touch device.
"touchend": fired when the user stops touching an element on a touch device.
``` 
#### Add to Event Listen
* Adding an event listener to a specific element
```javascript
// Assign the element with the specified id to a variable
let element = document.getElementById("elementId");

// Add an event listener for the specified eventType to the element
element.addEventListener("eventType", functionCalled);
```

#### Display Result to Event Listen
* Displaying the result of an action in a specific element `<p id="result"> </p>`
```javascript
// Find the element where the result will be displayed
function displayResult(result) {

// Update the innerHTML of the element with the result
const resultElement = document.getElementById("result");
resultElement.innerHTML = result;
}
```

## Object Oriented Programming

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Data Structures
#### Data Logic
```javascript
const rules = {
    option1: { rule1: "value1", rule2: "value2" },
    option2: { rule1: "value3", rule2: "value4" },
    option3: { rule1: "value5", rule2: "value6" }
};
```
Example 1
```javascript
const rules = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" }
};
```
Example 2
```javascript
const rules = {
    name: { required: true, maxLength: 50 },
    email: { required: true, emailFormat: true },
    age: { required: true, minValue: 18, maxValue: 100 },
    password: { required: true, minLength: 8, hasNumber: true, hasSpecialChar: true }
};
```
## Math

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Math Methods Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

#### Math round
rounds a number to the nearest integer.
```javascript
let x = 4.6;
let roundedX = Math.round(x); // 5
console.log(roundedX);
```

#### Math ceil
rounds a number up to the nearest integer.
```javascript
let x = 4.1;
let roundedUpX = Math.ceil(x); // 5
console.log(roundedUpX);
```

#### Math floor
rounds a number down to the nearest integer.
```javascript
let x = 4.9;
let roundedDownX = Math.floor(x); // 4
console.log(roundedDownX);

```
#### Math random
returns a random number between 0 (inclusive) and 1 (exclusive).
```javascript
let randomNumber = Math.random();
console.log(randomNumber); // a random number between 0 and 1

//Example To generate random selection from an array <br>
const arrayChoices = ['choice1', 'choice2', 'choice3' ...etc];
const randomSelect = arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
```

#### Math max
returns the largest of zero or more numbers.
```javascript
let largestNumber = Math.max(3, 5, 8, 12);
console.log(largestNumber); // 12
```

#### Math.min
returns the smallest of zero or more numbers.
```javascript
let smallestNumber = Math.min(3, 5, 8, 12);
console.log(smallestNumber); // 3
```

#### Math pow
returns the base to the exponent power, that is, base exponent.
```javascript
let base = 5;
let exponent = 2;
let result = Math.pow(base, exponent);
console.log(result); // 25 (5 to the power of 2)
```

#### Math sqrt
returns the square root of a number.
```javascript
let x = 16;
let squareRoot = Math.sqrt(x);
console.log(squareRoot); // 4
```

#### Math abs
returns the absolute value of a number.
```javascript
let x = -5;
let absVal = Math.abs(x);
console.log(absVal); // 5
```

#### Math trunc
returns the integer part of a number by removing any fractional digits.
```javascript
// Boilerplate example
let x = 5.8;
let truncated = Math.trunc(x);
console.log(truncated); // 5
```
