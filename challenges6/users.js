// challenge 19 :  Use Module with export and import to Split Code 
export const users = [
  { username: "mohammed", password: "1234" },
  { username: "ali",       password: "pass" },
  { username: "waleed",    password: "abc"  }
];

export function findUser(username) {
  return users.find(u => u.username === username) ?? null;
}
