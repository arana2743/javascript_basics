// Get Element Helper
// building helper functions to select elements and setup checks when wrong selector is passed


const heading = document.querySelector('.heading');
// console.log(heading);

const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);

const getElement = (selector, isList=false) => {
  const el = isList 
    ? [...document.querySelectorAll(selector)] 
    : document.querySelector(selector);
  
  if (!isList && el) return el;
  if (isList && !el.length < 1) return el;

  throw new Error(`Please double check selector: ${selector}`);
};

console.log(getElement('.heading'));
console.log(getElement('.list-item', true));