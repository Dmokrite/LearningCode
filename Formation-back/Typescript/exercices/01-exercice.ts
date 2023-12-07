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

/*
interface Animal {
    name: string,
    age: number,
}

function getAgeSum(animals: Animal[]) {
    let ageTotal = 0
    const animalsName: string[] = [];

    for (const animal of animals) {
      ageTotal += animal.age;
      animalsName.push(animal.name);
    } 

    console.log(`ensemble, les animaux ${animalsName.join(', ')} ont ${ageTotal} ans`);
 }

 class Otter implements Animal {
    constructor(public name: string, public age: number) {} 
 } 

 const dramix = new Otter('Dramix', 4);
  
 const chouette: Animal = {
    name: 'Edwige',
    age: 8
 }

 getAgeSum([dramix, chouette]);
 */