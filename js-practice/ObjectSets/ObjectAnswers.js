// 1. function that returns an array of keys
function objectKeys(obj) {
  return Object.keys(obj);
}

// 2. function that returns an array of values
function objectValues(obj) {
  return Object.values(obj);
}

// 3. function that returns true if objects share a key-value pair
function sharedKeyValuePair(obj1, obj2) {
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
      return true;
    }
  }
  return false;
}

// 4. function that returns a new object with keys in camelCase
function camelCaseKeys(obj) {
  let newObj = {};
  for (let key in obj) {
    let camelCaseKey = key.replace(/([A-Z])/g, function ($1) {
      return "-" + $1.toLowerCase();
    });
    newObj[camelCaseKey] = obj[key];
  }
  return newObj;
}

// 5. function that returns a new object with doubled values
function doubleValues(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] * 2;
  }
  return newObj;
}

// 6. function that returns the sum of values
function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

// 7. function that returns a new object with reversed keys
function reverseKeys(obj) {
  let newObj = {};
  for (let key in obj) {
    let reversedKey = key.split("").reverse().join("");
    newObj[reversedKey] = obj[key];
  }
  return newObj;
}

// 8. function that returns a new object with values as arrays
function valuesAsArrays(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = [obj[key]];
  }
  return newObj;
}

// 9. function that returns a new object with key-value pairs from both objects
function mergeObjects(obj1, obj2) {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}

// 10. function that returns a new object with sorted key-value pairs by ascending key
function sortByAscendingKey(obj) {
  let newObj = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

// 11. function that returns a new object with sorted key-value pairs by descending value
function sortByDescendingValue(obj) {
  let newObj = {};
  let keys = Object.keys(obj);
  keys.sort(function (a, b) {
    return obj[b] - obj[a];
  });
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

// 12. function that returns the number of key-value pairs in the object
function countKeyValuePairs(obj) {
  return Object.keys(obj).length;
}

// 13. function that returns the largest value in the object
function largestValue(obj) {
  return Math.max(...Object.values(obj));
}

// 14. function that returns the average of all the values in the object
function averageValues(obj) {
  let sum = 0;
  let count = 0;
  for (let key in obj) {
    sum += obj[key];
    count++;
  }
  return sum / count;
}

// 15. function that returns a new object with reversed keys and doubled values
function reverseKeysDoubleValues(obj) {
  let newObj = {};
  for (let key in obj) {
    let reversedKey = key.split("").reverse().join("");
    newObj[reversedKey] = obj[key] * 2;
  }
  return newObj;
}
