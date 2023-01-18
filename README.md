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
    * [Generate Random Selection](#Generate-Random-Selection)
    * [Check in Array for Element](#Check-in-Array-for-Element)
* [DOM Manipulation](#DOM-Manipulation)
  * [Event Listeners](#Event-Listeners)
    * [Add to Event Listen](#Add-to-Event-Listen)
    * [Display Result to Event Listen](#Display-Result-to-Event-Listen)
* [Object Oriented Programming](#Object-Oriented-Programming)
  * [Data Structures](#Data-Structures)
    * [Data Logic](#Data-Logic)    
* [Big O Complexity(#Big-O-Complexity) 
   * [Common Data Structure Operations](Common-Data-Structure-Operations)
   * [Array Sorting Algorithms](Array-Sorting-Algorithms)

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
```javascript
// push() - adds one or more elements to the end of an array and returns the new length of the array.
array.push(element1, element2, ..., elementX);

// pop() - removes the last element from an array and returns that element.
array.pop();

// shift() - removes the first element from an array and returns that element.
array.shift();

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
array.unshift(element1, element2, ..., elementX);

// splice() - adds or removes elements from an array.
// first argument is the index where to start adding/removing elements
// second argument is the number of elements to remove
// third argument is the element(s) to add
array.splice(index, howMany, element1, element2, ...);

// slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
// first argument is the starting index, second argument is the ending index
array.slice(begin, end);

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
array.indexOf(searchElement, fromIndex);

// includes() - returns a boolean indicating whether an array includes a certain element.
array.includes(searchElement, fromIndex);

// filter() - creates a new array with all elements that pass the test implemented by the provided function.
array.filter(callback(element, index, array), thisArg);

// map() - creates a new array with the results of calling a provided function on every element in the calling array.
array.map(callback(currentValue, index, array), thisArg);

// sort() - sorts the elements of an array in place and returns the sorted array.
array.sort(compareFunction);

// concat() - joins two or more arrays and returns a new array that contains all the elements from the original arrays.
array1.concat(array2, array3, ...);

// join() - joins all elements of an array into a string.
array.join(separator);

// reverse() - reverses the order of the elements in an array.
array.reverse();

// reduce() - applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue);

// forEach() - executes a provided function once for each array element.
array.forEach(function(currentValue, index, array), thisArg);


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
