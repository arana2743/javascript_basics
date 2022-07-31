// Promises

// async await
// consume/use promises

// Promise states:
// Pending, Rejected, FullFilled

// .then ==> for when promise gets resolved (to get data fetched/returned)
// .catch ==> for when promise gets rejected
const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  console.log(random);
  if (random === value) {
    resolve('you guessed it correctly!');
  } else {
    reject('nope you chose the wrong number!!');
  }
});

console.log(promise);

promise.then((data) => { console.log(`Resolved: ${data}`); })
  .catch((err) => { console.log(`Rejected: ${err}`); })
  .finally(() => { console.log('Finally: Always executed'); })

