import { fetch } from './apiRequest';
import actionTypes from '../actionTypes';
import axios from 'axios';

export const getNotes = () => (dispatch) => {
  fetch(
    {
      url: '/notes',
      method: 'GET'
    },
    {
      dispatch,
      actionType: actionTypes.GET_NOTES,
      loaderScope: 'noteboard',
      canDispatchResult: true
    },
  );
};
