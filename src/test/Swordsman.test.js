/* eslint-disable no-undef */

import { Swordsman } from '../class/Swordsman.js'



test('Правильно создается персонаж',() => {
    const result = new Swordsman('Мечник', 'Swordsman')
    const expected = {
        name: 'Мечник', 
        type: 'Swordsman', 
        health: 100, 
        level: 1, 
        attack: 40, 
        defence: 10}
    expect(result).toEqual(expected)
})