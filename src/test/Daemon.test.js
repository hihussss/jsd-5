/* eslint-disable no-undef */

import { Daemon } from '../class/Daemon.js'



test('Правильно создается персонаж',() => {
    const result = new Daemon('Демон', 'Daemon')
    const expected = {
        name: 'Демон', 
        type: 'Daemon', 
        health: 100, 
        level: 1, 
        attack: 10, 
        defence: 40}
    expect(result).toEqual(expected)
})