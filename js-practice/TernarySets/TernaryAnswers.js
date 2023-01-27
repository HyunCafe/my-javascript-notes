// 1
function isPositive(num) {
  return num > 0 ? "positive" : "not positive";
}
console.log(isPositive(5)); // "positive"
console.log(isPositive(-5)); // "not positive"
 
 // 2
function checkAge(age) {
  return age >= 21 ? "can drink" : "cannot drink";
}
console.log(checkAge(25)); // "can drink"
console.log(checkAge(20)); // "cannot drink"
 
 // 3
function getGrade(score) {
  return (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";
}
console.log(getGrade(92)); // "A"
console.log(getGrade(75)); // "C"
 
 // 4
function oddOrEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven(5)); // "odd"
console.log(oddOrEven(4)); // "even"
 
 // 5
function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "leap year" : "not a leap year";
}
console.log(checkLeapYear(2000)); // "leap year"
console.log(checkLeapYear(1900)); // "not a leap year"
 
 // 6
function assignRole(isAdmin) {
  return isAdmin ? "admin" : "user";
}
console.log(assignRole(true)); // "admin"
console.log(assignRole(false)); // "user"
 
 // 7
function convertTemp(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(convertTemp(0)); // 32
console.log(convertTemp(20)); // 68
 
 // 8
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(5)); // "positive"
console.log(checkSign(-5)); // "negative"
console.log(checkSign(0)); // "zero"
 
 // 9
function checkDiscount(price, hasMembership) {
  return hasMembership ? price * 0.9 : price;
}
console.log(checkDiscount(100, true)); // 90
console.log(checkDiscount(100, false)); // 100
 
 // 10
function checkAge(age) {
    return age >= 21 ? "Can Drink" : "Cannot Drink";
  }
  console.log(checkAge(20)); // "Cannot Drink"
  console.log(checkAge(21)); // "Can Drink"
   
 // 11
function checkSign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(5)); // "Positive"
console.log(checkSign(-3)); // "Negative"
console.log(checkSign(0)); // "Zero"
 
 // 12
function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(getMax(5, 10)); // 10
console.log(getMax(15, 5)); // 15
console.log(getMax(10, 10)); // 10
 
 // 13
function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(4)); // "Even"
console.log(evenOrOdd(7)); // "Odd"
 
 // 14
function gradeCalculator(score) {
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
}
console.log(gradeCalculator(92)); // "A"
console.log(gradeCalculator(70)); // "C"
console.log(gradeCalculator(50)); // "F"
 
 // 15
function checkProperty(obj, prop) {
  return obj.hasOwnProperty(prop) ? `The object has a "${prop}" property` : `The object does not have a "${prop}" property`;
}
const obj1 = { name: "John", age: 25 };
const obj2 = { name: "Mary", location: "New York" };
console.log(checkProperty(obj1, "name")); // "The object has a "name" property"
console.log(checkProperty(obj1, "location")); // "The object does not have a "location" property"
console.log(checkProperty(obj2, "location")); // "The object has a "location" property"