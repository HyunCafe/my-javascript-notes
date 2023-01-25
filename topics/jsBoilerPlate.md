## Boiler Plates

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Strings BP

#### Remove Whitespace
```javascript
let str = "Hello World";
let newStr = str.split(" ").join("");
console.log(newStr); // "HelloWorld"
```

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
#### Sum of a String
```javascript
//Example 1: Find Sum of Number using ForEach Loop
let numbers = 5;
let sum = 0;
[numbers].forEach(function(number) {
  sum += number;
});
console.log(sum);

//Example 2: Find Sum of Number using For Loop
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
let result = sumRange(2, 5);
console.log(result); // Output: 14 (2 + 3 + 4 + 5 = 14)
```
### If Else BP

#### Fibonacci
```javascript
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
```

### Arrays BP

[Back to Table of Contents](../README.md/#Table-of-Contents)

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

#### Combine Array
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]
```

#### Expand Number into Array
```javascript
let number = 10;
let numberArray = [...Array(number).keys()].map(i => i + 1);
console.log(numberArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### Find Smallest Int in Array
```javascript
class SmallestIntegerFinder {
  findSmallestInt(arr) {
    return Math.min(...arr)
  }
}
```

#### Find Oldest Age in Array
```javascript
const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        return currentAge > oldestAge ? person : oldest;
    });
};
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Reverse a String or an Array
```javascript
function reverseString(word) {
  let wordArray = [...word];
  wordArray.reverse();
  let reversedWord = wordArray.join('');
  return reversedWord;
}
console.log(reverseString('Hello, World!')); // Output: !dlroW ,olleH
```

#### Square Root ForEach Array
```javascript
function squareSum(arr) {
    let sum = 0;
    arr.forEach(element => sum += element * element);
    return sum;
}
```

#### Sum of an Array
```javascript
const sumAll = function(startNum, endNum) {
    let numArray = [];
    for (let i = startNum; i <= endNum; i++) {
        numArray.push(i);
    }
    let sum = numArray.reduce((a, b) => a + b);
    return sum;
}
console.log(sumAll(1, 10)) //result would be 55, which is the sum of 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
```

### Loops BP

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Factorial For Loop
```javascript
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### Math BP

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Generate Random Selection
```javascript
const arrayChoices = ['choice1', 'choice2', 'choice3' ...etc];
const randomSelect = arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
```

### Regex BP

[Mozilla MDN Regex Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Palindrome
```javascript
const palindromes = function (palin) {
    // Create an empty string to store the cleaned string
    let cleanedString = '';
    // Iterate through the input string
    for (let i = 0; i < palin.length; i++) {
        // Check if the character is alphanumeric
        if (palin[i].match(/[A-Za-z0-9]/)) {
            // If it is, add
```

#### Replace Vowels in String
```javascript
function replaceVowels(str, replacement) {
  let vowels = /[aeiou]/gi;
  return str.replace(vowels, replacement);
}

//Example:
let originalString = "I love ice cream";
let newString = replaceVowels(originalString, "*");
console.log(newString); // "I l*v* *c* cr**m"
```
