// function Pokemon(name, type) {
//     this.name = name
//     this.type = type
// }

// const pikachu = new Pokemon('Pikachu', 'Electric')

class Pokemon {
    #hp = 100
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    attack() {
        console.log(`${this.name} attack with ${this.type}`)
    }
    takeDamage() {
        this.hp -= 10
    }
    get hp() {
        return this.#hp
    }
    set hp(hp) {
        this.#hp = hp
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super("Pikachu", "Electric")
    }
    attack() {
        console.log(`${this.name} attack with Thundershock`)
    }
}

const pikachu = new Pikachu();
pikachu.attack();
pikachu.takeDamage();

pikachu.hp = 5000

console.log(pikachu)

console.log(pikachu instanceof Pikachu)
console.log(pikachu instanceof Pokemon)