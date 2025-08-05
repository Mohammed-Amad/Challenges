// challenge 1 : Create a Promise  
const ch1 = new Promise (resolve =>{
    setTimeout (()=>{
            resolve(" challenge 1 Success")
    },2000)
})

ch1.then((message)=> console.log(message))

// challenge 2 : Handle Promise Rejection
const ch2 = new Promise((_,reject) => {
  setTimeout(() => reject("Something went wrong in challenge"), 1000);
});

ch2.catch((error) => console.error(error));

// challenge 3 : Chain Multiple Promises
const p1 = Promise.resolve("challenge 3 First Promise");
const p2 = Promise.resolve("challenge 3 Second Promise");

p1.then((res1) => {
  console.log(res1);
  return p2;
}).then((res2) => {
  console.log(res2);
}); 
// challenge 4 : Promise with finally() 
const ch4= new Promise (resolve=>{ resolve(" challenge 4 Done")
})
  ch4
  .then((res) => console.log(res))
  .finally(() => console.log("challenge 4 Promise end"));
// challenge 5 : Promise.all() to Fetch Multiple APIs 
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts"
];

Promise.all(
  urls.map((url) => fetch(url).then((res) => res.json()))
)
  .then((data) => {
    console.log(" this is challenge 5 ")
    console.log("Users:", data[0]);
    console.log("Posts:", data[1]);
  })
  .catch((error) => {
    console.error("Error fetching one or more APIs in challenge 5 :", error);
  });
// challenge 6: Basic Async/Await Example
async function fetchUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  console.log(" challenge 6 User Data:", userData);
}

fetchUserData();
// Challenge 7: Async Function with Error Handling

async function getData() {
  try {
    const response = await fetch("https://jsonplacwwwwwwwwwwwweholder.typicode.com/users");
    const data = await response.json();
    console.log(" challenge 7 Data:", data);
  } catch (error) {
    console.error("Fetch failed in challenge 7 ");
  }
}

getData();

// Challenge 8: Convert Callback-based Function to Async/Await


function loadData(callback) {
  setTimeout(() => {
    callback("Callback: Data loaded fom challenge 8");
  }, 2000);
}


function loadDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async/Await: Data loaded from challenge 8 ");
    }, 2000);
  });
}


async function test() {
  const result1 = await loadDataAsync();
  console.log(result1);

 loadData((res)=>{
    console.log(res)
 })
}
test()

// challenge 9 : Parallel Async Calls with Promise.all() and await 

async function fetchParallelData() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    ]);

    console.log("Users in challenge 9 :", users);
    console.log("Posts in challenge 9 :", posts);
  } catch (error) {
    console.error("Error fetching data in challenge 9:", error);
  }
}

fetchParallelData();
// Challenge 10: Async/Await with Error Handling 
async function fetchingApis() {
  try {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await userResponse.json();

    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await postResponse.json();

    console.log("Users in challenge 10 :", user);
    console.log("Posts in challenge 10 :", post);
  } catch (error) {
    console.error("Error occurred while fetching data in challenge 10:", error);
  }
}

fetchingApis();

// Challenge 11: Callback Example

function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Callback Example" };
    console.log("Data fetched in challenge 11 .");
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const processed = { ...data, processed: true };
    console.log("Data processed in challenge 11 .");
    callback(processed);
  }, 1000);
}


fetchData(function (Data) {
  processData(Data, function (Result) {
    console.log("Final result in challenge 11 : ", Result);
  });
});

// challenge 13 : Callback Hell 

function callBackHell1(callback) {
  setTimeout(() => {
    console.log("callback 1 complete");
    callback();
  }, 1000);
}

function callBackHell2(callback) {
  setTimeout(() => {
    console.log("callback 2 complete");
    callback();
  }, 1000);
}

function callBackHell3(callback) {
  setTimeout(() => {
    console.log("callback 3 complete");
    callback();
  }, 1000);
}

callBackHell1(() => {
  callBackHell2(() => {
    callBackHell3(() => {
      console.log("All tasks done in callback hell in challenge 13");
    });
  });
});

function ch13Promise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("ch13Promise 1 complete");
      resolve();
    }, 1000);
  });
}

function ch13Promise2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("ch13Promise 2 complete");
      resolve();
    }, 1000);
  });
}

function ch13Promise3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("ch13Promise 3 complete");
      resolve();
    }, 1000);
  });
}


ch13Promise1()
  .then(() => ch13Promise2())
  .then(() => ch13Promise3())
  .then(() => console.log("All tasks done using Promises in challenge 13"));
  // challenge 14 : 
  function delayedOperation(callback) {
  console.log("Starting delayed operation in challenge 14");
  setTimeout(() => {
    callback("delayed operation in challenge 14 ");
  }, 2000);
}


delayedOperation(function (message) {
  console.log("Callback message in challenge 14:", message);
});

// challenge 15 : Handle Multiple Callbacks 

function runSequentialCallbacks(...callbacks) {
  callbacks.forEach((cb, index) => {
      console.log(`Running callback ${index + 1}:`);
      cb();
  });
}


function first() {
  console.log(" First callback executed in challenge 15 ");
}

function second() {
  console.log(" Second callback executed in challenge 15 ");
}

function third() {
  console.log(" Third callback executed in challenge 15 ");
}


runSequentialCallbacks(first, second, third);

// Challenge 16: Create a Class and Object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Mohammed", 21);

console.log("Name:", person1.name);
console.log("Age:", person1.age);

// Challenge 17: Class with Methods

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Car started");
  }
}


const myCar = new Car("Toyota", "Corolla");


console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
myCar.start();

// Challenge 18: Inheritance in OOP


class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}


class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}


const myDog = new Dog();


myDog.speak(); 

// Challenge 19: Encapsulation Example

class BankAccount {

  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  }


  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(200);
account.withdraw(50);
console.log("Current Balance:", account.getBalance());
// Challenge 20: Abstraction in OOP


class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented in subclass");
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


const myCircle = new Circle(5);
const myRect = new Rectangle(4, 6);

console.log("Circle Area:", myCircle.area());
console.log("Rectangle Area:", myRect.area());
