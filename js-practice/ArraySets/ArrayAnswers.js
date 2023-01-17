// 1 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2
numbers.push(11);
console.log(numbers);

// 3
numbers.pop();
console.log(numbers);

// 4
numbers.unshift(0);
console.log(numbers);

// 5
numbers.shift();
console.log(numbers);

// 6
numbers.splice(5, 1);
console.log(numbers);

// 7
numbers.splice(3, 0, 5);
console.log(numbers);

// 8
let subArray = numbers.slice(3, 6);
console.log(subArray);

// 9
let extraNumbers = [12, 13, 14, 15];
let newArray = numbers.concat(extraNumbers);
console.log(newArray);

// 10
let stringArray = numbers.join();
console.log(stringArray);

// 11
numbers.reverse();
console.log(numbers);

// 12
numbers.sort();
console.log(numbers);

// 13
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// 14
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 15
let sum = numbers.reduce((acc, num) => acc + num);
console.log(sum);