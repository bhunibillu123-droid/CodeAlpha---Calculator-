const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const value = button.textContent;

    // Number buttons
    if (!isNaN(value) || value === ".") {
      currentInput += value;
      display.value = currentInput;
    }

    // Clear button
    else if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.value = "";
    }

    // Operator buttons
    else if (value === "+" || value === "-" || value === "*" || value === "/") {

      if (currentInput === "") {
        return;
      }

      previousInput = currentInput;
      currentInput = "";
      operator = value;
    }

    // Equal button
    else if (value === "=") {

      if (previousInput === "" || currentInput === "" || operator === "") {
        return;
      }

      const number1 = parseFloat(previousInput);
      const number2 = parseFloat(currentInput);

      let result;

      if (operator === "+") {
        result = number1 + number2;
      }

      else if (operator === "-") {
        result = number1 - number2;
      }

      else if (operator === "*") {
        result = number1 * number2;
      }

      else if (operator === "/") {

        if (number2 === 0) {
          display.value = "Error";
          currentInput = "";
          previousInput = "";
          operator = "";
          return;
        }

        result = number1 / number2;
      }

      display.value = result;

      currentInput = result.toString();
      previousInput = "";
      operator = "";
    }

  });
});