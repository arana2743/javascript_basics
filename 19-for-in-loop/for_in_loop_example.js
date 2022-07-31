// "for in" loop - iterate over object properties
// not advised to use on arrays, especially if the order is important
// on arrays use "for of" loop instead

const person = {
  name: 'John',
  age: 27,
  status: 'developer',
};

for (const propertyName in person) {
  console.log(`${propertyName} : ${person[propertyName]}`);
}