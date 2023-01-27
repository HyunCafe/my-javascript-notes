// 1) Create an array called numbers that contains the numbers 1 through 10.
const numbers = [1,2,3,4,5,6,7,8,9,10];

// 2) Using the push() method, add the number 11 to the end of the numbers array.
numbers.push(11);

// 3) Using the pop() method, remove the last element from the numbers array.
numbers.pop();

// 4) Using the unshift() method, add the number 0 to the beginning of the numbers array.
numbers.unshift(0);

// 5) Using the shift() method, remove the first element from the numbers array.
numbers.shift();

// 6) Using the splice() method, remove the element at index 5 of the numbers array.
numbers.splice(5, 1)

// 7) Using the splice() method, insert the number 5 at index 3 of the numbers array.
numbers.splice(3,0,5);

// 8) Using the slice() method, create a new array called subArray that contains the elements of the numbers array from index 3 to 5.
const subArray = numbers.slice(3,6);

// 9) Using the concat() method, join the numbers array with another array called extraNumbers that contains the numbers 12 through 15.
const extraNumbers = numbers.concat([12,13,14,15])

// 10) Using the join() method, convert the numbers array into a string with each element separated by a comma.
numbers.join(',');

// 11) Using the reverse() method, reverse the order of the elements in the numbers array.
numbers.reverse();

// 12) Using the sort() method, sort the elements in the numbers array in ascending order.
numbers.sort((a, b) => a - b);
console.log(numbers);

// 13) Using the map() method, create a new array called doubledNumbers that contains each element in the numbers array multiplied by 2.
const doubleNumbers = numbers.map(num => num * 2);

// 14) Using the filter() method, create a new array called evenNumbers that contains only the even elements of the numbers array.
const evenNumbers = numbers.filter(num => num % 2 ===0);

// 15) Using the reduce() method, find the sum of all the elements in the numbers array.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce(function(a, b) {
return a + b;
}, 0);
console.log(sum);