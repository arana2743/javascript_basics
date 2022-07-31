// Width/Height - of window, or any element
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any element

console.log('height: ', window.innerHeight);
console.log('width: ', window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
  const dimensions = box.getBoundingClientRect();
  console.log(dimensions);
})