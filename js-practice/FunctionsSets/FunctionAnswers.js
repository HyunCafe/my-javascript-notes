// 1
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('John'));


// 2
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));

// 3
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));

// 4
function findLargestNum(nums) {
    return Math.max(...nums);
}
console.log(findLargestNum([1, 3, 5, 7, 2, 4]));

// 5
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('hello'));

// 6
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

// 7
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    }
}
console.log(fizzBuzz(15));

// 8
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));

// 9
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
// 10
function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(getFactorial(5));

// 11
function generateRandomNumber(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}
console.log(generateRandomNumber(5, 15));

// 12
function getSumOfArray(nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log(getSumOfArray([1, 2, 3, 4, 5]));

// 13
function sortArray(nums) {
    return nums.sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 7, 2, 8, 1]));

// 14
function getFrequency(nums) {
    let frequency = {};
    for (let num of nums) {
        frequency[num] = frequency[num] + 1 || 1;
    }
    return frequency;
}
console.log(getFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

// 15
function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));