document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let currentInput = '0';

  document.querySelectorAll('.numButton').forEach((button) => {
    button.addEventListener('click', function () {
      if (currentInput === '0') {
        currentInput = button.innerText;
      } else {
        currentInput += button.innerText;
      }
      updateDisplay();
    });
  });

  document.querySelectorAll('.opButton').forEach((button) => {
    button.addEventListener('click', function () {
      currentInput += button.innerText;
      updateDisplay();
    });
  });

  document.querySelector('.eqButton').addEventListener('click', function () {
    try {
      currentInput = eval(currentInput).toString();
    } catch (error) {
      currentInput = 'Error';
    }
    updateDisplay();
  });

  document.querySelector('.clearButton').addEventListener('click', function () {
    currentInput = '0';
    updateDisplay();
  });

  function updateDisplay() {
    display.innerText = currentInput;
  }
});
