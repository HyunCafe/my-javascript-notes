# Programming

# Work in Progress, Will add more as as time progresses

## **Javascript**

* [Arrays](#Arrays)
  * [Generate Random Selection](#Generate-Random-Selection)
* [DOM Manipulation](#DOM-Manipulation)
  * [Event Listeners](#Event-Listeners)
    * [Add to Event Listen](#Add-to-Event-Listen)
    * [Display Result to Event Listen](#Display-Result-to-Event-Listen)

## Arrays

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
