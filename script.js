// Define variables
let result = document.getElementById("result");

// Add number to the result
function addNumber(number) {
  result.value += number;
}

// Clear the result
function clearResult() {
  result.value = "";
}

// Delete the last character from the result
function backspace() {
  result.value = result.value.slice(0, -1);
}

// Perform the operation
function operate(operator) {
  result.value += operator;
}

// Calculate the result
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
