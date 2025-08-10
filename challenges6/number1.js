// challenge 25 : Circular Dependencies in Modules
import { getNumber2 } from "./number2.js";

let number1 = 1; 

export function getNumber1() {
  return number1;
}

export function incNumber1() {
  number1++;
  return number1;
}

export function sumNumber1and2() {
  
  return getNumber1() + getNumber2();
}
