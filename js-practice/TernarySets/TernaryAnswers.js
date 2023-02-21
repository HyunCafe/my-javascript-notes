// 1) 
function isEven(num) { return num % 2 === 0 ? "even" : "odd"; }

// 2) 
function isLong(str) { return str.length > 10 ? "long" : "short"; }

// 3) 
function numGreater(num) { return num > 0 ? "positive" : num === 0 ? "zero" : "negative"; }

// 4) 
function firstLetter(str) { return /[aeiou]/i.test(str.charAt(0)) ? str.charAt(0).toUpperCase() : str.charAt(0).toLowerCase(); }

// 5) 
function largerNum(num1, num2) { return num1 > num2 ? num1 : num2; }

// 6) 
function isEmpty(arr) { return arr.length === 0 ? "empty" : "not empty"; }

// 7) 
function hasProperty(obj, property) { return obj.hasOwnProperty(property) ? "has property" : "does not have property"; }

// 8) 
function numberGrade(num) { return num >= 90 ? "high" : num >= 50 ? "medium" : "low"; }

// 9) 
function smallestNum(arr) { return arr.reduce((a, b) => a < b ? a : b); }

// 10) 
function getValues(arr, prop) { return arr.map(obj => obj[prop] ? obj[prop] : "missing property"); }

// 11) 
function getLengths(arr) { return arr.map(str => str.length); }

// 12) 
function getNestedValues(arr, prop) { return arr.map(obj => obj[prop] ? obj[prop] : "missing property"); }

// 13) 
function getAverage(arr) { return arr.reduce((a, b) => a + b) / arr.length; }

// 14) 
function getObjectsWithPropertyValue(arr, prop, value) { return arr.filter(obj => obj[prop] === value); }

// )15
function getAbsoluteValue(num) { return num >= 0 ? num : -num; }