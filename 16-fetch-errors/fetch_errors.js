// Fetch Errors
// Only throws an error if cannot resolve
// Error response still a response (status-code: 400-500)


const url = 'https://www.course-api.com/react-tours-project';

const getTours = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const msg = `There was an error: "${response.status} ${response.statusText}."`
      throw new Error(msg);
    }
    const tours = await response.json();
    tours.forEach((tour) => console.log(tour.name));
  } catch (error) {
    console.log(error);
  }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getTours);