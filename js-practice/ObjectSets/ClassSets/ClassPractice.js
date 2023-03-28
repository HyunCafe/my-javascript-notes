// 1) Create a Person class with a name property and a greet() method that returns "Hello, [name]!" when called.

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

const person1 = new Person("Alice");
console.log(person1.greet());

// 2) Create a Book class with title and author properties, and a getTitle() method that returns the book's title.
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getTitle() {
    return this.title;
  }
}

// 3) Create a Vehicle class with make and model properties, and a start() method that logs "The [make] [model] is starting!" when called.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`The ${this.make} ${this.model} is starting!`);
  }
}

// 4) Create a Rectangle class with width and height properties, and a getArea() method that returns the area of the rectangle.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.height * this.width;
  }
}

// 5) Create a BankAccount class with balance and withdraw() methods. The withdraw() method should subtract the passed-in amount from the balance property.
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    withdrawal(amount) {
        this.balance -= amount;
    }
}

// 6) Create a Car class that extends the Vehicle class, and adds a drive() method that logs "The [make] [model] is driving!" when called.
class Vehicle {
    constructor(make, model){
        this.make;
        this.model
    }
}

class Car extends Vehicle{
    constructor(make, model) {
        super(make, model)
    }

    drive() {
        console.log(`The ${this.make} ${this.model} is driving!`)
    }
}


// 7) Create a Square class that extends the Rectangle class, and sets both the width and height properties to the same value when instantiated.
class Square extends Rectangle {
    constructor(sides) {
        super(sides, sides)
    }
}

// 8) Create a Person class with a name property and a sayHi() method that logs "Hi, my name is [name]" when called. Then, Create a Student class that extends the Person class, and adds a grade property and a showGrade() method that logs the student's grade. Instantiate a Student object and call its sayHi() and showGrade() methods.
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, my name is ${this.name}`)
    }
}


class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    showGrade() {
        console.log(`My Grade is ${this.grade}`) 
    }
}

const student1 = new Student('Vicky', 'A')
