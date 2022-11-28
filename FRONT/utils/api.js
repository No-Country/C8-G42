import axios from 'axios';

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
  };

const fetchPets = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/api/v1/pets',
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export {fetchPets}