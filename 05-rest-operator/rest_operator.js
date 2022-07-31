// Rest operator - ...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest declare function,
// spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);

// objects
const person = { 
  firstName: 'john', 
  lastName: 'smith', 
  job: 'developer',
  salary: 300,
};
const {firstName,job, ...rest} = person;
console.log(firstName, rest, job);

// functions
const getAverage = (firstName, ...scores) => {
  console.log(firstName);
  console.log(scores);
  const average = scores.reduce((total, item) => { return total+=item},0) / scores.length;
  console.log(average);
}

getAverage(person.firstName, 89,76,81,100);
const testScores = [23,45,67,89];
// here were are using spread operator and not rest operator
console.log(...testScores);
getAverage('Doe', ...testScores);