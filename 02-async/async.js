// You must npm install axios for this bit to work
const axios = require('axios');

const fetchData = async (id) => {
  // https://jsonplaceholder.typicode.com is a free fake API for testing and prototyping.

  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  console.log(results);
  return results.data;
};

fetchData(10);

module.exports = fetchData;
