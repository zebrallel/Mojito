export default (...args) => (...params) => {
    const type = args.shift();
    const action = {};

    args.forEach((item, idx) => {
        action[item] = params[idx];
    });

    return Object.assign(action, { type });
};
