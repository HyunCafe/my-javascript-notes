## Arrays 

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Arrays Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Array Methods

#### array is array
Check to see if the array is an array
```javascript
// Check if a variable is an array
function processArray(input) {
  if (!Array.isArray(input)) {
    console.log("Input is not an array, please provide an array.");
    return;
  }
  console.log("Input is an array, processing data...");
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}

// Test the function with different types of input
let myArray = [1, 2, 3];
let notAnArray = "hello";
processArray(myArray); // prints "Input is an array, processing data..." and the elements of the array
processArray(notAnArray); // prints "Input is not an array, please provide an array."
```

#### concat
joins two or more arrays and returns a new array that contains all the elements from the original arrays.
```javascript
array1.concat(array2, array3, ...);

//Example:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```

#### every
tests whether all elements in an array satisfy a given condition, returning true if they do and false otherwise.
```javascript
array.every((element, index, array) => {
  // callback logic
}, thisArg);

//Example:
const numbers = [1, 2, 3, 4, 5];

// Check if all numbers are even
const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // false

// Check if all numbers are less than 10
const allLessThanTen = numbers.every(number => number < 10);
console.log(allLessThanTen); // true

// Example 2: Check if all numbers are less than or equal to limit

function smallEnough(arr, limit) {
  return arr.every((val) => val <= limit);
}

```

#### fill
fills all the elements of an array from a start index to an end index with a static value.
```javascript
array.fill(value, start, end)

// Example:
let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array); // Output: [1, 2, 0, 0, 5]

// Example 2: Create an array with x amout of duplicate values
function createArrayWithDuplicateValue(n, val) {
  return new Array(n).fill(val);
}

// Usage example
let myArray = createArrayWithDuplicateValue(5, "hello");
console.log(myArray); // Output: ["hello", "hello", "hello", "hello", "hello"]

```


#### filter
creates a new array with all elements that pass the test implemented by the provided function.
```javascript
array.filter(callback(element, index, array), thisArg);

//Example:
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//Example 2: remove elements from array and create a new array from it
function removeFromArray(array, ...elemRemove) {
  return array.filter(filtered => {
    return !elemRemove.includes(filtered);
  });
}
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
```

#### flat 
creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
```javascript
array.flat(depth)

// Example:
let array = [1, 2, [3, 4], [5, [6, 7]]];
console.log(array.flat()); // Output: [1, 2, 3, 4, 5, [6, 7]]
console.log(array.flat(2)); // Output: [1, 2, 3, 4, 5, 6, 7]

// Example 2: flattening an array of arrays to a single level
let myArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = myArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
```

#### forEach
executes a provided function once for each array element.
```javascript
array.forEach(function(currentValue, index, array), thisArg);

//Example:
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(currentValue, index, array) {
  console.log(currentValue, index);
});

// Output:
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### includes
returns a boolean indicating whether an array includes a certain element.
```javascript
array.includes(searchElement, fromIndex);

//Example:
console.log(numbers.includes(5)); // Output: true
console.log(numbers.includes(15)); // Output: false

//Example:
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
```

#### indexOf
returns the first index at which a given element can be found in the array, or -1 if it is not present.
```javascript
array.indexOf(searchElement, fromIndex);

//Example:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.indexOf(5)); // Output: 4
console.log(numbers.indexOf(15)); // Output: -1
```

#### join
joins all elements of an array into a string.
```javascript
array.join(separator);

//Example:
let fruits = ['Apple', 'Banana', 'Mango'];
let fruitString = fruits.join(', ');
console.log(fruitString); // "Apple, Banana, Mango"
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### map
creates a new array with the results of calling a provided function on every element in the calling array.
```javascript
array.map(callback(currentValue, index, array), thisArg);
//array is the calling array.
//function is a callback function that is applied to each element in the array.
//currentValue is the current element being processed in the array.
//index (optional) is the index of the current element being processed in the array.
//arr (optional) is the array map() was called upon.
//thisValue (optional) is an object to use as this when executing the callback.

Example 1: Traditional map for
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16]

//Example 2: Map with arrow function
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16]


//Example :
let number = 10;
let numberArray = [...Array(number).keys()].map(i => i + 1);
console.log(numberArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Example 4: Change int to string, reverse, back to array, into int
function digitize(n) {
  return n.toString().split('').reverse().map(x => parseInt(x));
}
```

