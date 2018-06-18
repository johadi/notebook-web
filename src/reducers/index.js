import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as sweetAlertReducer } from 'react-redux-sweetalert';
import noteReducer from './noteReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  noteState: noteReducer,
  userState: userReducer,
  authState: authReducer,
  loadingBar: loadingBarReducer,
  sweetalert: sweetAlertReducer
});
