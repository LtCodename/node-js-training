const counter = function (arr) {
  return 'There are ' + arr.length + ' elements in this array';
};

const adder = function(a, b) {
  return `The sum of the two numbers is ${a + b}`;
};

const pi = 3.142;

module.exports = {
  counter,
  adder,
  pi
};
