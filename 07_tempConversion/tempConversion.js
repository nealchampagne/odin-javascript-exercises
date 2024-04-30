const convertToCelsius = (temp) => {
  temp = (temp - 32) * (5/9);
  if (temp % 1 === 0) {
    return Number(temp)
  } else {
    return Number(temp.toFixed(1));
  }
};

const convertToFahrenheit = (temp) => {
  temp = (temp) * (9/5) + 32;
  if (temp % 1 === 0) {
    return Number(temp)
  } else {
    return Number(temp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
