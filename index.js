// declaring number variables

let n1;
let n2;
let operator;

//for tracking keys pressed & last key pressed
let pressed = [];

//selectors

const calcDisplay = document.querySelector('#display');
const calcKeys = document.querySelectorAll('.buttons');

//alternate way of handling user input
const userInput = (input) => {
  if ('+-*÷/'.includes(pressed.slice(-1))) {
    calcDisplay.textContent = '';
  }

  if ('0123456789.'.includes(input)) {
    calcDisplay.textContent += input;
    pressed.push(input);
  }
};

const operatorInput = (input) => {
  n1 = calcDisplay.textContent;
  operator = input;
  console.log(n1, input);
  pressed.push(input);
};

const numberClicked = document.querySelectorAll('.number_key').forEach((item) => {
  item.addEventListener('click', (e) => {
    // if (pressed.slice(-1) == '+' || pressed.slice(-1) == '-' || pressed.slice(-1) == '*' || pressed.slice(-1) == '÷') {
    //   calcDisplay.textContent = '' + e.target.textContent;
    //   pressed.push(e.target.textContent);
    // } else if ('0123456789.'.includes(e.target.textContent)) {
    //   calcDisplay.textContent += e.target.textContent;
    //   pressed.push(e.target.textContent);
    // }

    userInput(e.target.textContent);
  });
});

const operatorClicked = document.querySelectorAll('.operator').forEach((item) => {
  item.addEventListener('click', (e) => {
    // n1 = calcDisplay.textContent;
    // operator = e.target.textContent;
    // pressed.push(e.target.textContent);
    // console.log(n1, operator);
    operatorInput(e.target.textContent);
  });
});

const equalsClicked = document.querySelector('#equals').addEventListener('click', (e) => {
  n2 = calcDisplay.textContent;
  console.log(n2);
  calcDisplay.textContent = calculate(n1, n2, operator);
});

//

// clear display
document.querySelector('#clear').addEventListener('click', () => {
  clear();
});

// operation is performed

const calculate = (n1, n2, operator) => {
  if (operator === '+') {
    return parseFloat(n1) + parseFloat(n2);
  } else if (operator === '-') {
    return parseFloat(n1) - parseFloat(n2);
  } else if (operator === '*') {
    return parseFloat(n1) * parseFloat(n2);
  } else if (operator === '÷' || operator === '/') {
    return parseFloat(n1) / parseFloat(n2);
  }
};

// clear function
const clear = () => {
  calcDisplay.textContent = '0';
  n1 = '';
  n2 = '';
  operator = '';
  pressed = [];
};

// listen for keyboard input
// document.addEventListener('keydown', (e) => {
//   acceptableKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   if ('+-*÷/'.includes(pressed.slice(-1))) {
//     calcDisplay.textContent = '';
//   }

//   if (acceptableKeys.includes(e.key)) {
//     calcDisplay.textContent += e.key;
//     pressed.push(e.key);
//   } else if ((e.shiftKey && e.key === '+') || (e.shiftKey && e.key === '*') || e.key === '/' || e.key === '-') {
//     n1 = calcDisplay.textContent;
//     operator = e.key;
//     pressed.push(e.key);
//     console.log(n1, operator);
//   }

//   if (e.key === 'Enter') {
//     n2 = calcDisplay.textContent;
//     console.log(n2);
//     calcDisplay.textContent = calculate(n1, n2, operator);
//   }

//   if (e.key === 'Backspace') {
//     calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
//   }
//   if (e.key === 'Escape') {
//     clear();
//   }

//   if (e.key === '.' && !calcDisplay.textContent.includes('.')) {
//     calcDisplay.textContent += e.key;
//     pressed.push(e.key);
//   }
// });

//listen for keyboard input

document.addEventListener('keydown', (e) => {
  if ('0123456789'.includes(e.key)) {
    userInput(e.key);
  } else if ('+-/*÷'.includes(e.key)) {
    operatorInput(e.key);
  } else if (e.key === 'Enter') {
    n2 = calcDisplay.textContent;
    console.log(n2);
    calcDisplay.textContent = calculate(n1, n2, operator);
  } else if (e.key === 'Backspace') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
  } else if (e.key === 'Escape') {
    clear();
  } else if (e.key === '.' && !calcDisplay.textContent.includes('.')) {
    calcDisplay.textContent += e.key;
    pressed.push(e.key);
    console.log(e);
  }
});
