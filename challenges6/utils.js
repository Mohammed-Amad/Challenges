// challenge 12 :  Export and Import Multiple Functions 
function sum12(num1, num2) {
  return num1 + num2;
}

function multiply12(num1, num2) {
  return num1 * num2;
}

function divide12(num1, num2) {
  if (num2 === 0) throw new Error("Cannot divide by zero");
  return num1 / num2;
}
export{
    sum12 , multiply12 ,divide12
}