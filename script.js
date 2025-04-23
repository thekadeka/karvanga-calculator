let isDisplaySum = false;

// Resets display when pressing a new character when sum is on display

// Operator functions
function add(arr) {
  sum = arr[0] + arr[2];

  display.textContent = sum;
  isDisplaySum = true;
  console.log(isDisplaySum);
}

function subtract(arr) {
  sum = arr[0] - arr[2];
  display.textContent = sum;
  isDisplaySum = true;
}

function multiply(arr) {
  sum = arr[0] * arr[2];
  display.textContent = sum;
  isDisplaySum = true;
}

function divide(arr) {
  sum = arr[0] / arr[2];
  display.textContent = sum;
  isDisplaySum = true;
}

// Populate the display and store the numbers

function populate() {
  const operators = document.querySelectorAll('.operator');
  const numbers = document.querySelectorAll('.number');

  numbers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (isDisplaySum && display.textContent.match(/[+\-*/]/)) {
        isDisplaySum = false;
      }

      if (isDisplaySum) {
        display.textContent = '';
        isDisplaySum = false;
      }

      const number = e.target.textContent;
      display.textContent += `${number}`;
    });
  });

  operators.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const operator = e.target.textContent;
      display.textContent += `${operator}`;
    });
  });
}

populate();

// Operation

let firstNumber = 0;

let operator = '';

let secondNumber = 0;

const equals = document.querySelector('#equals');
equals.addEventListener('click', operate);

function operate() {
  // Create an array with numbers and operators as strings
  let operationString = display.textContent;
  let operationArr = operationString.split(/([\+\-\*\/])/);
  let operationArrNumbers = operationArr.map(function (item) {
    num = Number(item);
    if (isNaN(num)) {
      return item;
    } else {
      return num;
    }
  });

  console.log(operationArrNumbers);
  // Right operation function for right operator
  if (operationArrNumbers[1] === '+') {
    add(operationArrNumbers);
  }

  if (operationArrNumbers[1] === '-') {
    subtract(operationArrNumbers);
  }

  if (operationArrNumbers[1] === '*') {
    multiply(operationArrNumbers);
  }
  if (operationArrNumbers[1] === '/') {
    divide(operationArrNumbers);
  }
}

// Clear button

const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
  display.textContent = '';
});
