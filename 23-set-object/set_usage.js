// Set usage example

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

const companies = products.map(item => item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

// now converting set back to an array
// with help of spread operator
const uniqCompaniesArray = [...uniqueCompanies];
console.log(uniqCompaniesArray);