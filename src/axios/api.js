import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Security-Policy'] = 'upgrade-insecure-requests'

    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api