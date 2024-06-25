import { Zombie } from '../class/Zombie.js'
import {test, expect} from '@jest/globals'


test('Правильно создается персонаж',() => {
    const result = new Zombie('Зомби', 'Zombie')
    const expected = {
        name: 'Зомби', 
        type: 'Zombie', 
        health: 100, 
        level: 1, 
        attack: 40, 
        defence: 10}
    expect(result).toEqual(expected)
})