const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function (arr) {
  result = 1
  for (num of arguments) {
    result *= num
  }
  return result
};

const power = function (num, pow) {
  return num ** pow
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i
  }
  return result
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
