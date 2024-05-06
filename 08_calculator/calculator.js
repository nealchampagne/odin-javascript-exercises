const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);

const multiply = arr => arr.reduce((acc, cur) => acc * cur, 1);

const power = (num1, num2) => {
  let val = 1;
  for (let i = 0; i < num2; i++) {
    val *= num1;
  }
  return val;
};

const factorial = num => {
  if (num === 0) {
    return 1;
  } else {
    let val = 1;
    for (i = 0; i < num; i++) {
      val *= i + 1;
    }
    return val;
  }
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
