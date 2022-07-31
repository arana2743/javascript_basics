// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET requests, supports other methods as well
// Fetch api returns Promise

const url = 'https://www.course-api.com/react-tours-project';

// console.log(fetch(url));

// fetch with promises
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(err => console.log(err));

// now fetch with async-await
const getTours = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getTours();