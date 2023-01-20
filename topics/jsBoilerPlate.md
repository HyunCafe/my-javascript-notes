## Boiler Plates

### Strings

#### Repeat a String
```javascript
//Example:
let str = "Hello";
let newStr = str.repeat(3);
console.log(newStr); // Output: "HelloHelloHello"

//Example 2:
function repeatWord(num, str) {
  let repeatedString = repeatStr(num, str);
  console.log(repeatedString);
}
repeatWord(2, "Hello"); // "HelloHello"
```

### Arrays

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
