// 1
class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return `Hello, ${this.name}!`;
    }
  }
  
  const person1 = new Person("Alice");
  console.log(person1.greet()); // Output: Hello, Alice!

  
  //2 
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    getTitle() {
      return this.title;
    }
  }
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  console.log(book1.getTitle()); // Output: The Great Gatsby

  
  // 3
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
      console.log(`The ${this.make} ${this.model} is starting!`);
    }
  }
  
  const vehicle1 = new Vehicle("Toyota", "Camry");
  vehicle1.start(); // Output: The Toyota Camry is starting!

  

  // 4 
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }

  

  // 5
  class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    withdraw(amount) {
      this.balance -= amount;
    }
  }

  
  // 6
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model);
    }
  
    drive() {
      console.log(`The ${this.make} ${this.model} is driving!`);
    }
  }

  
  // 7
  class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    
    getArea() {
    return this.width * this.height;
    }
    }
    
    class Square extends Rectangle {
    constructor(length) {
    super(length, length);
    }
    }
    
    const square = new Square(5);
    console.log(square.getArea()); // Output: 25
    

    // 8 
    class Person {
        constructor(name) {
        this.name = name;
        }
        
        sayHi() {
        console.log(`Hi, my name is ${this.name}`);
        }
        }
        
        // Create a Student class that extends the Person class, and adds a grade property and a showGrade() method that logs the student's grade.
        class Student extends Person {
        constructor(name, grade) {
        super(name);
        this.grade = grade;
        }
        
        showGrade() {
        console.log(`My grade is ${this.grade}`);
        }
        }
        
        // Instantiate a Student object and call its sayHi() and showGrade() methods.
        const student = new Student('John', 'A');
        student.sayHi(); // Output: Hi, my name is John
        student.showGrade(); // Output: My grade is A