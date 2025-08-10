// challenge 30: Module to handle user input
export function getInputValue(selector) {
  const el = document.querySelector(selector);
  return el ? el.value.trim() : "";
}