#### pop
removes the last element from an array and returns that element.
Modifies original array

```javascript
array.pop();

//Example:
console.log(array.pop()); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5]
```

#### push
adds one or more elements to the end of an array and returns the new length of the array.
Modifies original array

```javascript
array.push(element1, element2, ..., elementX);

//Example:
let array = [1, 2, 3];
console.log(array.push(4, 5, 6)); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

//Example 2:
function countBy(multiplyBy, num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
    result.push(multiplyBy * i);
    }
    return result;
}
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### reduce
applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value (Sum).
```javascript
const result = array.reduce((accumulator, currentValue, currentIndex, array) => {
   // logic to update accumulator based on currentValue and currentIndex 
   return accumulator;
}, initialValue);
console.log(result);


//Example:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

//Example 2:
const sumAll = function(startNum, endNum) {
    let numArray = [];
    for (let i = startNum; i <= endNum; i++) {
        numArray.push(i);
    }
    let sum = numArray.reduce((a, b) => a + b);
    return sum;
}

//Example 3: Find Oldest Age in Array
const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const currentAge = current.yearOfDeath
      ? current.yearOfDeath - current.yearOfBirth
      : 2023 - current.yearOfBirth;
    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : 2023 - oldest.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  });
};

```

#### reverse
reverses the order of the elements in an array
Modifies original array

```javascript
array.reverse();

//Example:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

//Example 2: create a new array that is reversed of the array
function reverseString(word) {
  let wordArray = [...word];
  wordArray.reverse();
  let reversedWord = wordArray.join('');
  return reversedWord;
}
console.log(reverseString('Hello, World!')); // Output: !dlroW ,olleH

```

#### shift
removes the first element from an array and returns that element.
Modifies original array

```javascript
array.shift();

//Example:
console.log(array.shift()); // Output: 1
console.log(array); // Output: [2, 3, 4, 5]
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### slice
Only takes out the indices you indicate as start and end values, and make a new array or string with selected elements.
```javascript
// first argument is the starting index, second argument is the ending index
array.slice(begin, end);

//Example:
let array = [1,2,3,4,5];
console.log(array.slice(1,3)); // Output: [2,3]
```

#### some
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
```javascript
const numbers = [1, 2, 3, 4, 5];

const isEven = number => number % 2 === 0;

const hasEvenNumber = numbers.some(isEven);

console.log(hasEvenNumber); // Output: true

```
#### sort
sorts the elements of an array in place and returns the sorted array.
Modifies original array

```javascript
array.sort(compareFunction);

//Example: sort numbers ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Example 2: sort numbers descending order
numbers.sort((a, b) => b - a);
console.log(numbers);

//Example 3: sort an array of objects by a specific key
let people = [
  { name: "John", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Mike", age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people); // [{name: "Bob", age: 25}, {name: "John", age: 30}, {name: "Mike", age: 35}]


console.log(people);
// output: [{ firstName: "Bob", lastName: "Johnson" },
//           { firstName: "John", lastName: "Doe" },
//           { firstName: "Jane", lastName: "Smith" },
//           { firstName: "Alice", lastName: "Williams" }]
```

#### splice
adds or removes elements from an array.
Modifies original array

```javascript
// first argument is the index where to start adding/removing elements
// second argument is the number of elements to remove
// third argument is the element(s) to add
array.splice(index, howMany, element1, element2, ...);

//Example:
let array = [1,2,3,4,5];
console.log(array.splice(2, 2, 6, 7)); // Output: [3, 4]
console.log(array); // Output: [1, 2, 6, 7, 5]
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### unshift
adds one or more elements to the beginning of an array and returns the new length of the array.
Modifies original array

```javascript
array.unshift(element1, element2, ..., elementX);

//Example:
console.log(array.unshift(-1, 0)); // Output: 6
console.log(array); // Output: [-1, 0, 2, 3, 4, 5]
```
