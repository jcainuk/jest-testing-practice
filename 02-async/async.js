// You must npm install axios for this bit to work
const axios = require('axios');

const fetchData = (id) => {
  // {JSON} Placeholder is a free fake API for testing and prototyping.

  const results = axios.get(`https://jsonplaceholder.typicode.com/todo/${id}`);
};
