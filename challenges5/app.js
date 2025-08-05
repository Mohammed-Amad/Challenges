// challenge 1 : Replace var with let and const  

// const name = "Alice"; 
// const age = 25; 
// const isStudent = true;

// let name = "Alice"; 
// let age = 25; 
// let isStudent = true;
// console.log(name)
// console.log(age)
// console.log(isStudent)

// challenge 2 : Arrow Function to Calculate Sum 

const Sum = (a,b)=> a+b;
console.log(Sum(6,9));

// challenge 3 : Use Arrow Function for String Concatenation

const concatenate = (str1, str2) => str1 + str2;
console.log(concatenate("Hello", "hi"));

// challenge 4 : Convert Callback to Arrow Function 

const greet = name => console.log("Hello, " + name);
greet("Mohammed"); 

// challenge 5 : Use let and const in Loops 

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// // challenge 6 : Create a Simple Class with Constructor 
// class Person {
//   constructor(name, age) {
//     this.name = name 
//     this.age = age
//     console.log(`My name is : ${name}, and im : ${age} years old `);
//   }
// }
// const mo = new Person("Mohammed",21);

// challenge 7 : Inheritance in JavaScript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Honk!");
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.drive();
myCar.honk()

// challenge 8 : Destructuring Assignment for Arrays 
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first);  
console.log(second); 

// challenge 9 : Destructuring Assignment for Objects 
const person = { name: "John", age: 30, city: "New York" };

const {name, age } = person;
console.log(name)
console.log(age)
// challenge 10 : Template Literals for Dynamic Strings 
const Template = (name, age) => `My name is ${name} and I am ${age} years old.`;
console.log(Template("Lina", 22));