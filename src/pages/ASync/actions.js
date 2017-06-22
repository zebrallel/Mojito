import makeActionCreator from '../../common/makeActionCreator';

export const MAP = {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT'
};

export const actions = {
    doIncrease : makeActionCreator(MAP.INCREMENT, 'num'),
    doDecrease : makeActionCreator(MAP.DECREMENT, 'num')
};