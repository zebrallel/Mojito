import {createActions} from 'redux-actions';
import {INCREASE, DECREASE} from './constants';

export default createActions({
    [INCREASE]: num => ({num}),
    [DECREASE]: num => ({num})
})