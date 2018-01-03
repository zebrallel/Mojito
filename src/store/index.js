import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [
    myMiddleware,
    thunk,
    logger
];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;

function myMiddleware({dispatch, getState}){
    return (next) => {

        return (action) => {
            next(action)
        }
    }
}

import main from '../tests/main';

main();
