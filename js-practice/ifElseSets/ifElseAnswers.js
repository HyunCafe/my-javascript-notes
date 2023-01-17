// 1
console.log("Hello, World!");

// 2
let num1 = 5;
let num2 = 10;
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// 3
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 4
let name = "John";
console.log("Hello, " + name + "!");

// 5
let num1 = 5;
let num2 = 10;
let num3 = 8;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

// 6
let num = 5;
console.log(num * num);

// 7
let num1 = 10;
let num2 = 5;
console.log(num1 / num2);

// 8
let num = -3;
if (num >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// 9
let tempCelsius = 25;
let tempFahrenheit = (tempCelsius * 9/5) + 32;
console.log(tempFahrenheit);

// 10
let year = 2020;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}

// 11
let num = 9;
if (num % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
}

// 12
let sentence = "The quick brown fox";
let words = sentence.split(" ");
console.log(words.length);

// 13
let sentence = "The quick brown fox";
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i]) !== -1) {
        count++;
    }
}
console.log(count);

// 14
let sentence = "The quick brown fox";
let letter = "o";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
        count++;
        
// 15
        let sentence = "The quick brown fox";
        let words = sentence.split(" ");
        let longestWord = "";
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
        console.log(longestWord);
        