import actionTypes from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  userDetail: null,
  authError: null,
  getUserError: null,
};
export default (state = initialState, { type, payload = {} }) => {

  switch (type) {
    case `${actionTypes.LOGIN}_SUCCESSFUL`:
      return {
        ...state,
        isAuthenticated: true,
        authError: null
      };
    case `${actionTypes.LOGIN}_UNSUCCESSFUL`:
      return {
        ...state,
        isAuthenticated: false,
        authError: payload
      };
    case `${actionTypes.GET_USER}_SUCCESSFUL`:
      return {
        ...state,
        userDetail: payload,
        isAuthenticated: true,
        getUserError: null
      };
    case `${actionTypes.GET_USER}_UNSUCCESSFUL`:
      return {
        ...state,
        userDetail: null,
        isAuthenticated: false,
        getUserError: payload
      };
    case `${actionTypes.LOGOUT}_SUCCESSFUL`:
      return initialState;
    default:
      return state;
  }
};
