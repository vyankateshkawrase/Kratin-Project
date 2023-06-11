import axios from 'axios';

  axios.get('http://localhost:8000/api/medications')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
