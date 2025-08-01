// 1. Parse JSON String into Object
 const json_variable = '{"username":"Mohammed" , "age":"21"}'
  const jsonToObject = JSON.parse(json_variable);
  let {username,age} = jsonToObject;
  console.log(` my name is ${username} and im ${age} years old `) 


// 2. Stringify JavaScript Object into JSON
const objectToJson = JSON.stringify(jsonToObject);
console.log(objectToJson);


// 3. Display User Data Using JSON
const userJson3 = '{"name": "ali", "age": 29, "email": "ali@example.com"}';
const user = JSON.parse(userJson3);
console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);


// 4. Parse JSON and Modify Data
let productJson4 = '{"name4": "Laptop", "price4": 6000}';
let product = JSON.parse(productJson4);
product.price4 = 1200; 
console.log(`Updated Product: Name : ${product.name4} , Price : ${product.price4}`);


// 5. Convert JavaScript Array to JSON
const users5 = [
  { username5: "Mohammed", age5: 21 },
  { username5: "Ali", age5: 20 }
];
function convertArrayToJSON(anyarray) {
  return JSON.stringify(anyarray);
}
const jsonFromArray = convertArrayToJSON(users5);
console.log(jsonFromArray);


// 6. JSON Validation
function isValidJSON6(anystring) {
  try {
    JSON.parse(anystring);
    return true;
  } catch (error) {
    return false;
  }
}


const validJSON6 = '{"name":"Mohammed","age":21}';
const invalidJSON6 = '{name:"Ali",age:21}';

console.log(isValidJSON6(validJSON6));   
console.log(isValidJSON6(invalidJSON6));


// 7. Handle API Response with JSON
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(`the first user name data: ${data[0].name}`);
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });


  // 8. Using XMLHttpRequest for JSON API
  const myrequest8 = new XMLHttpRequest();
  myrequest8.open("GET" , "https://jsonplaceholder.typicode.com/users")
  myrequest8.onload = function () {
  if (myrequest8.status === 200) {
    const users8 = JSON.parse(myrequest8.responseText);
    console.log(users8);
  } else {
    console.log("Failed to fetch user data");
  }
};
myrequest8.send();


// 9. Create JSON Object from Form Data
document.getElementById("userForm").addEventListener("submit", function (element) {
  element.preventDefault();

  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('input[name="message"]').value.trim();

  const jsonObject = {
    name: name,
    email: email,
    message: message
  };

  console.log(JSON.stringify(jsonObject));
});


 // 10. Fetch JSON Data and display in HTML 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        const userslist10 = document.getElementById("userslist10");
        for (let i = 0; i < users.length; i++) {
          const user = users[i];

          const ul = document.createElement("ul");

          const li1 = document.createElement("li");
          li1.textContent = `Name: ${user.name}`;

          const li2 = document.createElement("li");
          li2.textContent = `Email: ${user.email}`;

          const li3 = document.createElement("li");
          li3.textContent = `Company: ${user.company.name}`;

          ul.appendChild(li1);
          ul.appendChild(li2);
          ul.appendChild(li3);

          userslist10.appendChild(ul);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("userslist10").innerText = "Failed to load users.";
      });


 // 11. Display Multiple User Data from API

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const tbody = document.querySelector("#usersTable11 tbody");
    users.forEach(user => {
      const row11 = document.createElement("tr");

      const userName11 = document.createElement("td");
      userName11.textContent = user.name;

      const userEmail11 = document.createElement("td");
      userEmail11.textContent = user.email;

      row11.appendChild(userName11);
      row11.appendChild(userEmail11);
      tbody.appendChild(row11);
    });
  })
  .catch(error => {
    console.error("Error loading users:", error);
  });



