import { fetch } from './apiRequest';
import actionTypes from '../actionTypes';

export const updateUser = userDetails => (dispatch) => {
  fetch(
    {
      url: '/user/update',
      method: 'POST',
      data: userDetails
    },
    {
      dispatch,
      actionType: actionTypes.UPDATE_USER,
      canDispatchResult: true
    },
    ({ data }) => dispatch({
      type: `${actionTypes.GET_USER}_SUCCESSFUL`,
      payload: data
    })
  );
}

export const clearUserError = () => dispatch => dispatch({ type: actionTypes.CLEAR_USER_ERROR });
