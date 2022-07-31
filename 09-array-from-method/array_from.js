// Arrays.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');
console.log(text);

// since text is of NodeList - we cannot query it with built-in methods
const newText = Array.from(text).find((elem) => elem.textContent === 'person');
console.log(newText);

// **Application of Array.from in Pagination**
// creating items with Array.from
const items = Array.from({ length: 120 }, (_,index) => {
  return index
});
// above creates 100 items array initialised to undefined
console.log(items);

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

// fetching items per page
// in from of array of arry
const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newItems);
console.log(pages);