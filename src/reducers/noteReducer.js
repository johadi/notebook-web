import actionTypes from '../actionTypes';

const initialState = {
  notes: [],
  currentPageAndMetaData: null,
  noteError: null,
  hasMoreNotes: true,
  isFetchingNotes: null,
  newNote: null,
  editedNote: null,
  noteDeleted: false
};

export default (state = initialState, { type, payload = {} }) => {

  switch (type) {
    case `${actionTypes.GET_NOTES}_SUCCESSFUL`:
      return {
        ...state,
        notes: [...state.notes, ...payload.data],
        currentPageAndMetaData: payload,
        hasMoreNotes: !!payload.next_page_url,
        isFetchingNotes: false,
        newNote: null,
        noteError: null
      };
    case `${actionTypes.GET_NOTES}_UNSUCCESSFUL`:
      return {
        ...state,
        isFetchingNotes: false,
        noteError: payload
      };
    case actionTypes.FETCHING_NOTES:
      return {
        ...state,
        isFetchingNotes: true,
      };
    case `${actionTypes.SAVE_NOTE}_SUCCESSFUL`:
      return {
        ...state,
        notes: [payload, ...state.notes],
        newNote: payload,
        noteError: null
      };
    case `${actionTypes.SAVE_NOTE}_UNSUCCESSFUL`:
      return {
        ...state,
        newNote: null,
        noteError: payload
      };
    case `${actionTypes.UPDATE_NOTE}_SUCCESSFUL`:
      const updatedNotes = getNotesAfterUpdate(state.notes, payload);

      if (!updatedNotes) {
        return {
          ...state,
          editedNote: null,
          noteError: null
        };
      }

      return {
        ...state,
        notes: updatedNotes,
        editedNote: payload,
        noteError: null
      };
    case `${actionTypes.UPDATE_NOTE}_UNSUCCESSFUL`:
      return {
        ...state,
        editedNote: null,
        noteError: payload
      };
    case `${actionTypes.DELETE_NOTE}_SUCCESSFUL`:
      const notesAfterDelete = getNotesAfterDelete(state.notes, payload.extraData.noteId);

      if (!notesAfterDelete) {
        return {
          ...state,
          noteDeleted: false,
          noteError: null
        };
      }

      return {
        ...state,
        notes: notesAfterDelete,
        noteDeleted: true,
        noteError: null
      };
    case `${actionTypes.DELETE_NOTE}_UNSUCCESSFUL`:
      return {
        ...state,
        noteDeleted: true,
        noteError: payload
      };
    case actionTypes.CLEAR_NOTE_ERROR:
      return {
        ...state,
        noteError: null,
        newNote: null,
        editedNote: null,
        noteDeleted: false,
      };
    case `${actionTypes.LOGOUT}_SUCCESSFUL`:
      return initialState;
    default:
      return state;
  }
};

const getNotesAfterUpdate = (notes, payload) => {
  const index = notes.findIndex(note =>
    note.id === payload.id && note.updated_at !== payload.updated_at);

  if (index === -1) {
    return null;
  }

  notes.splice(index, 1);

  return [payload, ...notes];
};

const getNotesAfterDelete = (notes, noteId) => {
  const index = notes.findIndex(note => note.id === noteId);

  if (index === -1) {
    return null;
  }

  notes.splice(index, 1);

  return [...notes];
};
