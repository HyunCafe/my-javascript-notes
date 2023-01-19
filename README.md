# Programming

# Work in Progress, Will add more as as time progresses

## **Javascript**
### Table of Contents
* [Functions](#Functions)
  * [Arrow Functions](#Arrow-Functions)
 * [Conditional Statements](#Conditional-Statements)
   * [If-Else Statements](#If-Else-Statements)
   * [Ternary Operator](#Ternary-Operator)
   * [Switch Statements](#Switch-Statements)
 * [Loops](#Loops)
   * [For Loops](#For-Loops)
   * [For In Loops](#For-In-Loops)
   * [For Of Loops](#For-Of-Loops)
   * [For Each Loops](#For-Each-Loops)
   * [While Loops](#While-Loops)
   * [Do While Loops](#Do-While-Loops)
* [Arrays](#Arrays)
   * [Array Methods](#Array-Methods)
     * [push](#push)
     * [pop](#pop)
     * [shift](#shift)
     * [unshift](#unshift)
     * [splice](#splice)
     * [slice](#slice)
     * [indexOf](#indexOf)
     * [includes](#includes)
     * [filter](#filter)
     * [map](#map)
     * [sort](#sort)
     * [concat](#concat)
     * [join](#join)
     * [reverse](#reverse)
     * [reduce](#reduce)
     * [forEach](#forEach)
    * [Generate Random Selection](#Generate-Random-Selection)
    * [Check in Array for Element](#Check-in-Array-for-Element)
* [DOM Manipulation](#DOM-Manipulation)
  * [Event Listeners](#Event-Listeners)
    * [Add to Event Listen](#Add-to-Event-Listen)
    * [Display Result to Event Listen](#Display-Result-to-Event-Listen)
* [Object Oriented Programming](#Object-Oriented-Programming)
  * [Data Structures](#Data-Structures)
    * [Data Logic](#Data-Logic)    
* [Big O Complexity](#Big-O-Complexity)
   * [Common Data Structure Operations](#Common-Data-Structure-Operations)
   * [Array Sorting Algorithms](#Array-Sorting-Algorithms)

## Functions 

[Back to Table of Contents](#Table-of-Contents)


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

## Loops

[Back to Table of Contents](#Table-of-Contents)

[Mozilla Loops Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### For Loops

A for loop is used to iterate over an array or an object. <br>
The for loop has three parts: the initializationExpression, the conditionExpression, and the incrementExpression.
```javascript
for (let i = 0; i < array.length; i++) {
  // code to be executed
}
```

### For In Loop
Looping through properties of an object
 ```javascript
const object = { key1: "value1", key2: "value2" };
for (const key in object) {
    console.log(key + ": " + object[key]);
}
```

### For Of Loop
Looping through elements of an array or a string
 ```javascript
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}
```

### For Each Loop
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

[Back to Table of Contents](#Table-of-Contents)

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
function removeElements(originalArray, ...elementsToRemove) {
  // Using filter method to create a new array with all elements that pass the test
  return originalArray.filter(currentArrayElement => {
    // Check if the current element of the original array is not present in the elementsToRemove array
    return !elementsToRemove.includes(currentArrayElement);
  });
}
console.log(removeElements([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

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

[Mozilla Math Methods Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

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

[Back to Table of Contents](#Table-of-Contents)

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

[Back to Table of Contents](#Table-of-Contents)

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
## Big O Complexity
Big-O notation, represents an algorithm's worst-case complexity. It uses algebraic terms to describe the complexity of an algorithm, allowing you to measure its efficiency and performance.

[Back to Table of Contents](#Table-of-Contents)

[Big O Cheat Sheet](https://www.30secondsofcode.org/articles/s/big-o-cheatsheet)

<img align="center" width="500" src="https://raw.githubusercontent.com/HyunCafe/HyunCafe/main/assests/bigo.png"  alt="big o complexity chart" />

### Common Data Structure Operations
Different data structures have different time complexities for the same operations. Below you can find average and worst time complexities for data structures used commonly in web development.

#### Average Time Complexity
```javascript
| Data Structure      | Access   | Search   | Insertion | Deletion  |
|---------------------|----------|----------|-----------|-----------|
| Array               | Θ(1)     | Θ(n)     | Θ(n)      | Θ(n)      |
| Queue               | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Stack               | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Linked List         | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Doubly Linked List  | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Skip List           | Θ(log n) | Θ(log n) | Θ(log n)  | Θ(log n)  |
| Hash Table          | N/A      | Θ(1)     | Θ(1)      | Θ(1)      |
| Binary Search Tree  | Θ(log n) | Θ(log n) | Θ(log n)  | Θ(log n)  |
```
#### Worst Time Complexity
```javascript
| Data Structure     | Access | Search | Insertion | Deletion |
|--------------------|--------|--------|-----------|----------|
| Array              | O(1)   | O(n)   | O(n)      | O(n)     |
| Queue              | O(n)   | O(n)   | O(1)      | O(1)     |
| Stack              | O(n)   | O(n)   | O(1)      | O(1)     |
| Linked List        | O(n)   | O(n)   | O(1)      | O(1)     |
| Doubly Linked List | O(n)   | O(n)   | O(1)      | O(1)     |
| Skip List          | O(n)   | O(n)   | O(n)      | O(n)     |
| Hash Table         | N/A    | O(n)   | O(n)      | O(n)     |
| Binary Search Tree | O(n)   | O(n)   | O(n)      | O(n)     |
```

### Array Sorting Algorithms
Similar to data structures, different array sorting algorithms have different time complexities. Below you can find the best, average and worst time complexities for the most common array sorting algorithms.

```javascript
| Algorithm      | Best       | Average    | Worst      |
|----------------|------------|------------|------------|
| Quick sort     | Ω(n log n) | Θ(n log n) | O(n^2)     |
| Merge sort     | Ω(n log n) | Θ(n log n) | O(n log n) |
| Heap sort      | Ω(n log n) | Θ(n log n) | O(n log n) |
| Bubble sort    | Ω(n)       | Θ(n^2)     | O(n^2)     |
| Insertion sort | Ω(n)       | Θ(n^2)     | O(n^2)     |
| Selection sort | Ω(n^2)     | Θ(n^2)     | O(n^2)     |
| Bucket sort    | Ω(n+k)     | Θ(n+k)     | O(n^       |
```
