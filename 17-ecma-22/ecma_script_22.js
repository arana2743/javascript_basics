// ECMAScript 2022
// at() - takes integer and returns the item at that index for string,array

// Top Level Await - Basic example

const scores = [99,100,102];
// before:
const oldLast = scores[scores.length-1];
console.log(oldLast);
// with at()
const newLast = scores.at(-1);
console.log(newLast);

const profile = 'developer';
console.log(profile.at(0));


// top level await example
// with top level await - we no longer need the async function to wrap our await calls
const url = 'https://www.course-api.com/react-tabs-project';
const response = await fetch(url);
const data = await response.json();
console.log(data);