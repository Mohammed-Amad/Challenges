// challenge 25 : Circular Dependencies in Modules
import { getNumber1 } from "./number1.js";

let number2 = 2; 

export function getNumber2() {
  return number2;
}

export function incNumber2() {
  number2++;
  return number2;
}

export function sumNumber2and1() {
  return getNumber2() + getNumber1();
}
