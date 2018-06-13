import axios from 'axios';

export const checkAndSetAuthorizationHeader = () => {
  axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
    'https://jim-notebook-server.herokuapp.com/api' : 'http://localhost:8000/api';
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return true;
  }

  return false;
};
