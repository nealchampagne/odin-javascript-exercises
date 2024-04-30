const reverseString = (str) => {
  let backwardString = '';
  for (let i = 1; i < str.length + 1; i++) {
    backwardString += str[str.length - i];
  }
  return backwardString;
};

// Do not edit below this line
module.exports = reverseString;
