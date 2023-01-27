 // 1
function sumNumbers(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
 
 // 2
function concatenateStrings(arr) {
  return arr.reduce((acc, str) => acc + str, "");
}
 
 // 3
function countProperties(arr) {
  return arr.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = (acc[key] || 0) + 1;
    });
    return acc;
  }, {});
}
 
 // 4
function productNumbers(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
}
 
 // 5
function sumProperties(arr) {
  return arr.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = (acc[key] || 0) + obj[key];
    });
    return acc;
  }, {});
}
 
 // 6
function findMax(arr) {
  return arr.reduce((acc, num) => Math.max(acc, num), -Infinity);
}
 
 // 7
function findMin(arr) {
  return arr.reduce((acc, num) => Math.min(acc, num), Infinity);
}
 
 // 8
function findAvg(arr) {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}
 
 // 9
function findLongestString(arr) {
  return arr.reduce((acc, str) => (acc.length > str.length ? acc : str));
}
 
 // 10
function findShortestString(arr) {
  return arr.reduce((acc, str) => (acc.length < str.length ? acc : str));
}
 
 // 11
function extractPropertyValues(arr, prop) {
  return arr.reduce((acc, obj) => {
    if (obj.hasOwnProperty(prop)) {
      acc.push(obj[prop]);
    }
    return acc;
  }, []);
}
 
 // 12
function extractUniquePropertyValues(arr, prop) {
  return arr.reduce((acc, obj) => {
    if (obj.hasOwnProperty(prop)) {
      acc[obj[prop]] = true;
    }
    return acc;
  }, {});
}
 
 // 13
function findPrimeNumbers(arr) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
 
 // 14
function removeDuplicates(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
console.log(removeDuplicates([1,2,3,4,5,5,5,6,7,7,7,8,8,8,9,9,9]));
php

 // 15
function namesOver18(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.age > 18) {
      acc.push(curr.name);
    }
    return acc;
  }, []);
}
console.log(namesOver18([{name: "John", age: 20}, {name: "Mike", age: 15}, {name: "Sarah", age: 25}]));