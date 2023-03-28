// 1
function createPerson(name) {
  return {
    name: name,
    greet: function () {
      return "Hello, " + this.name;
    },
  };
}

const person = createPerson("John");
console.log(person.greet()); // Output: "Hello, John"

// 2
function createBook(title, author) {
  return {
    title: title,
    author: author,
    getTitle: function () {
      return this.title;
    },
  };
}

const book = createBook("The Catcher in the Rye", "J.D. Salinger");
console.log(book.getTitle()); // Output: "The Catcher in the Rye"

// 3
function createVehicle(make, model) {
  return {
    make: make,
    model: model,
    start: function () {
      console.log("The " + this.make + " " + this.model + " has started.");
    },
  };
}

const vehicle = createVehicle("Toyota", "Corolla");
vehicle.start(); // Output: "The Toyota Corolla has started."

// 4
function createRectangle(width, height) {
  return {
    width: width,
    height: height,
    getArea: function () {
      return this.width * this.height;
    },
  };
}

const rectangle = createRectangle(5, 3);
console.log(rectangle.getArea()); // Output: 15

// 5
function createBankAccount(balance) {
  return {
    balance: balance,
    withdraw: function (amount) {
      this.balance -= amount;
    },
  };
}

const bankAccount = createBankAccount(1000);
bankAccount.withdraw(250);
console.log(bankAccount.balance); // Output: 750

// 6
function createCar(make, model) {
  const vehicle = createVehicle(make, model);
  return {
    ...vehicle,
    drive: function () {
      console.log("The " + this.make + " " + this.model + " is driving!");
    },
  };
}

const car = createCar("Tesla", "Model S");
car.drive(); // Output: "The Tesla Model S is driving!"

// 7
function createRectangle(width, height) {
  return {
    width: width,
    height: height,
    getArea: function () {
      return this.width * this.height;
    },
  };
}

function createSquare(side) {
  const rectangle = createRectangle(side, side);
  return rectangle;
}

const square = createSquare(5);
console.log(square.getArea()); // Output: 25

// 8
function createPerson(name) {
  return {
    name: name,
    sayHi: function () {
      console.log("Hi, my name is " + this.name);
    },
  };
}

function createStudent(name, grade) {
  const person = createPerson(name);
  return Object.assign(person, {
    grade: grade,
    showGrade: function () {
      console.log("My grade is " + this.grade);
    },
  });
}

const student1 = createStudent("John", 85);

student1.sayHi(); // Output: "Hi, my name is John"
student1.showGrade(); // Output: "My grade is 85"
