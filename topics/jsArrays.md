## Arrays 

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Arrays Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Array Methods

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

//Example: Extract a property from an array
const extractProperty = function(arr, prop) {
    return arr.map(arr => arr[prop]);
};
// Detail Explination
//The function uses the Array.prototype.map() method to create a new array 
//by applying a callback function to each element of the input array arr.

//The callback function uses the arrow function syntax, and takes a single parameter 
//arr which represents each object in the array. Inside the callback 
//function, the arr[prop] notation is used to access the value of the property 
//of the object using the prop as a key. This returns the value of the //property for each object.

//Finally, the map() method collects all the returned values from the 
//callback function, and creates a new array with these values. This new 
//array is //then returned by the extractProperty() function using the return statement.

//Example 2:
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//Example 3:
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
```javascript
array.pop();

//Example:
console.log(array.pop()); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5]
```

#### push
adds one or more elements to the end of an array and returns the new length of the array.

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
const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        return currentAge > oldestAge ? person : oldest;
    });
};
```

#### reverse
reverses the order of the elements in an array
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

#### sort
sorts the elements of an array in place and returns the sorted array.
```javascript
array.sort(compareFunction);

//Example:
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Example 2:
let numbers = [3, -5, 1, -2, 8, -4];
numbers.sort(function(a, b) {
    return a - b; // output: [-5, -4, -2, 1, 3, 8]
});

//Example 3:
let people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Bob", lastName: "Johnson" },
    { firstName: "Alice", lastName: "Williams" }
];

people.sort(function(a, b) {
    let lastNameA = a.lastName.toLowerCase();
    let lastNameB = b.lastName.toLowerCase();
    if (lastNameA < lastNameB) {
        return -1; // declaring the order of the elements returned
    }
    if (lastNameA > lastNameB) {
        return 1; // declaring the order of the elements returned
    }
    return 0;
});

console.log(people);
// output: [{ firstName: "Bob", lastName: "Johnson" },
//           { firstName: "John", lastName: "Doe" },
//           { firstName: "Jane", lastName: "Smith" },
//           { firstName: "Alice", lastName: "Williams" }]
```

#### splice
adds or removes elements from an array.
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
```javascript
array.unshift(element1, element2, ..., elementX);

//Example:
console.log(array.unshift(-1, 0)); // Output: 6
console.log(array); // Output: [-1, 0, 2, 3, 4, 5]
```
