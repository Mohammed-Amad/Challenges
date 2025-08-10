// challenge 19 :  Use Module with export and import to Split Code 
import { findUser } from "./users.js";

export function checkPassword(username, inputPassword) {
  const user = findUser(username);
  if (!user) {
    return false;
  }

  return user.password === inputPassword;
}