const display = document.getElementById('display');
const numberButtons = Array.from(document.querySelectorAll('.number'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const functionButtons = Array.from(document.querySelectorAll('.function'));
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('del');
const ansButton = document.getElementById('ans');
const sqrtButton = document.getElementById('sqrt');
const plusMinusButton = document.getElementById('plusminus');

let currentExpression = '';
let isEvaluated = false;

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (isEvaluated) {
      display.value = '';
      isEvaluated = false;
    }
    display.value += button.textContent;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (isEvaluated) {
      isEvaluated = false;
    }
    display.value += button.textContent;
  });
});

functionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    switch (buttonText) {
      case 'clear':
        display.value = '';
        break;
      case 'del':
        display.value = display.value.slice(0, -1);
        break;
      case 'ans':
        break;
      case '√':
        break;
      case '+/-':
        break;
    }
  });
});

equalsButton.addEventListener('click', () => {
  currentExpression = display.value;
  try {
    const result = eval(currentExpression);
    display.value = result;
    isEvaluated = true;
  } catch (error) {
    display.value = 'Error';
  }
});
sqrtButton.addEventListener('click', () => {
  if (isEvaluated) {
    isEvaluated = false;
  }
  currentExpression = 'Math.sqrt(' + display.value + ')';
  try {
    const result = eval(currentExpression);
    display.value = result;
    isEvaluated = true;
  } catch (error) {
    display.value = 'Error';
  }
});
