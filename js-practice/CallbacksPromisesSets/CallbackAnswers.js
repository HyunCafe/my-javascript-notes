// 1
function greet(name, callback) { return callback(`Hello, ${name}`); }

// 2
function getTitle(book, callback) { return callback(book.title); }

// 3
function start(vehicle, callback) { return callback(`The ${vehicle.make} ${vehicle.model} has started.`); }

// 4
function getArea(rectangle, callback) { return callback(rectangle.width * rectangle.height); }

// 5
function withdrawFromAccount(amount, account, successCallback, errorCallback) { if (account.balance >= amount) { account.balance -= amount; return successCallback(account.balance); } else { return errorCallback('Insufficient funds'); } }

// 6
function Car(make, model) { Vehicle.call(this, make, model); } Car.prototype = Object.create(Vehicle.prototype); Car.prototype.drive = function() { console.log(The ${this.make} ${this.model} is driving!); };

// 7
function Square(sideLength) { Rectangle.call(this, sideLength, sideLength); } Square.prototype = Object.create(Rectangle.prototype);

//  8
function Person(name) { this.name = name; } Person.prototype.sayHi = function() { console.log(`Hi, my name is ${this.name}`);
};

function Student(name, grade) {
Person.call(this, name);
this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.showGrade = function() {
console.log(`My grade is ${this.grade}`);
};

const student1 = new Student('Alice', 'A');
student1.sayHi(); // Hi, my name is Alice
student1.showGrade(); // My grade is A`