 // 1
function printSum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log(sum);
}
console.log(printSum([1,2,3,4,5]));
 
 // 2
function findLargest(arr) {
  let largest = arr[0];
  arr.forEach((num) => {
    if (num > largest) {
      largest = num;
    }
  });
  return largest;
}
console.log(findLargest([1,5,2,7,8,3]));

 // 3
function printNames(arr) {
  arr.forEach((obj) => {
    console.log(obj.name);
  });
}
console.log(printNames([{name: "John", age: 20}, {name: "Mike", age: 15}, {name: "Sarah", age: 25}]));
 
 // 4
function multiplyByTwo(arr) {
  let newArr = [];
  arr.forEach((num) => {
    newArr.push(num * 2);
  });
  return newArr;
}
console.log(multiplyByTwo([1,2,3,4,5]));
 
 // 5
function toUpperCase(arr) {
  let newArr = [];
  arr.forEach((str) => {
    newArr.push(str.toUpperCase());
  });
  return newArr;
}
console.log(toUpperCase(["apple", "banana", "cherry"]));
 
 // 6
function sumEvens(arr) {
  let sum = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      sum += num;
    }
  });
  return sum;
}
console.log(sumEvens([1,2,3,4,5]));
 
 // 7
function findProduct(arr) {
  let product = 1;
  arr.forEach((num) => {
    product *= num;
  });
  return product;
}
console.log(findProduct([1,2,3,4,5]));
 
 // 8
function squareNumbers(arr) {
  let newArr = [];
  arr.forEach((num) => {
    newArr.push(num * num);
  });
  return newArr;
}
console.log(squareNumbers([1,2,3,4,5]));
 
 // 9
function reverseStrings(arr) {
  let newArr = [];
  arr.forEach((str) => {
    newArr.push(str.split('').reverse().join(''));
  });
  return newArr;
}
console.log(reverseStrings(["apple", "banana", "cherry"]));
 
 // 10
 function getPropertyValues(arr, property) {
    const result = [];
    arr.forEach(obj => result.push(obj[property]));
    return result;
}

 // 11
 function findSmallestNumber(arr) {
    let smallest = arr[0];
    arr.forEach(num => {
        if (num < smallest) {
            smallest = num;
        }
    });
    return smallest;
}
 
 // 12
 function getStringLengths(arr) {
    const result = [];
    arr.forEach(str => result.push(str.length));
    return result;
}
 
 // 13
 function getNestedPropertyValues(arr, property1, property2) {
    const result = [];
    arr.forEach(obj => result.push(obj[property1][property2]));
    return result;
}

 // 14
 function findAverage(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum / arr.length;
}

 // 15
 function filterByPropertyValue(arr, property, value) {
    const result = [];
    arr.forEach(obj => {
        if (obj[property] === value) {
            result.push(obj);
        }
    });
    return result;
}
