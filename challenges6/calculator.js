// challenge 18 : Simple Calculator Module
export function add(num1, num2) {
  return num1 + num2;
}
export function subtract(num1, num2) {
  return num1 - num2;
}
export function multiply(num1, num2) {
  return num1 * num2;
}
export function divide(num1, num2) {
  if (num2 === 0) throw new Error("Cannot divide by zero");
  return num1 / num2;
}