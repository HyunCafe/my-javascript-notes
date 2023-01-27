//  1) Write a program that prints "Hello, World!" to the console.
console.log('Hello, World!');

// 2) Write a function that takes in two numbers and prints the larger one to the console.
function biggerNumber (num1, num2) {
if(num1 > num2) {
    console.log(num1);
} else if(num1 < num2) {
    console.log(num2);
} else {
console.log('They are Equal');
}
}
console.log(biggerNumber(4,2));

// 3) Write a function that takes in a number and prints whether it is odd or even to the console.
function isEven (num1) {
    if (num1 % 2 === 0) {
        console.log('Is Even');
    } else {
        console.log('Is Odd');
    }
}
console.log(isEven(1));

// 4) Write a function that takes in a name and prints "Hello, [name]!" to the console.
function printName() {
    let userAnswer = prompt('What is your name?');
    return userAnswer;
}
printName()

// 5) Write a function that takes in three numbers and prints the largest one to the console.
function threeNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if(num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if(num3 > num1 && num3 > num1){
        console.log(num3);
    } else {
        console.log('They are even')
    }
}
threeNumbers(4,2,2);

// 6) Write a function that takes in a number and prints its square to the console.
function squareRoot(num1) {
    let squared = Math.sqrt(num1);
    console.log(squared);
}
squareRoot(4);

// 7) Write a function that takes in two numbers and prints the result of their division to the console.
function divideAnswer (num1, num2) {
    let divide = (num1 / num2) else 
    console.log(divide);
}
divideAnswer(4,2)

// 8) Write a function that takes in a number and prints whether it is positive or negative to the console.
function isPositive(num1) {
    if (num1 > 0) {
    console.log('is positive');
} else if (num1 < 0) {
    console.log('is negative');
} else {
    console.log('is zero');
}}program
isPositive(2);

// 9) Write a function that takes in a temperature in Celsius and converts it to Fahrenheit and prints the result to the console.
function tempConvertor(temp) {
    let convert = (temp * 1.8 + 32)
    console.log(convert);
}
tempConvertor(42);

// 10) Write a function that takes in a year and prints whether it is a leap year or not to the console.
function isLeapYear(year) {
     if(year % 100 === 0 && year % 400 === 0) {
    console.log('is a leap year'); 
    } else if(year % 4 === 0 && year % 100 !== 0) {
        console.log('is a leap year');
    } else {
        console.log('is not a leap year');
    }
 }
isLeapYear(2004);

// 11) Write a function that takes in a number and prints whether it is divisible by 3 or not to the console.
function isDivisible(num1) {
    if (num1 % 3 === 0) {
        console.log('is divisible by 3');
    } else {
        console.log('is not');
    }
}
isDivisible(3);

// 12) Write a function that takes in a sentence and prints the number of characters in it to the console
function splitWords(words) {
    let splitWord = words.split("");
    console.log(words.length)
}
splitWords('this is a sentence');

// 13) Write a function that takes in a sentence and prints the number of vowels in it to the console.
function vowelOut(word) {
    word = word.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    const wordSplit = word.split('');
    const filtered = wordSplit.filter(char => vowels.includes(char));
    if (wordSplit.includes(vowels)) {
        console.log(filtered);
    }
}
vowelOut('this is too hard')

// 14) Write a function that takes in a sentence and prints the number of times a specific letter appears in it to the console.


// 15) Write a function that takes in a sentence and prints the longest word in it to the console.