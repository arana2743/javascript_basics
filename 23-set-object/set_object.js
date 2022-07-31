// Set Object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const mySet = new Set()
console.log(mySet);

mySet.add(10);
mySet.add('John');
mySet.add(10);
console.log(mySet);

mySet.delete(10);
console.log(mySet);

mySet.clear()
console.log(mySet);

mySet.add('John', 'Doe');
console.log(mySet.has('John'));
