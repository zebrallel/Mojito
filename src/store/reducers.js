import { combineReducers } from 'redux';

// reducers
import { todo } from '../pages/TodoList/reducer';
import { async } from '../pages/ASync/reducer';

export default combineReducers({
    todo,
    async
});
