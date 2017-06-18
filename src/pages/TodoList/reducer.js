import {ADD_ITEM, MINUS_ITEM} from './actions';

const InitialState = {
    todos : [
        'init thing'
    ]
};

export const todo = (state = InitialState, action)=>{

    switch (action.type){
        case ADD_ITEM :
            state.todos.push(action.item);

            // 为何要使用Object.assign ? redux会对state进行Shallow comparison，若state发生变化会执行mapStateToProps
            return Object.assign({}, state);
        case MINUS_ITEM :
            state.todos.splice(action.index, 1);

            return Object.assign({}, state);
    }

    return state;
};