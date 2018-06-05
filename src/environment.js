import axios from 'axios';

export const checkAndSetAuthorizationHeader = () => {
  axios.defaults.baseURL = 'http://localhost:8000/api';
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return true;
  }

  return false;
};
