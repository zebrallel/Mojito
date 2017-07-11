import { handleActions } from 'redux-actions';
import {INCREASE, DECREASE} from './constants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
    count: 100
};

export const counter = handleActions({
    [INCREASE] : (state, action)=>{
        const nState = _cloneDeep(state);
        const {num} = action.payload;

        nState.count += num;

        return Object.assign({}, nState)
    },

    [DECREASE] : (state, action)=>{
        const nState = _cloneDeep(state);
        const {num} = action.payload;

        nState.count -= num;

        return Object.assign({}, nState);
    }
}, initState);