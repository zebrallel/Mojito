import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import logger from 'redux-logger';

const store = createStore(combinedReducers, applyMiddleware(logger));

export default store;
