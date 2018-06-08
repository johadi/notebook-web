import actionTypes from '../actionTypes';

const initialState = {
  sum: 0,
  notes: null,
  noteError: null
};
export default (state = initialState, { type, payload = {} }) => {

  switch (type) {
    case `${actionTypes.GET_NOTES}_SUCCESSFUL`:
      return {
        ...state,
        isAuthenticated: true,
        error: null
      };
    case `${actionTypes.GET_NOTES}_UNSUCCESSFUL`:
      return {
        ...state,
        isAuthenticated: false,
        error: payload
      };
    default:
      return state;
  }
};
