export default (type, ...args) => (...params) => {
    const action = {};

    args.forEach((item, idx) => {
        action[item] = params[idx];
    });

    return Object.assign(action, { type });
};
