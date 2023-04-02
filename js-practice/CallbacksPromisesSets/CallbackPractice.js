// 1) Write a function getSquare that takes in a number and a callback function. 
// The function should square the number and pass the result to the callback function.

const getSquare = (number, callback) => {
    const result = number * number;
    callback(result)
}

// 2) Write a function getPower that takes in two numbers, a base and an exponent, 
// and a callback function. The function should raise the base to the power of the exponent and pass the result to the callback function.\
const getPower = (base, exponent, callback) => {
    const result = base ** exponent;
    callback(result)
}

// 3) Write a function getLength that takes in an array and a callback function. 
// The function should find the length of the array and pass the result to the callback function.
const getLength = (array, callback) => {
    const result = array.length;
    callback(result);
  }
  

// 4) Write a function getSum that takes in an array of numbers and a callback function. 
// The function should find the sum of the numbers in the array and pass the result to the callback function.
const getSum = (array, callback) => {
    const result = array.reduce((a, b) => a + b);
    callback(result)
}

// 5) Write a function getMax that takes in an array of numbers and a callback function. 
// The function should find the maximum value in the array and pass the result to the callback function.
const getMax = (array, callback) => {
    const result = Math.max(...array);
    callback(result);
}

// 6) Write a function filterArray that takes in an array and a callback function. 
// The function should filter the array based on the criteria defined by the callback function and pass the filtered array to the callback function.
const filterArray = (array, callback) => {
    const result = array.filter(callback);
    callback(result)
}

// 7) Write a function reduceArray that takes in an array and a callback function. 
// The function should reduce the array to a single value based on the criteria defined by the callback function and pass the reduced value to the callback function.
const reduceArray = (arr, callback) => {
    const result = arr.reduce(callback, 0);
    callback(result);
}


// 8) Write a function getWeather that takes in a location (e.g. city, state) and a callback function. 
// The function should make a request to a weather API and pass the current weather data for the location to the callback function. 
// The callback function should then display the weather information to the user.

const getWeather = (location, callback) => {

}