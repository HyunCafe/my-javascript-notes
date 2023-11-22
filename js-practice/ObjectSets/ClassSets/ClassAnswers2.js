// 1) Basic Class Creation:
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }
  
// 2) Inheritance:
class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age);
      this.jobTitle = jobTitle;
    }
  
    work() {
      return `${this.name} is working as a ${this.jobTitle}`;
    }
  }

// 3) Getters and Setters:
class Person {
    constructor(name, age) {
      this.name = name;
      this._age = age;
    }
  
    get age() {
      return this._age;
    }
  
    set age(newAge) {
      if (newAge > 0) {
        this._age = newAge;
      } else {
        throw new Error("Age must be a positive number");
      }
    }
  }
  
// 4) Static Methods:
class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      return a / b;
    }
  }
  
// 5) Encapsulation with Private Fields:
class Person {
    #name;
    #age;
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    getName() {
      return this.#name;
    }
  
    setName(newName) {
      this.#name = newName;
    }
  
    getAge() {
      return this.#age;
    }
  
    setAge(newAge) {
      this.#age = newAge;
    }
  }
  
// 6) Composition Over Inheritance:
class Writer {
    write() {
      return 'Writing a book';
    }
  }
  
  class Reader {
    read() {
      return 'Reading a book';
    }
  }
  
  class BookClubMember {
    constructor() {
      this.writer = new Writer();
      this.reader = new Reader();
    }
  
    participate() {
      return `${this.writer.write()} and ${this.reader.read()}`;
    }
  }
  
// 7) Polymorphism:
class Shape {
    area() {
      throw new Error("This method must be overridden");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  // More shape classes like Triangle, etc., can be added similarly.
  
