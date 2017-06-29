import makeActionCreator from '../../common/makeActionCreator';

export const MAP = {
    SQUARE : 'SQUARE'
};

const squareAction = makeActionCreator(MAP.SQUARE, 'num');

export const actions = {
    square : (num)=>{
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch(squareAction(num));
            }, 1000);
        }
    }
};