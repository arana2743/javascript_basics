// Async/await
// async must be present, always returns a promise
// await waits till the promise is settled (i.e. resolved or rejected)
// error handling - try/catch block

const example = async () => {
  return 'hello async function'
}

async function someAsyncFunc() {
  const result = await example()
  console.log(result);
  console.log('hello another one!');
}

// console.log(example());
// someAsyncFunc();


const users = [
  { id:1, name:'john' },
  { id:2, name:'susan' },
  { id:3, name:'anna' },
];

const articles = [
  { userId:1, articles:['one', 'two', 'three'] },
  { userId:2, articles:['four', 'five'] },
  { userId:3, articles:['six', 'seven', 'eight'] },
];

// getting all articles of a give user
// without async/await
getUser('anna')
  .then((user) => getArticles(user.id))
  .then((articles) => {
    console.log(articles);
  })
  .catch((err) => console.log(err));


// with async/await 
console.log('Fetching user articles with async-await:');

const getUserArticleData = async (name) => {
  try {
    const user = await getUser(name);
    console.log(user);
    const articles = await getArticles(user.name);
    console.log(articles);
  } catch (error) {
    console.log(error);
  } 
}

getUserArticleData('anna');

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name: ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if (userArticles) {
      return resolve(userArticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  });
}