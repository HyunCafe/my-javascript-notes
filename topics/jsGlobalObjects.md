## Global Objects

[Global Objects MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

### Global Object Methods

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### Date
The Date object is used to work with dates and times in JavaScript. It allows you to create, format, and manipulate dates and times.
```javascript
const today = new Date();
console.log(today); // Mon Feb 13 2023 22:19:07 GMT+0530 (India Standard Time)

//Example:
const birthdate = new Date('June 25, 1998');
console.log(birthdate.toDateString()); // Mon Jun 25 1998
```

#### Error
The Error object is a built-in object in JavaScript that represents an error. 
It is thrown when a runtime error occurs and can be caught using a try...catch statement.
```javascript
try {
  // Code that might throw an error
} catch (error) {
  console.error(error);
}

//Example:
try {
  throw new Error('An error occurred');
} catch (error) {
  console.error(error); // Error: An error occurred
}
```

#### JSON
The JSON object is a built-in object in JavaScript that allows you to parse and stringify JSON data. 
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy 
for machines to parse and generate.
```javascript
const data = { name: 'John Doe' };
const json = JSON.stringify(data);
console.log(json); // {"name":"John Doe"}

const parsedData = JSON.parse(json);
console.log(parsedData); // { name: 'John Doe' }

//Example:
const response = '{"name":"John Doe","age":30}';
const user = JSON.parse(response);
console.log(user.name); // John Doe
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Set
The Set object is a built-in object in JavaScript that allows you to store unique values. 
It is similar to an array but does not allow duplicate values.
```javascript
function removeDuplicates(str) {
  const words = str.split(' ');
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(' ');
}

// Example usage
const result = removeDuplicates('this is a test test string');
console.log(result); // 'this is a test string'

//Example 2
const items = new Set();
items.add(1);
items.add(2);
items.add(3);
console.log(items.size); // 3
console.log(items.has(2)); // true

//Example:
const names = new Set(['John', 'Jane', 'Jim']);
console.log(names.size); // 3
names.delete('Jane');
console.log(names.size); // 2
```

#### String
The String() global object in JavaScript is used to convert a value to a string. It can be used to convert any data type into a string, including numbers, booleans, objects, and arrays.
```javascript
const num = 42;
const strNum = String(num);
console.log(typeof strNum); // "string"
```

#### Symbol
The Symbol object is a built-in object in JavaScript that allows you to create unique and immutable symbols. 
They are used as property keys and can be used to create private properties.
```javascript
const symbol = Symbol();
console.log(typeof symbol); // symbol

//Example:
const age = Symbol();
const user = { name: 'John Doe' };
user[age] = 30;
console.log(user[age]); // 30
```

#### Map
The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
```javascript
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // Output: value1

//Example:
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // Output: John
console.log(map.get('age')); // Output: 30
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### WeakMap
The WeakMap object is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values. 
The keys are held weakly, which means that they do not prevent garbage collection in case there is no other reference to the object.
```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // Output: value

//Example:
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, {name: 'John'});
console.log(weakMap.get(obj)); // Output: {name: 'John'}
```

#### WeakSet
The WeakSet object is a collection of objects (it does not accept any primitive value types). The objects in the WeakSet are held weakly, 
which means they do not prevent garbage collection in case there is no other reference to the object.
```javascript
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true

//Example:
const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true
```

#### Promise
The Promise object is used for asynchronous computations. 
A Promise represents a value that may not be available yet, but will be at some point in the future.
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

promise.then((value) => {
  console.log(value); // Output: Success
});

//Example:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data Loaded');
  }, 2000);
});

promise.then((value) => {
  console.log(value); // Output: Data Loaded
});
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

#### parseInt
parseInt() is a built-in function in JavaScript that parses a string argument 
and returns an integer of the specified radix (the base in mathematical numeral systems).
```javascript
const integer = parseInt(string, radix);

//Example:
const age = parseInt("27", 10);
console.log(age); // 27

const hex = parseInt("FF", 16);
console.log(hex); // 255
````

#### parseFloat
parseFloat() is a built-in function in JavaScript that parses a string argument and returns a floating-point number.
```javascript
const float = parseFloat(string);

//Example:
const height = parseFloat("6.2");
console.log(height); // 6.2

const weight = parseFloat("180.5 lbs");
console.log(weight); // 180.5
```
