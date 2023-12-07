"use strict";
class Player {
    constructor(health, mana, name) {
        this.health = health;
        this.mana = mana;
        this.name = name;
        console.log(this.name);
    }
    attack() {
        console.log("l'attaque de base");
        this.mana -= 1;
    }
}
class Warrior extends Player {
    constructor() {
        super(...arguments);
        this.className = "Guerrier";
        this.dance = () => {
            console.log("je danse le mia");
        };
    }
    attack() {
        super.attack();
        console.log('je crie');
        console.log(this.mana, this.className);
    }
    wave() {
        console.log("je fais coucou");
    }
}
const garosh = new Warrior(42, 42, "garosh");
garosh.attack();
garosh.dance();
garosh.wave();
