const people = [
  {
    name: 'bob',
    location: { 
      street: '123 main street',
      timezone: { offset: '+7:00' },
    },
  },
  {
    name: 'peter',
    location: { street: '123 Pine stree' },
  },
  {
    name: 'susan',
    location: {
      street: '123 Apple stree',
      timezone: { offset: '+9:00' },
    },
  },
];

// trying to get offset property from each object of person above (since offset is not defined for each person)
console.log('old way without optional chaining: ');
people.forEach((person) => {
  console.log(
    person.location && 
    person.location.timezone && 
    person.location.timezone.offset
  );
});

console.log('Now with optional chaining');
people.forEach((person) => {
  console.log(person?.location?.timezone?.offset || 'offset not available');
});