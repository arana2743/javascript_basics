// - map always returns a new array
//   and never changes the original array
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
];

const ages = people.map(person => person.age);

const firstNamedPosition = people.map((person) => {
  return {
    firstName: person.name,
    position: person.position.toUpperCase(),
  }
});
console.log(ages);
console.log(firstNamedPosition);