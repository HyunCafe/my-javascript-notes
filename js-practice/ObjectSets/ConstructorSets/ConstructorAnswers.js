// 1
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    return "Hello, " + this.name;
  };
  
  const person1 = new Person("John");
  console.log(person1.greet()); // "Hello, John"
  
// 2
function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  Book.prototype.getTitle = function() {
    return this.title;
  };
  
  const book1 = new Book("The Catcher in the Rye", "J.D. Salinger");
  console.log(book1.getTitle()); // "The Catcher in the Rye"
  
// 3
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Vehicle.prototype.start = function() {
    console.log("The " + this.make + " " + this.model + " has started.");
  };
  
  const vehicle1 = new Vehicle("Toyota", "Camry");
  vehicle1.start(); // "The Toyota Camry has started."
  
// 4
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  
  Rectangle.prototype.getArea = function() {
    return this.width * this.height;
  };
  
  const rectangle1 = new Rectangle(4, 5);
  console.log(rectangle1.getArea()); // 20

  
// 5
function BankAccount(balance) {
    this.balance = balance;
  }
  
  BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
  };
  
  const account = new BankAccount(500);
  account.withdraw(100);
  console.log(account.balance); // 400
  
// 6
function Car(make, model) {
    Vehicle.call(this, make, model);
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.drive = function() {
    console.log("The " + this.make + " " + this.model + " is driving!");
  };
  
  const car1 = new Car("Honda", "Civic");
  car1.drive(); // "The Honda Civic is driving!"

  
// 7
function Square(sideLength) {
    Rectangle.call(this, sideLength, sideLength);
  }
  
  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;
  
  const square1 = new Square(5);
  console.log(square1.getArea()); // 25
  
// 8

// Person constructor function
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHi = function() {
    console.log("Hi, my name is " + this.name);
  };
  
  // Student constructor function
  function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
  }
  
  // Inherit from Person
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  // Add showGrade method
  Student.prototype.showGrade = function() {
    console.log("My grade is " + this.grade);
  };
  
  // Instantiate a Student object
  var student1 = new Student("John", 85);
  
  // Call sayHi() and showGrade() methods
  student1.sayHi(); //
  