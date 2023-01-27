// 1
function printNumbers(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

 // 2
function factorial(n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}
 
 // 3
function printCharacters(str) {
  let i = 0;
  while (i < str.length) {
    console.log(str[i]);
    i++;
  }
}
 
 // 4
function printArrayInReverse(arr) {
  let i = arr.length - 1;
  while (i >= 0) {
    console.log(arr[i]);
    i--;
  }
}

 // 5
function printFibonacci(n) {
  let a = 0, b = 1;
  let i = 1;
  while (i <= n) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
    i++;
  }
}
 
 // 6
function reverseArray(arr) {
  let result = [];
  let i = arr.length - 1;
  while (i >= 0) {
    result.push(arr[i]);
    i--;
  }
  return result;
}

 // 7
function sumOfEvenNumbers(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
}

 // 8
function sumToN(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}
 
 // 9
function productToN(n) {
  let product = 1;
  let i = 1;
  while (i <= n) {
    product *= i;
    i++;
  }
  return product;
}

 // 10
function nthFibonacci(n) {
  let a = 0, b = 1;
  let i = 2;
  while (i < n) {
    let c = a + b;
    a = b;
    b = c;
    i++;
  }
  return n === 1 ? a : b;
}
 
 // 11
function largestDigit(n) {
  let largest = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit > largest) {
      largest = digit;
    }
    n = Math.floor(n / 10);
  }
  return largest;
}
 
 // 12
function findLargestDigit(num) {
  let largest = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit > largest) {
      largest = digit;
    }
    num = Math.floor(num / 10);
  }
  return largest;
}
 
 // 13
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
 
 // 14
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
 
 // 15
function countElement(arr, element) {
  let count = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === element) {
      count++;
    }
    i++;
  }
  return count;
}