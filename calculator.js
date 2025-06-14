function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}


function handleCalculation(operationFunc) {
  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  const resultSpan = document.getElementById('calculation-result');

  if (isNaN(num1) || isNaN(num2)) {
    resultSpan.textContent = "Please enter valid numbers.";
    return;
  }

  const result = operationFunc(num1, num2);
  resultSpan.textContent = result;
}
document.getElementById('add-btn').addEventListener('click', () => handleCalculation(add));
document.getElementById('subtract-btn').addEventListener('click', () => handleCalculation(subtract));
document.getElementById('multiply-btn').addEventListener('click', () => handleCalculation(multiply));
document.getElementById('divide-btn').addEventListener('click', () => handleCalculation(divide));
