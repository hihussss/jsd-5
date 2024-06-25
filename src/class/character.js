
export class Character  {
    constructor(name,type) {
        if (name.length<2 ){
            throw new Error('имя должно быть больше 2х символов')
        }else if ( name.length > 10){
            throw new Error('имя должно быть меньше 10ти символов')
        }else if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('тип персонажа должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
        }else {
            this.name = name
            this.type = type
            this.health = 100
            this.level = 1
            this.attack = undefined
            this.defence = undefined
        }
        
    }

    levelUp(){
        if (this.health > 0){
        this.level += 1
        this.attack *= 1.2
        this.defence *= 1.2
        this.health = 100
        }else{
            throw new Error('нельзя повысить уровень умершего');
        }
    }

    damage(points){
        if (this.health > 0){
        this.health -= points * (1 - this.defence / 100)
        }else {
            throw new Error('нельзя нанести урон мертвому персонажу');
        }

}
}













