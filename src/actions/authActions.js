import { fetch } from './apiRequest';
import actionTypes from '../actionTypes';
import { checkAndSetAuthorizationHeader } from '../environment';

export const login = userCredentials => (dispatch) => {
  fetch(
    {
      url: '/login',
      method: 'POST',
      data: userCredentials
    },
    {
      dispatch,
      actionType: actionTypes.LOGIN,
      loaderScope: 'login',
      canDispatchResult: true
    },
    (response) => {
      localStorage.setItem('token', response.data.access_token);
      checkAndSetAuthorizationHeader();
    }
  );
};

export const getUserDetail = loaderScope => (dispatch) => {
  fetch(
    {
      url: '/user', method: 'GET',
    },
    {
      dispatch, loaderScope, actionType: actionTypes.GET_USER, canDispatchResult: true
    }
  );
};

export const logout = () => (dispatch) => {
  fetch(
    {
      url: '/logout', method: 'GET',
    },
    {
      dispatch, actionType: actionTypes.LOGOUT, canDispatchResult: true
    },
    () => localStorage.removeItem('token')
  );
}
