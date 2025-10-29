// Basic Operations - Example //
// if you wish to use for the select menu //
function handleBasicOperation(type, num1, num2) {
  let result;

  switch (type) {
    case "add":
      result = num1 + num2;
      break;

    case "substract":
      result = num1 - num2;

      break;
    case "multiply":
      result = num1 * num2;
      break;

    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;

    case "modulus":
      result = num1 % num2;
      break;

    default:
      result = "Invalid operation";
  }

  document.getElementById("basicResult").textContent = `Result: ${result}`;
}

document.querySelector("#Add_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("add", Number(X), Number(Y));
});
document.querySelector("#Substract_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("substract", Number(X), Number(Y));
});
document.querySelector("#Multiply_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("multiply", Number(X), Number(Y));
});
document.querySelector("#Divide_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("divide", Number(X), Number(Y));
});
document.querySelector("#Modulus_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("modulus", Number(X), Number(Y));
});

// Math Formula Handlers
