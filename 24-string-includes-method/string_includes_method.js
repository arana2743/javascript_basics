// String includes() - checks if a string contains another string
// usage example - in search functionality

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

// const firstName = 'john';
// const result = firstName.includes('hn', 2);
// console.log(result);


const text = 'a';
const filteredProducts = products.filter((product) => {
  return product.title.toLowerCase().includes(text)
});

console.log(filteredProducts);