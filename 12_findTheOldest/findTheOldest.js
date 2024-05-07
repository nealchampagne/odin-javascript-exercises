let currentYear = new Date().getFullYear();

const findTheOldest = (arr) => {
  arr.sort((a, b) => getAge(a.yearOfDeath, a.yearOfBirth) 
    > getAge(b.yearOfDeath, b.yearOfBirth) ? -1 : 1);
  return arr[0];
};

const getAge = (death, birth) => death ? death - birth 
  : currentYear - birth;

// Do not edit below this line
module.exports = findTheOldest;
