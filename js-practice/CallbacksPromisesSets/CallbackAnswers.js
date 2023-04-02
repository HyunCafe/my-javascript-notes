// 1
function getSquare(num, callback) {
    const result = num * num;
    callback(result);
  }
  
  // example usage:
  getSquare(5, (result) => {
    console.log(result);
  });
  
// 2
function getPower(base, exponent, callback) {
    const result = Math.pow(base, exponent);
    callback(result);
  }
  
  // example usage:
  getPower(2, 3, (result) => {
    console.log(result);
  });
  
// 3
function getLength(arr, callback) {
    const result = arr.length;
    callback(result);
  }
  
  // example usage:
  getLength([1, 2, 3], (result) => {
    console.log(result);
  });
  
// 4
function getSum(arr, callback) {
    const result = arr.reduce((acc, curr) => acc + curr);
    callback(result);
  }
  
  // example usage:
  getSum([1, 2, 3], (result) => {
    console.log(result);
  });
  
// 5
function getMax(arr, callback) {
    const result = Math.max(...arr);
    callback(result);
  }
  
  // example usage:
  getMax([1, 2, 3], (result) => {
    console.log(result);
  });
  
// 6
function filterArray(arr, callback) {
    const result = arr.filter(callback);
    callback(result);
  }
  
  // example usage:
  filterArray([1, 2, 3], (num) => num > 1, (result) => {
    console.log(result);
  });
  
// 7
function reduceArray(arr, callback, initialValue) {
    const result = arr.reduce(callback, initialValue);
    callback(result);
  }
  
  // example usage:
  reduceArray([1, 2, 3], (acc, curr) => acc + curr, 0, (result) => {
    console.log(result);
  });
  
//  8
function getWeather(location, callback) {
    const apiKey = 'your-api-key-here';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherData = {
          description: data.weather[0].description,
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity
        };
        callback(weatherData);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // example usage:
  getWeather('New York', (weatherData) => {
    console.log(weatherData);
  });
  