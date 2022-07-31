// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter (accumulator) - total of all calculations
// 2nd paramter (current) - current iteration/value

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100},
  { name: 'peter', age: 25, position: 'designer', salary: 300},
  { name: 'susy', age: 30, position: 'the boss', salary: 400},
  { name: 'anna', age: 35, position: 'intern', salary: 10},
];

const dailyTotal = staff.reduce((total, currVal) => total + currVal.salary, 0);
console.log(dailyTotal);
