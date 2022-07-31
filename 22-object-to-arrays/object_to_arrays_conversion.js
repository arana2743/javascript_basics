// Three methods to convert objects into arrays
// Object.keys() - convert property names into arrays
// Object.values() - convert property values into arrays
// Object.entries() - converts both

const person = {
  name: 'Smith',
  age: 35,
  status: 'Manager',
};

const result = Object.entries(person);
console.log(result);

// map method
const newResult = result.map((item) => {
  const [first, second] = item;
  console.log(first, second);
  return first;
});

console.log(newResult);

// for of
for (const item of result) {
  const [first, second] = item;
  console.log(first, second);
}
