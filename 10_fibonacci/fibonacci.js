const fibonacci = num => {
  console.log(Number(num));
  if (Number(num) < 0) {
    return 'OOPS';
  } else if (Number(num) === 0) {
    return 0;
  } else {
    let num1 = 0;
    let num2 = 1;
    let sum = 1;
    for (let i = 1; i < Number(num); i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
