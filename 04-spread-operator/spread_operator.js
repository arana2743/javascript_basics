// Spread operator ==> ...
// Allows and iterable to spread/expand individually inside reciever
// split into single items and COPY them

const udemy = 'udemy';

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
const newFriends = friends;
// copy
const newFriends2 = [...friends];
console.log(`Original before: ${friends}`);
newFriends[0] = 'nancy';
console.log(`Original after: ${friends}`);
console.log(`Reference: ${newFriends}`);
console.log(`Copy: ${newFriends2}`);


// ES2018 - ES8 objects

const person = { 
  name: 'john', 
  job: 'developer',
};
const newPerson = {...person, salary: 400};

console.log(person);
console.log(newPerson);