const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(array) {
  let result = 0;
  for(let idx = 0; idx < array.length; idx++) {
    result = result + array[idx];
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for(let idx = 0; idx < array.length; idx++) {
    result = result * array[idx];
  }
  return result;
};

const power = function(firstNumber, secondNumber) {
	return Math.pow(firstNumber, secondNumber);
};

const factorial = function(number) {
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
