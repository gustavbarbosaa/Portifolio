import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/gustavbarbosaa/repos',
});

export default api;
