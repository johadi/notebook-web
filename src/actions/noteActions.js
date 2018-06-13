import { fetch } from './apiRequest';
import axios from 'axios';
import actionTypes from '../actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const getNotes = (page = 1) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_NOTES });
  fetch(
    {
      url: `/notes?page=${page}`,
      method: 'GET'
    },
    {
      dispatch,
      actionType: actionTypes.GET_NOTES,
      useLoader: false,
      canDispatchResult: true
    },
  );
};

export const saveNote = note => (dispatch) => {
  fetch(
    {
      url: '/note/create',
      method: 'POST',
      data: note
    },
    {
      dispatch,
      actionType: actionTypes.SAVE_NOTE,
      canDispatchResult: true
    },
  );
}

export const updateNote = (id, note) => (dispatch) => {
  fetch(
    {
      url: `/note/${id}`,
      method: 'PATCH',
      data: note
    },
    {
      dispatch,
      actionType: actionTypes.UPDATE_NOTE,
      canDispatchResult: true
    }
  );
}

export const deleteNote = id => (dispatch) => {
  fetch(
    {
      url: `/note/${id}`,
      method: 'DELETE'
    },
    {
      dispatch,
      actionType: actionTypes.DELETE_NOTE,
      canDispatchResult: true,
      extraData: { noteId: id }
    },
  );
}

export const clearNoteError = () => dispatch => dispatch({ type: actionTypes.CLEAR_NOTE_ERROR });
