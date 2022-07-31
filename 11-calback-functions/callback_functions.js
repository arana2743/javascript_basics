function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

handleName('peter', makeUpperCase);
handleName('john', reverseString);

// another example:
// wherein we are defining callback in parameter
handleName('susan', function (value) {
  console.log(value);
})

// using callback to fire eventListener on button
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  console.log('Button clicked!');
});

// callback functions usage: 
// array method, setTimeout, event listeners etc