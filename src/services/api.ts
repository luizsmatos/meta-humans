import axios from 'axios';

const api = axios.create({
  baseURL: 'http://homologacao3.azapfy.com.br/api/ps/',
});

export default api;
