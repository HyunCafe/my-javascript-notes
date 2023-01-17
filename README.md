# Programming

# Work in Progress, Will add more as as time progresses

## **Javascript**
* [Functions](#Functions)
  * [Conditional Statements](#Conditional-Statements)
    * [If-Else Statements](#If-Else-Statements)
    * [Switch Statements](#Switch-Statements)
  * [Loops](#Loops)
    * [For Loops](#For-Loops)
    * [While Loops](#While-Loops)
* [Arrays](#Arrays)
  * [Generate Random Selection](#Generate-Random-Selection)
* [DOM Manipulation](#DOM-Manipulation)
  * [Event Listeners](#Event-Listeners)
    * [Add to Event Listen](#Add-to-Event-Listen)
    * [Display Result to Event Listen](#Display-Result-to-Event-Listen)
* [Object Oriented Programming](#Object-Oriented-Programming)
  * [Data Structures](#Data-Structures)
    * [Data Logic](#Data-Logic)    
 
 
## Functions

[Mozilla Functions Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

A function is a reusable block of code that can be invoked by a name. Functions can take in parameters and return a value.
```javascript
function functionName(parameter1, parameter2) {
  // code to be executed
  return value;
}
```

## Conditional Statements
Conditional statements are used to make decisions in code. The most common type of conditional statement is the if-else statement.

### If-Else Statements
```javascript
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
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

## Loops

[Mozilla Loops Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

### For Loops
A for loop is used to iterate over an array or an object. The for loop has three parts: the initialization, the condition, and the final-expression.
```javascript
for (let i = 0; i < array.length; i++) {
  // code to be executed
}
```

### While Loops
 A while loop is used to execute a block of code repeatedly as long as a given condition is true.
 ```javascript
 while (condition) {
  // code to be executed
}
```

## Arrays

[Mozilla Arrays Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

#### Generate Random Selection
* To generate random selection from an array <br>
```javascript
const arrayChoices = ['choice1', 'choice2', 'choice3' ...etc];
const randomSelect = arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
```

## DOM Manipulation

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
