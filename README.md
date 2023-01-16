# Programming

## **Javascript**

* [Arrays](#Arrays)
* [Event Listeners](#Event-Listeners)

## Arrays
* To generate random selection from an array <br>
```
const arrayChoices = ['choice1', 'choice2', ... 'choice3'];
const randomSelect = arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
```

## Event Listeners
some common event types being: 
```
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

* Adding an event listener to a specific element
```
let element = document.getElementById("elementId");      // Assign the element w/ the specified id to a variable
element.addEventListener("eventType", functionCalled);   // Add event listener for specified eventType to the element
```


* Displaying the result of an action in a specific element `<p id="result"> </p>`
```
function displayResult(result) {                          // Find the element where the result will be displayed
const resultElement = document.getElementById("result");  // Update the innerHTML of the element with the result
resultElement.innerHTML = result;
}
```
