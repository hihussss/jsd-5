/* eslint-disable no-undef */
import { Bowman } from '../class/Bowman.js'



test('Правильно создается персонаж',() => {
    const result = new Bowman('Лучник', 'Bowman')
    const expected = {
        name: 'Лучник', 
        type: 'Bowman', 
        health: 100, 
        level: 1, 
        attack: 25, 
        defence: 25}
    expect(result).toEqual(expected)
})