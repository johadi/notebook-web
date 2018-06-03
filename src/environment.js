import axios from 'axios';

export const setAuthorizationHeader = () => {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.baseURL = 'http://localhost:8000/api';
};
