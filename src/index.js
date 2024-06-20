import {error} from './error.js'
import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from './character.js'

const spisokType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

export function createCharacter (name, type) {
    if (name.length<2 ){
        error('имя должно быть больше 2х символов')
    }else if ( name.length > 10){
        error('имя должно быть меньше 10ти символов')    
    }else if (!spisokType.includes(type)) {
        error('тип персонажа должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
    }else{
    switch (type) {
        case 'Bowman':
            return new Bowman(name, type, 100, 1, 25, 25)
        case 'Swordsman':
            return new Swordsman(name, type, 100, 1, 40, 10)
        case 'Magician':
            return new Magician(name, type, 100, 1, 10, 40)
        case 'Daemon':
            return new Daemon(name, type, 100, 1, 10, 40)
        case 'Undead':
            return new Undead(name, type, 100, 1, 25, 25)
        case 'Zombie':
            return new Zombie(name, type, 100, 1, 40, 10)                    
    }
}
}


