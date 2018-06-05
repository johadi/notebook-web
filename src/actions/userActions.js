import { fetch } from './apiRequest';
import actionTypes from '../actionTypes';
import axios from 'axios';
import {apiBaseUrl, checkAndSetAuthorizationHeader } from '../environment';

export const getNotes2 = () => (dispatch) => {
  // fetch(
  //   {
  //     url: '/login',
  //     method: 'POST',
  //     data: { email: 'jimoh.hadi@gmail.com', password: '112233' }
  //   },
  //   dispatch,
  //   actionTypes.LOGIN,
  //   'board'
  // );
};
