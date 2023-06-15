'use strict';

export default function getAttacks(character) {
    const newArr = [];
  
    character.special.forEach(({ id, name, icon, description = 'in the process' }) => {
      const newElement = { id, name, icon, description };
      newArr.push(newElement);
    });
  
    return newArr;
  }
  