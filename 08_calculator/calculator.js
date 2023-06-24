const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if(arr.length == 0)
  {
    return 0;
  }
  return arr.reduce((total, num) => total += num);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product = product * num, 1);  
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	if (num == 0)
  {
    return 1;
  }
  let arr = [];
  for (let i = num; i > 0; i--)
  {
    arr.push(i);
  }
  return arr.reduce((factorial, num) => factorial *= num, 1);
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
