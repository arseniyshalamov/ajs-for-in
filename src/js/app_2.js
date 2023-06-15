'use strict';

export default function getAttacks(character) {
    let newArr = [];

    character.special.forEach(element => {
        let newElement = {};
        const { id, name, icon, description = 'in the proces' } = element;
        newElement['id'] = id;
        newElement['name'] = name;
        newElement['icon'] = icon;
        newElement['description'] = description;
        newArr.push(newOnewElementbj);
    });

    return newArr;
}