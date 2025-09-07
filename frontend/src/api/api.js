import axios from 'axios';
import authService from '../services/authService';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

api.interceptors.request.use(
  (config) => {
    const user = authService.currentUser(); 
    const token = user?.token || localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
