// this is the main file for the modules challenges 
// challenge 11 : Create and Import a Simple Module 
import add11 from "./math.js";

console.log("challenge 11");
console.log(add11(6, 9));   
console.log(add11(28, 7));

// challenge 12 :  Export and Import Multiple Functions
import { sum12, multiply12, divide12} from './utils.js';

console.log("challenge 12");
console.log(sum12(6, 9));         
console.log(multiply12(9, 3));    
console.log(divide12(15, 3));     

// challenge 13 :  Default Export in Modules 
import greet from './greet.js';

console.log("challenge 13");
console.log(greet("Mohammed"));
console.log(greet("Ali"));
// challenge 14 : Module with Object Export
import { book } from './book.js';

console.log("challenge 14");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Price: $${book.price}`);

// challenge 15 : Create a Module with a Constant
import { PI } from './constant15.js';

function calculateCircumference(radius) {
    return 2 * PI * radius;
}

console.log("challenge 15");
console.log(`Circumference with radius 5: ${calculateCircumference(5)}`);
console.log(`Circumference with radius 10: ${calculateCircumference(10)}`);

// challenge 16 : Dynamic Imports in JavaScript

const dynamicImport = document.getElementById("loadHelper");

dynamicImport.addEventListener("click", async () => {
  
  const { helperFunc } = await import('./helper.js');
  console.log("challenge 16");
  console.log(helperFunc("loaded on demand")); 
  });

// challenge 17 : Named Exports - Circle & Square (using imported PI)
import { Circle, Square } from './shapes.js';

console.log("challenge 17");
const c = new Circle(3);
const s = new Square(4);

console.log("Circle area:", c.area()); 
console.log("Square area:", s.area());   

// challenge 18 : Simple Calculator Module
import { add, subtract, multiply, divide } from './calculator.js';
console.log("challenge 18");
console.log(add(10, 5));        
console.log(subtract(10, 5));   
console.log(multiply(10, 5));  
console.log(divide(10, 5));    

// challenge 19 : Use Module with export and import to Split Code
import { checkPassword } from "./auth.js";

console.log("challenge 19");
console.log (checkPassword("mohammed", "1234")); 
console.log( checkPassword("ali", "klay")); 

// challenge 20 : Module to Export a Method Inside an Object
import methodObj from "./challenge20.js";

console.log("challenge 20");
console.log(methodObj.isDriving("Mohammed"));
console.log(methodObj.isWalking("Ali"));
console.log(methodObj.isWorking("Waleed"));

// challenge 21 : Using Module to Encapsulate Variables (no IIFE)
import createCounterModule from "./countermodule.js";

const counterModule = createCounterModule(); 

console.log("challenge 21");
console.log(counterModule.increment());
console.log(counterModule.increment()); 
console.log(counterModule.increment()); 



// Import from ES6 module
import { es6add, es6sub } from './es6.js';

console.log("challenge 22 - ES6 Modules");
console.log(" ES6 Add " , es6add(10, 5));  
console.log(" ES6 Sub ", es6sub(10, 5));  

// to check the commonjs result 
// just run  => node test-commonjs.js 

// challenge 23 : Re-exporting Modules
import {
  circleArea,
  circleCircumference,
  squareArea,
  squarePerimeter
} from './shapes23.js';

console.log("challenge 23");
console.log("Circle area ", circleArea(3));
console.log("Circle circumference ", circleCircumference(3));
console.log("Square area ", squareArea(4));
console.log("Square perimeter ", squarePerimeter(4));

// challenge 24 : Module with Lazy Loading (import() on click)
const lazyBtn = document.getElementById("loadLazy");

lazyBtn.addEventListener("click", async () => {
  const { greetLazy } = await import("./lazy24.js");
  console.log("challenge 24");
  console.log(greetLazy("Mohammed"));
});

// challenge 25 : Circular Dependencies in Modules
import { sumNumber1and2, incNumber1 } from "./number1.js";
import { sumNumber2and1, incNumber2 } from "./number2.js";

console.log("challenge 25");

console.log(sumNumber1and2()); 
console.log(sumNumber2and1()); 

incNumber1(); 
incNumber2(); 

console.log(sumNumber1and2());
console.log(sumNumber2and1());


// challenge 26 : Importing both named and default exports
import defaultAnimal, { dog, cat } from './animals26.js';

console.log("challenge 26");

console.log(dog("Buddy"));        
console.log(cat("citten"));     
console.log(defaultAnimal("lama")); 

// challenge 27 : Using a configuration module
import { url, timeout, retryCount } from "./config27.js";

console.log("challenge 27");
console.log("URL:", url);
console.log("Timeout(ms):", timeout);
console.log("Retry count:", retryCount);

async function fetchUsers() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.statusText}`);
    const data = await response.json();
    console.log("Fetched Users:", data);
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

fetchUsers();

// challenge 28 : Async Functions in Modules 
import { fetchUsers28 } from "./async28.js";
console.log("challenge 28");
fetchUsers28()
  .then(users => {
    console.log("Fetched Users:", users); 
  })
  .catch(err => console.error("Error:", err.message));


  // challenge 29: Named imports with aliases
import {
  add as sum29,
  subtract as difference,
  multiply as product,
  divide as quotient
} from "./math29.js";

console.log("challenge 29");
console.log( sum29(10, 3));
console.log( difference(10, 3));
console.log( product(10, 3));
console.log( quotient(10, 2));

// challenge 30: Module to handle user input
import { getInputValue } from "./input30.js";

document.querySelector("#myForm").addEventListener("submit", (e) => {
  e.preventDefault(); 
  const name = getInputValue("#name");
  const email = getInputValue("#email");
  console.log("Name:", name);
  console.log("Email:", email);
});