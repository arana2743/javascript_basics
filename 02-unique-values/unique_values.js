const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

// to get unique values - js has set 
// example: here we get unique category
const categories = new Set(menu.map((item) => item.category));
// now we can also convert our set object into an array using spread operator
const categories_arr = [...categories];

console.log(categories);
console.log(categories_arr);