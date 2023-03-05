## Boiler Plates

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Strings BP

#### Concatenating Multiple Strings
```javascript
function concatenateStrings(strings) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[i].length; j++) {
            result += strings[i].charAt(j);
        }
    }
    return result;
}
//Example: Using the function above will out:

let sentenceParts = ['The ', 'quick ', 'brown ', 'fox ', 'jumps ', 'over ', 'the ', 'lazy ', 'dog.'];
let completeSentence = concatenateStrings(sentenceParts);
console.log(completeSentence); // The quick brown fox jumps over the lazy dog.

//Example
function tripleTrouble(one, two, three){
  let triple ='';
  for (let i = 0; i < one.length; i++) {
    triple += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return triple;
}
console.log(tripleTrouble("1234", "1234", "1234")); // Output: "11223344"
```

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

#### Check for Anagram
An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once.
```javascript
const isAnagram = function(test, original) {
  let newTest = test.split('').sort().join('');
  let newOriginal = original.toLowerCase().split('').sort().join('');
  return newTest === newOriginal;
};
```

#### Check if Isogram
An isogram is a word or phrase that has no repeating letters
```javascript
function isIsogram(str){
  let newArr = str.toLowerCase().split('');
  let dupes = [...new Set(newArr)];
  return newArr.length === dupes.length;
}
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

#### Combine Array
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]
```

#### Duplicate Value X times on Array
```javascript
// Example: Create an array with x amout of duplicate values
function createArrayWithDuplicateValue(n, val) {
  return new Array(n).fill(val);
}

let myArray = createArrayWithDuplicateValue(5, "hello");
console.log(myArray); // Output: ["hello", "hello", "hello", "hello", "hello"]

```

#### Expand Number into Array
```javascript
// Example: Expand single number to an array 
let number = 10;
let numberArray = [...Array(number).keys()].map(i => i + 1);
console.log(numberArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Example: Expand starting to ending number to an array 
function pipeFix(numbers) {
  const startNum = numbers[0];
  const lastNum = numbers[numbers.length - 1];
  const result = Array(lastNum - startNum + 1).fill().map((_, i) => startNum + i);
  return result;
}

```

#### Fibonacci FizzBuzz into an Array
```javascript
function fibsFizzBuzz(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.map(num => {
    if (num % 15 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num;
    }
  }).slice(1); // exclude the first 0 from the fibonacci sequence
}

OR My Preferred (Easier to understand)

function fibsFizzBuzz(n) {
  const fibs = [1, 1];
  for (let i = 2; i < n; i++) {
    fibs[i] = fibs[i-1] + fibs[i-2];
  }
  return fibs.map(fizzBuzz);
}

function fizzBuzz(n) {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else {
    return n;
  }
}
```

#### Filter Elements out of Array
```javascript
function filterArray(arr, conditionFn) {
  return arr.filter((elem) => !conditionFn(elem));
}

//Example: Filter out geese from birds
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird));
}
```

#### Find Maximum Value of Multiple Expressions in Array
```javascript
// Finds the maximum value of multiple expressions using the given values and operators.

function findMaxValue(...values, ...operators) {
  const expressions = [
    ... // Define the expressions to evaluate here
  ];
  return Math.max(...expressions);
}

// Find the maximum value using the numbers 1, 2, and 3 and the operators +, *, and ()
const maxValue = findMaxValue(1, 2, 3, '+', '*', '(');
console.log(maxValue); // Output: 9
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
const arrayChoices = ["choice1", "choice2", "choice3", ...etc];
const randomSelect = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
```

### Regex BP

[Mozilla MDN Regex Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Check if Isogram
```javascript
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

//Method 2
!str.match(/([a-z]).*\1/i);
```

#### Check String for Character Occurrences
```javascript
const strCount = (str, letter) => {
  let count = str.match(new RegExp(letter, "g"));
  if (!count) return 0;
  return count.length;
};

Explanation:
  // Using `new RegExp` to create a regular expression to match the `letter`
  // in the `str` parameter. The `g` flag is used to perform a global search
  // in the string.
  // If the match doesn't return any results, return 0
  // If the match returns a result, return the length of the match
```

#### Check String for Match
```javascript
function checkStringCase(str) {
return !str.match(/[a-z]/g); // Check if a String is in All Uppercase Characters
}

Example:
```
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
            
//Example: Function to check if a string is a palindrome with Regex
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
}
```
#### Replace Letters to Cypher
```javascript
//Example: Ceaser Cypher Shift Positive or Negative
function caesar(str, shift) { // shift is the cypher # shifted positive or negative
  const alphabet = 26;   // the number of letters in the alphabet
  shift = ((shift % alphabet) + alphabet) % alphabet;  // ensure the shift value is always positive and less than alphabet
  return str.replace(/[a-zA-Z]/g, (char) => {  // use a regular expression to match all uppercase and lowercase letters
    let code = char.charCodeAt(0) + shift;    // get the unicode value of the current letter
    if ((code > 90 && code < 97) || code > 122) {    // check if the code is outside the range of uppercase or lowercase letters
      code -= alphabet;      // if it is, wrap it around the alphabet by subtracting alphabet
    }
    return String.fromCharCode(code);    // return the shifted letter as a string
  });
}
console.log(caesar("HELLO", 3)); // returns "KHOOR"
```
#### Replace Vowels in String
```javascript
function replaceVowels(str, replacement) {
  let vowels = /[aeiou]/gi;
  return str.replace(vowels, replacement);

//Example:
let originalString = "I love ice cream";
let newString = replaceVowels(originalString, "*");
console.log(newString); // "I l*v* *c* cr**m"
```

#### Removing trailing and leading zeroes from a number
```javascript
function noBoringZeros(n) {
  // Use regex to match any trailing zeroes
  // * quantifier is used to match zero or more occurences of the preceding element (0)
  // $ asserts position at the end of the string
  let trailingZeroes = /0*$/; 
  
  // replace any trailing zeroes with an empty string
  n = n.toString().replace(trailingZeroes, "");
  
  // convert the number back to number format
  return +n;
}
```

#### Restrict to US Zip Code Pattern with Optional 4 Digit Extension
```html
<form action="#" method="get">
  <div>
    <label for="zip_code">Postal / Zip Code:</label>
  </div>

  <input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" required>

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```
```javascript
(\d{5}([\-]\d{4})?)

\d{5}: // Match exactly 5 digits. This matches the first part of the zip code, which is always 5 digits long.

([\-]\d{4})?: // Optionally match a dash followed by 4 more digits. The ? at the end makes this part optional, 
// so it will match either 0 or 1 times. The backslash before the dash is necessary to escape it,
// since otherwise it would be interpreted as a special character in the regular expression syntax. 
// This matches the second part of the zip code, which is sometimes present and sometimes not.
```
### Global Objects BP

### Cycling through a list of choices with wrapping
This function cycles through a fixed list of phrases and maps a number to the corresponding phrase. If the number exceeds the number of phrases, the function wraps around to the beginning of the list.
```javascript
function whichChoices(choices) {
  const phrases = [
    "choice 1",
    "choice 2",
    "choice 3",
    "choice 4",
    "choice 5"
  ];
  
  return phrases[(choices - 1) % phrases.length];
}
```

#### Removing Duplicates to New Array
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

//Example:
const originalArray = [1, 2, 3, 1, 2];
const newArray = removeDuplicates(originalArray);
console.log(newArray);  // Output: [1, 2, 3]
```
