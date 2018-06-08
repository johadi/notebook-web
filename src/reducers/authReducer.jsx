import actionTypes from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  userDetail: null,
  authError: null
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
    case `${actionTypes.REGISTER}_SUCCESSFUL`:
      return {
        ...state,
        isAuthenticated: true,
        authError: null
      };
    case `${actionTypes.REGISTER}_UNSUCCESSFUL`:
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
        authError: null
      };
    case `${actionTypes.GET_USER}_UNSUCCESSFUL`:
      return {
        ...state,
        userDetail: null,
        isAuthenticated: false,
        authError: payload
      };
    case actionTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        authError: null
      };
    case `${actionTypes.LOGOUT}_SUCCESSFUL`:
      return initialState;
    default:
      return state;
  }
};
