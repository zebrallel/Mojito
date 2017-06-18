import makeActionCreator from '../../common/makeActionCreator';

export const ADD_ITEM = 'ADD_ITEM';
export const addTodoItem = makeActionCreator(ADD_ITEM, 'item');

export const MINUS_ITEM = 'MINUS_ITEM';
export const minusTodoItem = makeActionCreator(MINUS_ITEM, 'index');