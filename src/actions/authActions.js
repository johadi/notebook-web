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
      canDispatchResult: true
    },
    (response) => {
      localStorage.setItem('token', response.data.access_token);
      checkAndSetAuthorizationHeader();
      getUserAction(dispatch, 'login');
    }
  );
};

export const register = userDetails => (dispatch) => {
  fetch(
    {
      url: '/register',
      method: 'POST',
      data: userDetails
    },
    {
      dispatch,
      actionType: actionTypes.REGISTER,
      canDispatchResult: true
    },
    (response) => {
      localStorage.setItem('token', response.data.access_token);
      checkAndSetAuthorizationHeader();
      getUserAction(dispatch, 'login');
    }
  );
};

export const getUserDetail = loaderScope => (dispatch) => {
  getUserAction(dispatch, loaderScope);
};

const getUserAction = (dispatch, loaderScope) => {
  fetch(
    {
      url: '/user',
      method: 'GET',
    },
    {
      dispatch,
      loaderScope,
      actionType: actionTypes.GET_USER,
      canDispatchResult: true
    }
  );
};

export const logout = () => (dispatch) => {
  fetch(
    {
      url: '/logout',
      method: 'GET',
    },
    {
      dispatch,
      actionType: actionTypes.LOGOUT,
      canDispatchResult: true
    },
    () => localStorage.removeItem('token')
  );
};

export const clearAuthError = () => dispatch => dispatch({ type: actionTypes.CLEAR_AUTH_ERROR });
