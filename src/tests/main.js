var action = {
    type: 'ADD',
    payload: 100
}

function md1(action){
    action.payload += 1;
    return action;
}

function md2(action){
    action.payload += 2;
    return action;
}

// var action1 = md1(action);
// var action2 = md2(action);

function reducers(action) {
    //do something
    console.dir(action);
}

const middlewares = [
    md1,
    md2
]

function applyMiddleware(...middlewares){
    var mds = compose(...middlewares);

    return (action)=>{
        return mds(action)
    }
}

function compose(...func){
    return func.reduce((a, b) => {
        return (...args) => a(b(...args))
    })
}

export default () => {
    reducers(applyMiddleware(...middlewares)(action));
}
