import { fetch, fetchWithResult } from './apiRequest';
import actionTypes from '../actionTypes';
import axios from 'axios';
import {apiBaseUrl, setAuthorizationHeader } from '../environment';

setAuthorizationHeader();

export const getNotes = () => (dispatch) => {
  fetch(
    {
      url: '/login',
      method: 'POST',
      data: { email: 'jimoh.hadi@gmail.com', password: '112233' }
    },
    dispatch,
    actionTypes.LOGIN,
    'board'
  );
};
