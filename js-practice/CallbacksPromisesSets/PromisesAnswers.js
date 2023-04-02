// 1
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello, world!");
  });
  

// 2
const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    resolve(randomNumber);
  });
  

  // 3
  const promise3 = new Promise((resolve, reject) => {
    const num1 = 5;
    const num2 = 10;
    const result = num1 + num2;
    resolve(result);
  });
  

  
  // 4
  const promise4 = fetch('https://api.example.com/data')
  .then(response => response.json());

  
  // 5
  const asyncFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Async operation result");
      }, 2000);
    });
  };
  
  const promise5 = asyncFunction();
  
  
  // 6 
  const sumArray = (arr) => {
    return new Promise((resolve, reject) => {
      if (arr.length === 0) {
        reject("Array is empty");
      } else {
        const sum = arr.reduce((acc, curr) => acc + curr);
        resolve(sum);
      }
    });
  };
  
    
    // 7 
    const promise7 = Promise.all([
        fetch('https://api.example.com/data1').then(response => response.json()),
        fetch('https://api.example.com/data2').then(response => response.json())
      ])
      .then(data => {
        const result = {
          data1: data[0],
          data2: data[1]
        };
        return result;
      });
      

        
    // 8
    const replaceVowels = (str) => {
        return new Promise((resolve, reject) => {
          const regex = /[aeiou]/gi;
          const result = str.replace(regex, 'x');
          resolve(result);
        });
      };
      