const removeFromArray = (...args) => {
  for (let i = 1; i < args.length; i++) {
    for (let j = 0; j < args[0].length; j++) {
      if (args[i] === args[0][j]) {
        args[0].splice(j, 1);
        j--;
      }
    }
  }
  return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
