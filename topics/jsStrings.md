## Strings
[Mozilla MDN Docs Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### String Methods

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### charAt
The .charAt(index) method returns the character at the specified index in a string.
```javascript
let str = "Hello, World!";
let char = str.charAt(0);
console.log(char); // Output: "H"
```

#### charCodeAt
The .charCodeAt(index) method returns the Unicode of the character at the specified index in a string.
```javascript
let str = "Hello, World!";
let charCode = str.charCodeAt(0);
console.log(charCode); // Output: 72

Example: Alphabet Position to Number Positon
function position(letter){
  letter = letter.toLowerCase();
  let positionABC = letter.charCodeAt(0) - 96;
  return positionABC;
}
```

#### concat
The .concat(string1, string2, ...) method concatenates one or more strings to the calling string and returns a new string.
```javascript
let str = "Hello";
let newStr = str.concat(", ", "World!");
console.log(newStr); // Output: "Hello, World!"
```

[Back to Table of Contents](../README.md/#Table-of-Contents)


#### endsWith
The .endsWith(searchString, length) method returns a boolean indicating whether a string ends with the specified string at the specified position.
```javascript
let str = "Hello, World!";
let result = str.endsWith("World!");
console.log(result); // Output: true
```

#### includes
The .includes(searchString, position) method returns a boolean indicating whether a string contains the specified string at the specified position.
```javascript
let str = "Hello, World!";
let result = str.includes("World");
console.log(result); // Output: true
```

#### indexOf
The .indexOf(searchValue, start) method returns the first index at which a given element can be found in the array, or -1 if it is not present
```javascript
let str = "Hello World!";
let index = str.indexOf("o");
console.log(index); // 4
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### lastIndexOf
The .lastIndexOf(searchValue, start) method returns the last index at which a given element can be found in the array, or -1 if it is not present
```javascript
let str = "Hello World! Hello World!";
let index = str.lastIndexOf("o");
console.log(index); // 15
```

#### length
The .length property returns the number of characters in a string.
```javascript
let str = "Hello, World!";
let strLength = str.length;
console.log(strLength); // Output: 13
```

#### localeCompare
The .localeCompare(compareString) method compares the calling string to a specified string in the current locale 
and returns a number indicating whether the calling string is less than, equal to, or greater than the specified string.
```javascript
let str1 = "Hello";
let str2 = "world";
let comparison = str1.localeCompare(str2);
console.log(comparison); // Output: -1 (str1 is less than str2 in lexicographic order)
```

[Back to Table of Contents](../README.md/#Table-of-Contents)


#### match
The .match(searchValue) method searches a string for a match against a regular expression, and returns the matches as an Array object.
```javascript
let str = "Hello World! Hello World!";
let matches = str.match(/Hello/g);
console.log(matches); // ["Hello", "Hello"]
```

#### repeat
The .repeat(count) method returns a new string with the specified number of copies of the original string.
```javascript
function repeatStr (num, str) {
  return str.repeat(num);
}

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

#### replace
The .replace(searchValue, newValue) method replaces a specified value with another value in a string
```javascript
let str = "Hello World!";
let newStr = str.replace("World", "Universe");
console.log(newStr); // "Hello Universe!"

Example:


Example 1: Replace string with any Word
function replaceWords(str, replaceWord) {
  return str.replace(/\S+/g, replaceWord); // \S+ matches sequences of one or more non-whitespace characters, so replace every word with replaceWord
}

//Example 2: Ceaser Cypher Shift Positive or Negative
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

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### search
The .search(searchValue) method searches a string for a specified value and returns the position of the match.
```javascript
let str = "Hello World!";
let index = str.search("World");
console.log(index); // 6
```
#### slice
The .slice(start, end) method returns a subset of a string between a start and end index
(if you provide only one number, it will start from that index to the end of the string)
```javascript
let str = "Hello World!";
let slc = str.slice(2, 8);
console.log(slc); // "llo Wo"
```

#### split
The .split(separator) method splits a string into an array of substrings, using the specified separator.
```javascript
let str = "Hello, World!";
let strArray = str.split(",");
console.log(strArray); // Output: ["Hello", " World!"]

//Example: Remove spaces
let str = "Hello World";
let newStr = str.split(' ').split('');
console.log(newStr); // "HelloWorld"
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### startsWith
The .startsWith(searchString, position) method returns a boolean indicating whether a string starts with the specified string at the specified position.
```javascript
let str = "Hello, World!";
let result = str.startsWith("Hello");
console.log(result); // Output: true
```

#### substr
The .substr(start, length) method returns a subset of a string starting from a specified index and with a specified length
```javascript
let str = "Hello World!";
let sub = str.substr(2, 6);
console.log(sub); // "llo Wo"
```

#### substring
The substring() method returns a subset of a string between a start and end index
```javascript
let str = "Hello World!";
let sub = str.substring(2, 8);
console.log(sub); // "llo W
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### toLowerCase
The .toLowerCase() method returns the calling string value converted to lowercase.
```javascript
let str = "Hello, World!";
let newStr = str.toLowerCase();
console.log(newStr); // Output: "hello, world!"
```

#### toString
The .toString() method returns the value of a string object
```javascript
let str = new String("Hello World!");
console.log(str.toString());
```

#### toUpperCase
The .toUpperCase() method returns the calling string value converted to uppercase.
```javascript
let str = "Hello, World!";
let newStr = str.toUpperCase();
console.log(newStr); // Output: "HELLO, WORLD!"
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### trim
The .trim() method removes whitespace from the beginning and end of a string.
```javascript
let str = "    Hello, World!    ";
let newStr = str.trim();
console.log(newStr); // Output: "Hello, World!"
```

## Numbers

[Mozilla MDN Docs Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Number Methods


#### isFinite
Determines whether the passed value is a finite number, returns a Boolean.
```javascript
isFinite(Infinity)
```

#### isInteger
Determines whether the passed value is an integer, returns a Boolean.
```javascript
isInteger(3.14) // returns false
```

#### isNaN
Determines whether the passed value is NaN (Not a Number), returns a Boolean.
```javascript
isNaN(NaN) // returns true.
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### isSafeInteger
Determines whether the passed value is a safe integer, returns a Boolean. Safe integers are integers that can be exactly represented in JavaScript.
```javascript
isSafeInteger(9007199254740990) // returns false.
```

#### parseFloat
Parses a string argument and returns a floating-point 
```javascript
parseFloat("3.14") // returns 3.14.
```

#### parseInt
Parses a string argument and returns an integer.
```javascript
parseInt("11", 2) // returns 3.
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### toExponential
Returns a string representing the number in exponential notation. The fractionDigits parameter is optional and specifies the number of digits after the decimal point.
```javascript
(3.14).toExponential(1) // returns "3.1e+0".
```

#### toFixed
Returns a string representing the number with a specified number of decimal places. 
```javascript
(3.14159).toFixed(2) // returns "3.14".
```

#### toLocaleString
Returns a string representing the number using the current locale.
```javascript
(3.14).toLocaleString // might return "3,14" in some locales.
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### toPrecision
Returns a string representing the number with a specified number of significant digits.
```javascript
(3.14159).toPrecision(2) // returns "3.1".
```

#### toString
Returns a string representing the  The radix parameter is optional and specifies the base of the returned string.
```javascript
(11).toString(2) // returns "1011".
```

#### valueOf
Returns the primitive value of a Number object. 
```javascript
(new Number(3.14)).valueOf // returns 3.14.
```

[Back to Table of Contents](../README.md/#Table-of-Contents)
