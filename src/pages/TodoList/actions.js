import makeActionCreator from '../../common/makeActionCreator';

export const ADD_ITEM = 'ADD_ITEM';
export const addTodoItem = makeActionCreator(ADD_ITEM, 'item');