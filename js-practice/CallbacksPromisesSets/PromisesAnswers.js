// 1
const myPromise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  
  myPromise.then((result) => {
    console.log(result); // logs "Success!"
  });

// 2
const myPromise = new Promise((resolve, reject) => {
    reject("Error!");
  });
  
  myPromise.catch((error) => {
    console.log(error); // logs "Error!"
  });

  // 3
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 2000);
  });
  
  myPromise.then((result) => {
    console.log(result); // logs "Success!" after 2 seconds
  });

  
  // 4
  const fetchUserData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        return data.name;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  fetchUserData().then((name) => {
    console.log(name); // logs the name of the user
  });

  
  // 5
  const fetchUserData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return data.name;
    } catch (error) {
      console.log(error);
    }
  };
  
  fetchUserData().then((name) => {
    console.log(name); // logs the name of the user
  });

  
  // 6 
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 2000);
  });
  
  const handleError = (error) => {
    console.log(error);
  };
  
  myPromise
    .then((result) => {
      console.log(result);
      return "Another promise";
    })
    .then((result) => {
      console.log(result);
      throw "Error!";
    })
    .catch(handleError);

    
    // 7 
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Success!");
        }, 2000);
      });
      
      const handleError = (error) => {
        console.log(error);
      };
      
      myPromise
        .then((result) => {
          console.log(result);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve("Another promise");
            }, 2000);
          });
        })
        .then((result) => {
          console.log(result);
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject("Error!");
            }, 2000);
          });
        })
        .catch(handleError);

        
    // 8
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Success!");
        }, 2000);
      });
      
      const handleError = (error) => {
        console.log(error);
      };
      
      const handleFinally = () => {
        console.log("Promise has resolved or rejected");
      };
      
      myPromise
        .then((result) => {
          console.log(result);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve("Another promise");
            }, 2000);
          });
        })
        .then((result) => {
          console.log(result);
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject("Error!");
            }, 2000);
          });
        })
        .catch(handleError)
       
      