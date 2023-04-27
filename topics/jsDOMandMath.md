## DOM Manipulation

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Adding and Deleting Elements
```javascript
document.createElement(element)  // Create an HTML element
document.removeChild(element)    // Remove an HTML element
document.appendChild(element)    // Add an HTML element
document.replaceChild(new, old)  // Replace an HTML element
document.write(text)	         // Write into the HTML output stream
```

### Creating Elements and Texts
```javascript
// Step 1: Get a reference to the container element
const container = document.querySelector('#container');

// Step 2: Create a new <div> element
const content = document.createElement('div');

// Step 3: Add a class to the new <div> element
content.classList.add('content');

// Step 4: Add text content to the new <div> element
content.textContent = 'This is the glorious text-content!';

// Step 5: Append the new <div> element to the container
container.appendChild(content);
```
### Event Listeners 

[Mozilla Event Listen Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[W3 Dom Events List](https://www.w3schools.com/jsref/dom_obj_event.asp)

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

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Add to Event Listener
* Adding an event listener to a specific element
```javascript
// Assign the element with the specified id to a variable
let element = document.getElementById("elementId");

// Add an event listener for the specified eventType to the element
element.addEventListener("eventType", functionCalled);

Example:
// Get an element by its id
const element = document.getElementById("myId");

// Select the first element that matches a CSS selector
const element = document.querySelector(".myClass");

// Select all elements that match a CSS selector
const elements = document.querySelectorAll(".myClass");
```

#### Add to Multiple Event Listener
```javascript
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

Example:
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => console.log('Button clicked!')));
```

#### Display Result to Event Listener
* Displaying the result of an action in a specific element `<p id="result"> </p>`
```javascript
// Find the element where the result will be displayed
function displayResult(result) {

// Update the text of the element with the result
const resultElement = document.getElementById("result");
resultElement.textContent = result;
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

#### Math abs
returns the absolute value of a number.
```javascript
let x = -5;
let absVal = Math.abs(x);
console.log(absVal); // 5
```

#### Math ceil
rounds a number up to the nearest integer. (if 2.1 rounds to 3)
```javascript
let x = 4.1;
let roundedUpX = Math.ceil(x); // 5
console.log(roundedUpX);

// Example: Rounding up to the nearest multiple of a given number
function roundUpToNearestMultiple(num, multiple) {
  return Math.ceil(num / multiple) * multiple;
}

// Example 2: Rounding up to the nearest power of 2
function roundUpToNearestPowerOf2(num) {
  return Math.pow(2, Math.ceil(Math.log2(num)));
}

```

#### Math floor
rounds a number down to the nearest integer. (if 2.9 rounds to 2)
```javascript
let x = 4.9;
let roundedDownX = Math.floor(x); // 4
console.log(roundedDownX);
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Math max
returns the largest of zero or more numbers.
```javascript
let largestNumber = Math.max(3, 5, 8, 12);
console.log(largestNumber); // 12
```

#### Math min
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

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Math random
returns a random number between 0 (inclusive) and 1 (exclusive).
```javascript
let randomNumber = Math.random();
console.log(randomNumber); // a random number between 0 and 1

//Example To generate random selection from an array <br>
const arrayChoices = ['choice1', 'choice2', 'choice3' ...etc];
const randomSelect = arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
```

#### Math round
rounds a number to the nearest integer. (if 2.1 rounds to 2, if 2.9 rounds to 3)
```javascript
let x = 4.6;
let roundedX = Math.round(x); // 5
console.log(roundedX);
```

#### Math sqrt
returns the square root of a number.
```javascript
let x = 16;
let squareRoot = Math.sqrt(x);
console.log(squareRoot); // 4
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Math trunc
returns the integer part of a number by removing any fractional digits.
```javascript
// Boilerplate example
let x = 5.8;
let truncated = Math.trunc(x);
console.log(truncated); // 5
```
