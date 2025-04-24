// Global variables
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('#equals');
let shouldClearDisplay = false;
let firstNumberAcquired = false;

// Operation functions
function add(a, b) {
  sum = a + b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
}

function subtract(a, b) {
  sum = a - b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
}

function multiply(a, b) {
  sum = a * b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
}

function divide(a, b) {
  sum = a / b;
  display.textContent = '';
  display.textContent = sum;
  firstNumberAcquired = true;
}

// Variables
let firstNumber = 0;
let operator = '';
let secondNumber = 0;

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
      operator = e.target.textContent;
      firstNumber = display.textContent;
      console.log(firstNumber);
      shouldClearDisplay = true;
      firstNumberAcquired = true;
    });
    // x.3  If new number is clicked clear display and add new numbers to the display
    //BUG: Every time it runs it adds multiple event listeners to the numbers
  });

  // x.4 If equal sign is clicked add value that is displayed to the secondNumber and call operate on these variables
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
  let firstNumber = 0;
  let operator = '';
  let secondNumber = 0;
});
