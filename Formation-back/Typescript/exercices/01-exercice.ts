/*
interface Animal {
    name: string;
    type: string;
}

class Chien implements Animal {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = "canin";
    }
}

const monChien = new Chien("Machin");
const monChat: Animal = {
    name: 'Truc',
    type: "félin",
};

function faireManger(animaux: Animal[]): void {
    const animalsName = animaux.map(animal => animal.name).join(' et ');
    const typesAnimal = animaux.map(animal => animal.type).join(' et ');

    console.log(`${animalsName} qui sont de type ${typesAnimal} sont en train de mangés.`);
}

faireManger([monChien, monChat]);
*/
