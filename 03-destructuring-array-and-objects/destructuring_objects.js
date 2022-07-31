const bob  = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const { last, first, city, siblings: {sister: favoriteSibling}} = bob;

console.log(first, last, city, favoriteSibling);
