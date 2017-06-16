import {ADD_ITEM} from './actions';

const InitialState = {
    todos : [
        'init thing'
    ]
};

export const todo = (state = InitialState, action)=>{
    switch (action.type){
        case ADD_ITEM :
            state.todos.push(action.item);

            return state; //TODO: 为何要使用Object.assign?
    }

    return state;
};