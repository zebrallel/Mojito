import { combineReducers } from 'redux';

// reducers
import { counter } from '../pages/Counter/reducer';
import { thunk } from '../pages/Thunk/reducer';

export default combineReducers({
    counter,
    thunk
});
