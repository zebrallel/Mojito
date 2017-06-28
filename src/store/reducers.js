import { combineReducers } from 'redux';

// reducers
import { todo } from '../pages/TodoList/reducer';
import { counter } from '../pages/Counter/reducer';

export default combineReducers({
    todo,
    counter
});
