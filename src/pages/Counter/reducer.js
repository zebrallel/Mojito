import { MAP as Action } from './actions';

const initState = {
    count: 0
};

export const counter = (state = initState, action) => {
    switch (action.type) {
        case Action.INCREMENT:
            state.count += action.num;

            return Object.assign({}, state);
        case Action.DECREMENT:
            state.count -= action.num;

            return Object.assign({}, state);
    }

    return state;
};
