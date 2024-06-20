import {createCharacter} from "../src/index.js"

import {test, expect,} from '@jest/globals';



const dataList = [
    ['Лучник', 'Bowman', {name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25}],
    ['Мечник', 'Swordsman', {name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}],
    ['Маг', 'Magician', {name: 'Маг', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
    ['Демон', 'Daemon', {name: 'Демон', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40}],
    ['Нежить', 'Undead', {name: 'Нежить', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}],
    ['Зомби', 'Zombie', {name: 'Зомби', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}],
    ['Некорректное имя', 'Undead', 'имя должно быть меньше 10ти символов'],
    ['f', 'Zombie', 'имя должно быть больше 2х символов'],
    ['Лучник', 'Pokemon', 'тип персонажа должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
]



const handler = test.each(dataList);



handler('создание персонажа name %s and type %s', (name, type, expected) => {
    const result = createCharacter(name, type)
    if (expected instanceof String){
        expect(result).toBe(expected)
    }else if (expected instanceof Object){
        expect(result).toEqual(expected)
    }
});


test('leveliper', () => {
    const result = createCharacter('Лучник', 'Bowman')
    result.levelUp()
    expect(result).toEqual({name: 'Лучник', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30})
})

test('DeadLevelUp', () => {
    const result = createCharacter('Лучник', 'Bowman')
    result.health = 0
    result.levelUp()
    expect(result).toEqual({name: 'Лучник', type: 'Bowman', health: 0, level: 1, attack: 25, defence: 25})
})

test('damage', () => {
    const result = createCharacter('Лучник', 'Bowman')
    result.damage(10)
    expect(result).toEqual({name: 'Лучник', type: 'Bowman', health: 92.5, level: 1, attack: 25, defence: 25})
})

test('DeadDamage', () => {
    const result = createCharacter('Лучник', 'Bowman')
    result.health = 0
    result.damage(10)
    expect(result).toEqual({name: 'Лучник', type: 'Bowman', health: 0, level: 1, attack: 25, defence: 25})
})