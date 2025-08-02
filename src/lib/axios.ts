import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  withCredentials: true,
});

// Add interceptors if needed (auth, error handling, etc.)
// api.interceptors.request.use(...)
// api.interceptors.response.use(...)

export default api;
