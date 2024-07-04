import { Bowman } from "../class/Bowman.js";
import { Character } from "../class/Character.1.js";

import {test, expect,} from '@jest/globals';




test('Ошибка в name', () => {
    expect(() => new Character('Л', 'Bowman')).toThrow('имя должно быть больше 2х символов')
})

test('Ошибка в name', () => {
    expect(() => new Character('Лучdsadasddsad', 'Bowman')).toThrow('имя должно быть меньше 10ти символов')
})

test('Ошибка в type', () => {
    expect(() => new Character('Лучник', 'B')).toThrow('тип персонажа должен быть одним из следующих:Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
})


test('leveliper', () => {
    const result = new Bowman('Лучник', 'Bowman')
    result.levelUp()
    expect(result).toEqual({name: 'Лучник', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30})
})

test('DeadLevelUp', () => {
    const result = new Bowman('Лучник', 'Bowman')
    result.health = 0
    expect(() => {result.levelUp()}).toThrow()
})

test('damage', () => {
    const result = new Bowman('Лучник', 'Bowman')
    result.damage(10)
    expect(result).toEqual({name: 'Лучник', type: 'Bowman', health: 92.5, level: 1, attack: 25, defence: 25})
})

test('DeadDamage', () => {
    const result = new Bowman('Лучник', 'Bowman')
    result.health = 0
    expect(() => {result.damage(10)}).toThrow()
})