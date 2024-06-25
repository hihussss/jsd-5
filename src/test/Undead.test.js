import { Undead } from '../class/Undead.js'
import {test, expect} from '@jest/globals'


test('Правильно создается персонаж',() => {
    const result = new Undead('Мертвяк', 'Undead')
    const expected = {
        name: 'Мертвяк', 
        type: 'Undead', 
        health: 100, 
        level: 1, 
        attack: 25, 
        defence: 25}
    expect(result).toEqual(expected)
})