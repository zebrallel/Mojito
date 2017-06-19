import { assert } from 'chai';
import { describe, it } from 'mocha';
import shallowEqual from './modules/shallowEqual';

describe('Different count of keys :', () => {
    const a = {
        name: 'callie'
    };

    const b = {
        name: 'callie',
        age: 18
    };

    describe(JSON.stringify(a), () => {
        describe(JSON.stringify(b), () => {
            it('shallowEqual(a, b) should be false', () => {
                assert.strictEqual(shallowEqual(a, b), false);
            });
        });
    });
});

describe('Different in deep object :', () => {
    const a = {
        name: 'callie',
        nickName: ['糖糖']
    };

    const b = {
        name: 'callie',
        nickName: ['糖糖']
    };

    describe(JSON.stringify(a), () => {
        describe(JSON.stringify(b), () => {
            it('shallowEqual(a, b) should be false', () => {
                assert.strictEqual(shallowEqual(a, b), false);
            });
        });
    });
});
