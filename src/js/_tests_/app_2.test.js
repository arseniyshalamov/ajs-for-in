import getAttacks from '../app_2';

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
}

test('checking right attack list', () => {
    let attackList = getAttack(character);

    let expected = [
        {
            id: 8,
            name: 'Äâîéíîé âûñòðåë',
            icon: 'http://...',
            description: 'Äâîéíîé âûñòðåë íàíîñèò äâîéíîé óðîí',
        },
        {
            id: 9,
            name: 'Íîêàóòèðóþùèé óäàð',
            icon: 'http://...',
            description: 'Îïèñàíèå íåäîñòóïíî',
        }
    ];

    expect(attackList).toEqual(expected);
})