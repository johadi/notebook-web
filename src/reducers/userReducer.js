import actionTypes from '../actionTypes';

const initialState = {
  userError: null,
  userIsUpdated: false
};

export default (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case `${actionTypes.UPDATE_USER}_SUCCESSFUL`:
      return {
        ...state,
        userIsUpdated: true,
        userError: null
      };
    case `${actionTypes.UPDATE_USER}_UNSUCCESSFUL`:
      return {
        ...state,
        userError: payload,
        userIsUpdated: false
      };
    case actionTypes.CLEAR_USER_ERROR:
      return {
        ...state,
        userError: null,
        userIsUpdated: false
      };
    case `${actionTypes.LOGOUT}_SUCCESSFUL`:
      return initialState;
    default:
      return state;
  }
};
