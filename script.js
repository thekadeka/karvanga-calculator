// Operation functions
function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Variables
let firstNumber = 0;
let operator = '';
let secondNumber = 0;

function operate(firstNumber, operator, secondNumber) {
  if (operator === '+') {
    add(firstNumber, secondNumber);
  }
}

function populate(firstNumber, operator, secondNumber) {
  const operators = document.querySelectorAll('.operator');
  const numbers = document.querySelectorAll('.number');
  const equals = document.querySelector('#equals');
  let shouldClearDisplay = false;
  let firstNumberAcquired = false;

  numbers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (firstNumberAcquired === false) {
        display.textContent += e.target.textContent;
      }
    });
  });

  operators.forEach(function (item) {
    item.addEventListener('click', function (e) {
      operator = e.target.textContent;
      firstNumber = display.textContent;
      console.log(firstNumber);
      shouldClearDisplay = true;
      firstNumberAcquired = true;

      numbers.forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (shouldClearDisplay === true) {
            display.textContent = '';
            shouldClearDisplay = false;
          }
          display.textContent += e.target.textContent;
        });
      });
    });
  });

  equals.addEventListener('click', function () {
    secondNumber = display.textContent;
    console.log(secondNumber);
    console.log(operator);
    operate(firstNumber, operator, secondNumber);
  });
}

populate();

// Clear button

const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
  display.textContent = '';
});
