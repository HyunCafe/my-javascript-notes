// 1) Write a function that takes in an array of numbers and returns the sum of all numbers.
function arrNum(num) {
  return arrNum.reduce((a, b) => a + b);
}

// 2) Write a function that takes in an array of strings and returns the concatenation of all strings.
function arrStr(str) {
  return str.reduce((a, b) => a + b);
}

// 3) Write a function that takes in an array of objects and returns an object containing the count of each property.
function arrySom(arr) {
  return arr.reduce((a, b) => {


  });
}

// 4) Write a function that takes in an array of numbers and returns the product of all numbers.
function prodArr(arr) {
  return arr.reduce((a, b) => a *= b)
}

// 5) Write a function that takes in an array of objects and returns an object containing the sum of each property.

function sumProperties(arr) {
  return arr.reduce((acc, curr) => {
    for (const key in curr) {
      if (curr.hasOwnProperty(key)) {
        acc[key] = (acc[key] || 0) + curr[key];
      }
    }
    return acc;
  }, {});
}


 // 6) Write a function that takes in an array of numbers and returns the maximum number.

 // 7) Write a function that takes in an array of numbers and returns the minimum number.

 // 8) Write a function that takes in an array of numbers and returns the average of all numbers.

 // 9) Write a function that takes in an array of strings and returns the longest string.

 // 10) Write a function that takes in an array of strings and returns the shortest string.



 // 11) Write a function that takes in an array of objects and returns an array of values of a specific property.

 // 12) Write a function that takes in an array of objects and returns an object containing the unique values of a specific property.

 // 13) Write a function that takes in an array of numbers and returns an array of all prime numbers.

 // 14) Write a function that takes in an array of numbers and returns an object containing the frequency of each number.

 // 15) Write a function that takes in an array of objects and returns an object containing the sum of a specific property for each unique value of another property.