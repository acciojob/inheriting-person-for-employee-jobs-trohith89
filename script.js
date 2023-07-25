// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Adding a method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Creating an instance of Employee
const emp = new Employee("Alice", 30, "Software Engineer");

// Calling the methods
emp.greet();      // Output: Hello, my name is Alice, I am 30 years old.
emp.jobGreet();  

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
