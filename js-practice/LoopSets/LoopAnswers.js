// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
let num = 5;
for (let i = 1; i <= num; i++) {
    console.log(i);
}

// 3
let num = 10;
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4
let num = 10;
for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 5
let num = 5;
let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
}
console.log(sum);

// 6
let num = 5;
let product = 1;
for (let i = 1; i <= num; i++) {
    product *= i;
}
console.log(product);

// 7
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 8
let num = 10;
let a = 0, b = 1, c;
console.log(a);
console.log(b);
for (let i = 2; i < num; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}

// 9
let str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 10
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 11
let arr = ['dog', 'cat', 'bat', 'ant'];
arr.sort();
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 12
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// 13
let str = "Hello";
let vowels = "aeiouAEIOU";
let newStr = "";
for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
        newStr += "*";
    } else {
        newStr += str[i];
    }
}
console.log(newStr);

// 14
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

// 15
let arr = [{name: "John", age: 15}, {name: "Mike", age: 25}, {name: "Sara", age: 30}];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
        console.log(arr[i].name);
    }
}
