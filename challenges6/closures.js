// this is the main file for the closure challenges 
// challenge 1 : Closure Example with Counter
console.log("challenge 1")
function createCounter(){
let counter = 0
return function increaseCounter (){
    counter++;
    console.log(counter)
}
}
let counter = createCounter()
counter()
counter()
counter()
counter()
counter()
counter()

// challenge 2 : Simple Closure with Private Variable
console.log("challenge 2")
function createPrivateVariable() {
    let privateVar = 0; 

    return function updateVariable(newValue) {
        privateVar = newValue;
        console.log(privateVar);
    };
}

let privVar = createPrivateVariable();
privVar(9); 
privVar(6);
privVar(30);

// challenge 3 : Use Closure to Create a Function That Adds a Number
console.log("challenge 3")
function createAdder(num){
    return function innerAdder(value){
        return num +value
        
    }
}

let adder = createAdder(9);
console.log(adder(6))
console.log(adder(21))

// challenge 4 : Callback with Closure


function delayedGreeting(message, delay) {
    return function innerdelayedGreeting() {
        setTimeout(() => {
            console.log("challenge 4");
            console.log(message);
        }, delay);
    };
    }
    const greetingdelayeds = delayedGreeting ("hello , how are you ",3000)
    greetingdelayeds()

    // challenge 5 : Function with Closure Storing Values
console.log("challenge 5");

function createListValues() {
    let values = [];

    return function addValuesToList(newValue) {
        values.push(newValue);
        return values; 
    };
}

const addListValue = createListValues();
console.log(addListValue("Mohammed"));    
console.log(addListValue("Ali"));   
console.log(addListValue("Waleed"));
// challenge 6 : Using Closure for Memoization 
console.log("challenge 6");

function createFibonacci() {
    const memo = { 0: 0, 1: 1 }; 

    return function fib(n) {
        if (n < 0 || !Number.isInteger(n)) throw new Error(" the entered number must be a non-negative integer");
        if (memo[n] !== undefined) return memo[n]
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    };
}

const fib = createFibonacci();
console.log(fib(0)); 
console.log(fib(1));  
console.log(fib(6)); 
console.log(fib(10));
console.log(fib(40));


// challenge 7 : Create a Closure for User Authentication
console.log("challenge 7");

function authenticate(password) {

    return function check(input) {
        return input === password; 
    };
}

const isCorrect = authenticate("P@ssw0rd!2...");
console.log(isCorrect("hi123"));       
console.log(isCorrect("P@ssw0rd!2...")); 

// challenge 8 : Closure for Setting Multiple Properties
console.log("challenge 8");

function createPerson(name8, age8) {
    let name = name8;
    let age  = age8 ;

    return {
        getName() { return name; },
        getAge()  { return age;  },
        setName(newName) { name = newName; return name; },
        setAge(newAge) {
            if (!Number.isInteger(newAge) || newAge < 0) throw new Error("age must be a non-negative integer");
            age = newAge;
            return age;
        }
    };
}

const person = createPerson("Mohammed", 21);
console.log(person.getName(), person.getAge());
person.setName("Ali");
person.setAge(22);
console.log(person.getName(), person.getAge());

// challenge 9 : Closure for Counting Function Calls
console.log("challenge 9");

function callCounter() {
    let counter = 0; 

    return function () {
        counter++;
        return counter; 
    };
}

const countCalls = callCounter();
console.log(countCalls());
console.log(countCalls());
console.log(countCalls());

// challenge 10 : Closure for Event Handlers


function buttonClickHandler() {
    let clicks = 0; 
    return function () {
        clicks++;
        console.log("challenge 10");
        console.log(`Button clicked ${clicks} times`);
    };
}


const btn = document.getElementById("myButton");
const handleClick = buttonClickHandler();
btn.addEventListener("click", handleClick);


