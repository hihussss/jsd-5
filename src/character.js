import {error} from './error.js'
export class Character  {
    constructor(name,type,health,level,attack,defence) {
        this.name = name
        this.type = type
        this.health = health
        this.level = level
        this.attack = attack
        this.defence = defence    
    }

    levelUp(){
        if (this.health > 0){
        this.level += 1
        this.attack *= 1.2
        this.defence *= 1.2
        this.health = 100
        }else{
            error("нельзя повысить уровень умершего")
        }
    }

    damage(points){
        if (this.health > 0){
        this.health -= points * (1 - this.defence / 100)
        }else {
            error("нельзя нанести урон мертвому персонажу")
        }

}
}

export class Bowman extends Character {
    constructor (name,type,health,level,attack,defence) {
        super(name,type,health,level,attack,defence)
        
}
}

export class Swordsman extends Character {
    constructor (name,type,health,level,attack,defence) {
        super(name,type,health,level,attack,defence)
        
}
}

export class Magician extends Character {
    constructor (name,type,health,level,attack,defence) {
        super(name,type,health,level,attack,defence)
        
}
}

export class Daemon extends Character {
    constructor (name,type,health,level,attack,defence) {
        super(name,type,health,level,attack,defence)
        
}
}

export class Undead extends Character {
    constructor (name,type,health,level,attack,defence) {
        super(name,type,health,level,attack,defence)
        
}
}

export class Zombie extends Character {
    constructor (name,type,health,level,attack,defence) {
        super(name,type,health,level,attack,defence)
        
}
}

