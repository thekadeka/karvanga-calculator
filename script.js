// Global variables
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('#equals');
let shouldClearDisplay = false;
let firstNumberAcquired = false;
let nest = false;
let firstNumber = 0;
let currentOperator = '';
let secondNumber = 0;

// Operation functions
function add(a, b) {
  sum = a + b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
  shouldClearDisplay = true;
}

function subtract(a, b) {
  sum = a - b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
  shouldClearDisplay = true;
}

function multiply(a, b) {
  sum = a * b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
  shouldClearDisplay = true;
}

function divide(a, b) {
  sum = a / b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
  shouldClearDisplay = true;
}

// Variables

function operate(firstNumber, operator, secondNumber) {
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);

  if (operator === '+') {
    add(num1, num2);
  }
  if (operator === '-') {
    subtract(num1, num2);
  }
  if (operator === '*') {
    multiply(num1, num2);
  }
  if (operator === '/') {
    divide(num1, num2);
  }
}

// x Populate the display and the variables

// x.1 Display the firstNumber
function populate(firstNumber, operator, secondNumber) {
  numbers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (firstNumberAcquired === false) {
        display.textContent += e.target.textContent;
        console.log('numbers1');
      }

      if (firstNumberAcquired === true) {
        if (shouldClearDisplay === true) {
          display.textContent = '';
          shouldClearDisplay = false;
        }
        if (firstNumberAcquired) {
          display.textContent += e.target.textContent;
          console.log('numbers2');
        }
      }
    });
  });
  // x.2 If operator clicked add value to the firstNumber that is displayed and value to the operator
  operators.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (display.textContent !== firstNumber) {
        if (nest == true) {
          secondNumber = display.textContent;
          operate(firstNumber, currentOperator, secondNumber);
          nest = false;
        }
      }

      if (nest == false) {
        currentOperator = e.target.textContent;
        firstNumber = display.textContent;
        console.log(firstNumber);
        shouldClearDisplay = true;
        firstNumberAcquired = true;
        nest = true;
      }
    });
  });

  // x.4 If equal sign is clicked add value that is displayed to the secondNumber and call operate on these variables
  equals.addEventListener('click', function () {
    nest = false;
    secondNumber = display.textContent;
    console.log(secondNumber);
    console.log(currentOperator);
    operate(firstNumber, currentOperator, secondNumber);
  });
}

populate();

// Clear button

const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
  display.textContent = '';
  firstNumber = 0;
  currentOperator = '';
  secondNumber = 0;
  shouldClearDisplay = false;
  firstNumberAcquired = false;
  nest = false;
});
