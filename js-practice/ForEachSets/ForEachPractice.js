// 1) Write a function that takes in an array and prints the sum of all elements to the console using forEach. (Use Arrow Functions Only)
function sumArray(array) {
  let sum = 0;
  array.forEach((element) => (sum += element));
  console.log(sum);
}

// 2) Write a function that takes in an array and finds the largest number using forEach. (Use Arrow Functions Only)
function largestNum(arr) {
  let largest = arr[0];
  arr.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });
  console.log(largest);
}

// 3) Write a function that takes in an array of objects and prints the name of each object to the console using forEach. (Use Arrow Functions Only)
function printArr(arr) {
  arr.forEach((element) => {
    console.log(element.name);
  });
}

// 4) Write a function that takes in an array of numbers and returns a new array with all the numbers multiplied by 2 using forEach. (Use Arrow Functions Only)
function multiArray(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * 2));
  console.log(newArr);
}

// 5) Write a function that takes in an array of strings and returns a new array with all the strings converted to uppercase using forEach. (Use Arrow Functions Only)
function upCase(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element.toUpperCase()));
  return newArr;
}

// 6) Write a function that takes in an array of numbers and returns the sum of all even numbers using forEach. (Use Arrow Functions Only)
function numArr(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      sum += element;
    }
  });
  return sum;
}

// 7) Write a function that takes in an array of numbers and returns the product of all numbers using forEach. (Use Arrow Functions Only)
function productArr(arr) {
  let product = 1;
  arr.forEach((element) => (product *= element));
}

// 8) Write a function that takes in an array of numbers and returns a new array with all the numbers squared using forEach. (Use Arrow Functions Only)
function arrSquared(arr) {
  let squaredArr = [];
  arr.forEach((element) => {
    squaredArr.push(element ** 2);
  });
  return squaredArr;
}

// 9) Write a function that takes in an array of strings and returns a new array with all the strings reversed using forEach. (Use Arrow Functions Only)
function arrString(arr) {
  let result = [];
  arr.forEach((element) => {
    result.push(element.split("").reverse().join(""));
  });
  return result;
}

// 10) Write a function that takes in an array of objects and returns a new array with the values of a specific property of each object using forEach. (Use Arrow Functions Only)
const newArry = (arr, prop) => {
  let result = [];
  arr.forEach((element) => {
    result.push(element[prop]);
  });
  return result;
};

// 11) Write a function that takes in an array of numbers and returns the smallest number using forEach. (Use Arrow Functions Only)
const findSmallestNumber = (arr) => {
  let smallestNum = arr[0];
  arr.forEach((num) => {
    if (num < smallestNum) smallestNum = num;
  });
  return smallestNum;
};

// 12) Write a function that takes in an array of strings and returns a new array with the length of each string using forEach. (Use Arrow Functions Only)
const stringLength = (arr) => {
  let result = [];
  arr.forEach((element) => {
    result.push(element.length);
  });
  return result;
};

// 13) Write a function that takes in an array of objects and returns a new array with the values of a specific nested property of each object using forEach. (Use Arrow Functions Only)
const arryObj = (arr, value) => {
  let newarr = [];
  arr.forEach((element) => {
    newarr.push(element[value]);
  });
  return newarr;
};

// 14) Write a function that takes in an array of numbers and returns the average of all numbers using forEach. (Use Arrow Functions Only)
const arrNum = (num) => {
  let average = 0;
  num.forEach((element) => {
    average *= element;
  });
  return average / num.length;
};

// 15) Write a function that takes in an array of objects and returns a new array with only the objects that have a specific property value using forEach. (Use Arrow Functions Only)
function filterByPropertyValue(arr, property, value) {
  const result = [];
  arr.forEach((obj) => {
    if (obj[property] === value) {
      result.push(obj);
    }
  });
  return result;
}
