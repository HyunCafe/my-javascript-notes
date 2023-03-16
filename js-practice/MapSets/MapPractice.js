 // 1) Write a function that takes in an array of numbers and returns a new array with the numbers squared using the map method.
function takeArr(arr) {
    arr.map((a) => a * a )
}

 // 2) Write a function that takes in an array of strings and returns a new array with the length of each string using the map method.
 function stringArr(arr) {
    return arr.map ((a) => a.length)
 }

 // 3) Write a function that takes in an array of objects and returns a new array with a specific property of each object using the map method.
 function arrObj(arr) {
    return arr.map((a) => a.property)
 }

 // 4) Write a function that takes in an array of numbers and returns a new array with the numbers incremented by 1 using the map method.
 function numArr(arr) {
    return arr.map((a) => a+1)
 }

 // 5) Write a function that takes in an array of strings and returns a new array with all the strings in uppercase using the map method.
 function strArr(arr) {
    return arr.map((a) => a.toUpperCase())
 }

 // 6) Write a function that takes in an array of objects and returns a new array with a new property added to each object using the map method.
 function addPropertyToObjects(objects, prop, value) {
    return objects.map(obj => {
        obj[prop] = value;
        return obj;
    });
}
 
 // 7) Write a function that takes in an array of numbers and returns a new array with only the even numbers using the map method and filter method.
 function numArr(arr) {
    return arr.filter((a) => (a % 2 === 0)).map((a) => a)
 }

 // 8) Write a function that takes in an array of strings and returns a new array with only the strings that contain a specific substring using the map method and filter method.
 function strArr(strings, substring) {
    return arr.filter((a) => a.includes(substring)).map( s=> s)
 }

 function filterStrings(strings, substring) {
    return strings.filter(s => s.includes(substring)).map(s => s);
}
 

 // 9) Write a function that takes in an array of objects and returns a new array with only the objects that have a specific property value using the map method and filter method.
 function objArr (obj, prop, val) {
    return obj.filter((a) => a[prop] === value).map(a => a)
 }
 
 // 10) Write a function that takes in an array of numbers and returns an object with the number as the key and the number of occurrences in the array as the value using the map method.
 function numArr(arr) {
    return arr.map((a) => a[prop] === value)
 }

 // 11) Write a function that takes in an array of strings and returns an object with the first letter of each string as the key and an array of strings as the value using the map method.
 

 // 12) Write a function that takes in an array of objects and returns an object with a specific property as the key and the corresponding objects as the value using the map method.

 // 13) Write a function that takes in an array of numbers and returns an array of the numbers in binary format using the map method.

 // 14) Write a function that takes in an array of strings and returns an array of objects with properties "string" and "length" using the map method.

 // 15) Write a function that takes in an array of objects and returns an array of objects sorted by a specific property using the map method and sort method.