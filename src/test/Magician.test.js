/* eslint-disable no-undef */

import { Magician } from '../class/Magician.js'



test('Правильно создается персонаж',() => {
    const result = new Magician('Маг', 'Magician')
    const expected = {
        name: 'Маг', 
        type: 'Magician', 
        health: 100, 
        level: 1, 
        attack: 10, 
        defence: 40}
    expect(result).toEqual(expected)
})