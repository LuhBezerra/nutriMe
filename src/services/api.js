import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taco-food-api.herokuapp.com/api/v1',
});

export default api;