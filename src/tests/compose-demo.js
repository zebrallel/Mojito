function a(next) {
    console.log('wrap a');
    return action => {
        console.log('a do staff');
        return next(action);
    };
}

function b(next) {
    console.log('wrap b');
    return action => {
        console.log('b do staff');

        return next(action);
    };
}

function c(next) {
    console.log('wrap c');
    return action => {
        console.log('c do staff');

        return next(action);
    };
}

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

var d = compose(a, b, c);
//var d = (...args)=>a(b(c(...args)));

d(function(action) {
    console.log(action);
})({
    name: 'action'
});
