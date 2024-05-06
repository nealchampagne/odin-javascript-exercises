const palindromes = string => {
  let stringArray = [...string.toLowerCase()].filter(c => 
    ('a' <= c && c <= 'z') || ('0' <= c && c <= '9'));
  return stringArray.join('') === stringArray.slice().reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
