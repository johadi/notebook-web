import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

const middlewares = process.env.NODE_ENV === 'production' ?
  applyMiddleware(thunk) : applyMiddleware(thunk, logger);

export const store = createStore(reducers, {}, middlewares);
