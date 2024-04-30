const repeatString = (str, num) => {
  let echoedString = ''
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    echoedString += str;
  }
  return echoedString;
};

// Do not edit below this line
module.exports = repeatString;
