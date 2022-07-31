// Reduce - Objects
// this script - being referenced in index.html present in same dir
// for the github api fetch example

// cart example
const cart = [
  {
    title: 'Samsum Galaxy S7',
    price: 599.992,
    amount: 1,
  },
  {
    title: 'Google Pixel 4',
    price: 499.9985,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Apple iPhone 13',
    price: 999.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
  const {amount,price} = cartItem;
  // count items
  total.totalItems += amount;
  total.cartTotal += amount * price;
  return total
}, {
  totalItems: 0,
  cartTotal: 0,
});

// toFixed - sets the floating precision after decimal point
// since toFixed returns a string - so we use parseFloat to convert back to number type
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);



// github repos example
const userName = 'john-smilga';

const url = `https://api.github.com/users/${userName}/repos?per_page=100`;

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const refinedData = data.reduce((total, repo) => {
    const { language } = repo
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(refinedData)
};

fetchRepos()
