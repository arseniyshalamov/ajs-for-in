import orderByProps from '../app';

import orderByProps from '../app.js';

let obj = {
    name: 'ìå÷íèê',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

test('Character Sorting function ', () => {
    let objEqual = {
        name: 'ìå÷íèê',
        level: 2,
        attack: 80,
        defence: 40,
        health: 10,
    };
    expect(orderByProps(obj, ['name', 'level'])).toEqual(objEqual);
});