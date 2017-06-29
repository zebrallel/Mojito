import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [
    logger,
    thunk
];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
