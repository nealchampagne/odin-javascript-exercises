const getTheTitles = (obj) =>
  obj.reduce((arr, value) => {
    arr.push(value.title);
    return arr;
  }, []);

// Do not edit below this line
module.exports = getTheTitles;
