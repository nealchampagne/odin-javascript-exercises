const sumAll = (num1, num2) => {
  let sum = 0;
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return 'ERROR';
  }
  if (num1 <= num2 && num1 >= 0) {
    for (i = num1; i < num2 + 1; i++) {
      sum += i;
  }} else if (num2 < num1 && num2 >= 0) {
    for (i = num2; i < num1 + 1; i++) {
      sum += i;
    }
  } else {
    return 'ERROR';
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
