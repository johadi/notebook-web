import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import noteReducer from './noteReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  noteState: noteReducer,
  userState: userReducer,
  authState: authReducer,
  loadingBar: loadingBarReducer
});
