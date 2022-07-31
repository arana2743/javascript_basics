// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition

// Find - returns single instance (object), returns the first match, if no match - returns undefined

const people = [
  { name: 'bob', age: 20, position: 'developer'},
  { name: 'peter', age: 25, position: 'designer'},
  { name: 'susy', age: 30, position: 'the boss'},
  { name: 'anna', age: 35, position: 'intern'},
];

// filter
const youngPeople = people.filter((person) => person.age <= 25);
console.log(youngPeople);

// no match
const legendaryPeople = people.filter((person) => person.age >= 50);
console.log(legendaryPeople);

// find
const developer = people.find((person) => person.position === 'developer');
console.log(developer);

// no match
const infraAdmin = people.find((person) => person.position === 'admin');
console.log(infraAdmin);

// multiple matches - first match fetched by filter
const randomPerson = people.find((person) => person.age <=35);
console.log(randomPerson);