// 12. AJAX Request to Send JSON Data
document.getElementById("form12").addEventListener("submit", function (e) {
  e.preventDefault();

  const name12 = document.querySelector('input[name="name12"]').value.trim();
  const email12 = document.querySelector('input[name="email12"]').value.trim();
  const message12 = document.querySelector('input[name="message12"]').value.trim();

  const jsonData12 = {
    name: name12,
    email: email12,
    message: message12
  };

  const myrequest12 = new XMLHttpRequest();
  myrequest12.open("POST", "https://jsonplaceholder.typicode.com/posts");

  myrequest12.setRequestHeader("Content-Type", "application/json");

  myrequest12.onload = function () {
    if (myrequest12.status === 201) {
      console.log("Data sent successfully:");
      console.log(JSON.parse(myrequest12.responseText));
    } else {
      console.error("Error sending data");
    }
  };

  myrequest12.send(JSON.stringify(jsonData12));
});


// 13. Handling Asynchronous Data with Promises
function asynchronousPromis() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true; 
      if (isSuccess) {
        const data = {
          username: "Mohammed",
          age: 21,
          message: "This is a fake example of an async response in challenge 13."
        };
        resolve(data);
      } else {
        reject("Failed to fetch data in challenge 13."); 
      }
    }, 6000);
  });
}

asynchronousPromis()
  .then(result => {
    console.log("Data received after delay:");
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  });


// 14. Async-Await with Fetch API

async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`${response.status} : ${response.statusText}`);
    }

    const data = await response.json();

    console.log("User data loaded using async/await:");
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
fetchUserData();

// 15. Convert Nested Object to JSON
const userData15 = {
  name: "Mohammed",
  age: 21,
  address: {
    city: "Nablus",
    country: "Palestine"
  },
  contact: {
    email: "m@example.com",
    phone: "123456789"
  }
};
userDataInJson15 = JSON.stringify(userData15)
console.log(` this is challenge 15 ${userDataInJson15}`)

// 16. Send JSON Data via Fetch POST Request

document.getElementById("form16").addEventListener("submit", function (e) {
  e.preventDefault();

  const name16 = document.querySelector('input[name="name16"]').value.trim();
  const email16 = document.querySelector('input[name="email16"]').value.trim();
  const message16 = document.querySelector('input[name="message16"]').value.trim();

  const formData16 = {
    name: name16,
    email: email16,
    message: message16
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData16)
  })
    .then(res => res.json())
    .then(data => {
      console.log("data Sent by fetch ");
      console.log(data);
    })
    .catch(error => {
      console.error("Error sending data:", error);
    });
});

// 17. Use Fetch API with Query Parameters

const userId = 3;

const url = `https://jsonplaceholder.typicode.com/users?id=${userId}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}:${response.statusText} `);
    }
    return response.json();
  })
  .then(data => {
    console.log("User fetched with query parameter in challenge 17 :");
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching user:", error);
  });



// 18. Use XMLHttpRequest to Get JSON Data
const myrequest18 = new XMLHttpRequest();


myrequest18.open("GET", "https://jsonplaceholder.typicode.com/users");


myrequest18.onload = function () {
  if (myrequest18.status === 200) {

    const users = JSON.parse(myrequest18.responseText);
    console.log("Users fetched  in challenge 18 :");
    console.log(users); 
  } else {
    console.error("Failed to fetch users. Status:", myrequest18.status);
  }
};


myrequest18.send();

// 19. Asynchronous Data Fetching with Callback 
function getUsersData19(callback19) {
  const myRequest19 = new XMLHttpRequest();
  myRequest19.open("GET", "https://jsonplaceholder.typicode.com/users");

  myRequest19.onload = function () {
    if (myRequest19.status === 200) {
      const users19 = JSON.parse(myRequest19.responseText);
      callback19(null, users19);
    } else {
      callback19(`${myRequest19.status} - ${myRequest19.statusText}`, null);
    }
  };
  myRequest19.send();
}


getUsersData19(function (errorMsg, users19) {
  if (errorMsg) {
    console.error("error", errorMsg);
  } else {
    console.log("Users in challenge 19 ");
    console.log(users19);
  }
});
// 20. Error Handling with Fetch and JSON

const url20 = "https://jsonplaceholder.typicode.com/userss"; 

fetch(url20)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch users in challeneg 20 `);
    }
    return response.json();
  })
  .then(data20 => {
    console.log("Data fetched successfully in challenge 20 ");
    console.log(data20);
  })
  .catch(error => {
    console.error("Failed to fetch data:");
    console.error(error.message);
  });

