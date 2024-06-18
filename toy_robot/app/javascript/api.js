import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/', // Substitua pelo URL da sua API Rails
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;