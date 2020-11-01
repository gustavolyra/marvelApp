import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://gateway.marvel.com:443/v1/public/',
  baseURL: 'https://randomuser.me/api/',
});

export default api;
