import actionTypes from '../actionTypes';

const initialState = {
  sum: 0,
  notes: null,
  noteError: null
};
export default (state = initialState, { type, payload = {} }) => {

  switch (type) {
    case actionTypes.GET_NOTES_SUCCESSFUL:
      return {
        ...state,
        note: payload
      };
    case actionTypes.GET_NOTES_UNSUCCESSFUL:
      return {
        ...state,
        noteError: payload
      };
    default:
      return state;
  }
};
