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

#### Highest Scoring Word
```javascript
function high(x) {
  return x.split(' ').reduce((highestScoringWord, currentWord) => {
    const wordScore = currentWord
      .split('')
      .map((letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
      .reduce((a, b) => a + b, 0);

    const highestScore = highestScoringWord
      .split('')
      .map((letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
      .reduce((a, b) => a + b, 0);

    return wordScore > highestScore ? currentWord : highestScoringWord;
  });
}
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

#### Replace every a for b
The switcheroo() function switches every occurrence of 'a' and 'b' in a given string.
```javascript
function switcheroo(x){
  return x.replace(/a|b/g, letter => letter === 'a' ? 'b' : 'a');
}
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


#### Capitalize Every Other Char in String and Return as 2 Element Array
```javascript
function capitalize(s){
  let arrayS = s.split('')
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < arrayS.length; i++) {
    if (i % 2 === 0) {
      array1.push(arrayS[i].toUpperCase());
      array2.push(arrayS[i]);
    } else {
      array1.push(arrayS[i]);
      array2.push(arrayS[i].toUpperCase());
    }
  }
  return [array1.join(''), array2.join('')];
};
```

#### Check for Anagram
An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once.
```javascript
const isAnagram = function(test, original) {
  let newTest = test.toLowerCase().split('').sort().join('');
  let newOriginal = original.toLowerCase().split('').sort().join('');
  return newTest === newOriginal;
};
```

#### Check if Duplicate
```javascript
// Function to check if a string has unique characters
function hasUniqueChars(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false; // Return false when a duplicate is found
    }
    charSet.add(char);
  }
  return true; // Return true when there are no duplicates
}
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

#### Find Unique Number in Array
```javascript
// Example 1:
function findUniq(arr) {
  const counter = {};

  // Iterate through the array and count the occurrences of each number
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (counter[num] === undefined) {
      counter[num] = 1;
    } else {
      counter[num]++;
    }
  }

  // Iterate through the counter object to find the unique number
  for (const num in counter) {
    if (counter[num] === 1) {
      return parseFloat(num);
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // Output: 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // Output: 0.55

// Example 2
function findUniq(arr) {
  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // Output: 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // Output: 0.55
```

#### Min Sum of Paired Products in Array
This function takes an array of positive integers and returns the minimum sum obtained by summing the products of pairs of integers in the array. It does so by sorting the array, then pairing the smallest and largest elements, the second smallest and second largest elements, and so on.
```javascript
function minSum(arr) {
  arr.sort((a,b) => a - b)
  let minSums = 0;
  for(let i = 0; i < arr.length / 2; i++) {
    minSums += arr[i] * arr[arr.length - 1 - i];
  }
  return minSums;
}
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Repeat each digit in string x number of times equal to its value
```javascript
function numericRepeater(inputString) {
  let repeatedString = '';
  for (let i = 0; i < inputString.length; i++) {
    let numericValue = +(inputString[i]);
    repeatedString += inputString[i].repeat(numericValue);
  }
  return repeatedString;
}

numericRepeater("312")
// Output: "333122"

numericRepeater("102269")
// Output: "12222666666999999999"
```

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

#### Sort by Last Char
Return an array of words sorted alphabetically by the final character in each
```javascript
function last(x) {
  return x.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
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
### Numbers BP

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Unicode Convert
```javascript
function letterToAlphabetPosition(letter) {
  // The following line calculates the position of the letter in the alphabet
  // by subtracting the Unicode value of 'a' and adding 1.
  // If you want to change the base value, e.g. to use 'b' as the starting point,
  // replace 'a' with 'b', or any other letter you want to use as the base.
  return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

// Examples:
console.log(letterToAlphabetPosition('a')); // 1
console.log(letterToAlphabetPosition('b')); // 2
console.log(letterToAlphabetPosition('c')); // 3

// To use the function with different base values, change the base letter
// in the function definition, e.g. 'a'.charCodeAt(0) to 'b'.charCodeAt(0)
// Then the values will be calculated with the new base value:
// 'b' will be 1, 'c' will be 2, 'd' will be 3, etc.
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

//Example: One Liner
const isPalindrome = (string) => string === [...string].reverse().join('')


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

#### Cycling through a list of choices with wrapping
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


## LeetCode

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### TwoSum
```javascript
const twoSum = function(nums, target) {
  // Create an empty object to store the numbers and their indices
  const numMap = {};

  // Iterate through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement, which is the difference between the target and the current number
    const complement = target - nums[i];

    // Check if the complement is already in numMap (i.e., if the pair of numbers that add up to the target has been found)
    if (numMap.hasOwnProperty(complement)) {
      // If the complement is found, return the indices of the two numbers as an array
      return [numMap[complement], i];
    }

    // If the complement is not found, add the current number to numMap with its index as the value
    numMap[nums[i]] = i;
  }
}
```
