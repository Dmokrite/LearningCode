"use strict";
class Chien {
    constructor(name) {
        this.name = name;
        this.type = "canin";
    }
}
const monChien = new Chien("Machin");
const monChat = {
    name: 'Truc',
    type: "félin",
};
function faireManger(animaux) {
    const animalsName = animaux.map(animal => animal.name);
    const typesAnimal = animaux.map(animal => animal.type).join(' et ');
    console.log(`${animalsName.join(' et ')} qui sont de type ${typesAnimal} sont en train de mangés.`);
}
faireManger([monChien, monChat]);
