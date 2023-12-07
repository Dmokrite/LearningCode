"use strict";
class Pomme {
    constructor(color, size) {
        this.size = size;
        this.color = color;
    }
    getDescription() {
        return `Je suis une pomme ${this.color}. Je mesure ${this.size}`;
    }
}
const pommeDeBruno = new Pomme("jaune et rouge", "une demi-souris logitech de haut");
pommeDeBruno.acidityLevel = undefined;
const pommeApple = new Pomme("grise", "un quart de souris logitech");
pommeApple.acidityLevel = '0, ça ne se mange pas. C\'est un logo :/';
console.log(pommeDeBruno.getDescription());
console.log(pommeApple.getDescription());
class Poire {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
    getDescription() {
        return `Je suis une poire ${this.color} et de taille ${this.size}`;
    }
}
const Pêche = {
    color: 'pêche',
    size: '1/3 de souris logitech',
    getDescription: () => {
        return 'je suis une pêche';
    }
};
function logFruitColor(fruit) {
    console.log('couleur :', fruit.color);
}
logFruitColor(Pêche);
logFruitColor(pommeDeBruno);
