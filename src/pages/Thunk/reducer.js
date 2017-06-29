import { MAP } from './actions';

const initState = {
    num : 2
};

export const thunk =  (state = initState, action)=>{
    switch (action.type){
        case MAP.SQUARE:
            const n = action.num;

            return {num : n * n}
    }

    return state;
};