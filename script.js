// Operation functions
function add(a, b) {
  return a + b;
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

function operate() {}

function populate(firstNumber, operator, secondNumber) {
  const operators = document.querySelectorAll('.operator');
  const numbers = document.querySelectorAll('.number');
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
          secondNumber = display.textContent;
          console.log(secondNumber);
        });
      });
    });
  });
}

populate();

// Clear button

const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
  display.textContent = '';
});
