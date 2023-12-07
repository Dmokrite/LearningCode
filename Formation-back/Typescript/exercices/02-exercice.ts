interface Animal {
    numberOfLegs: number;
    shout(): void;
    swim?(): void;
}
  
abstract class AquaticAnimal implements Animal {
    numberOfLegs: number = 0;
    abstract swim(): void;
    abstract shout(): void;
}
  
abstract class EarthAnimal implements Animal {
    abstract shout(): void;
    numberOfLegs: number = 4 | 2;
}
  
function makeScream(animaux: Animal[]): void {
    animaux.forEach(animal => animal.shout());
}
  
function makeSwim(animauxAquatiques: AquaticAnimal[]): void {
    animauxAquatiques.forEach(animal => animal.swim());
}
  
class Shark extends AquaticAnimal {
    swim(): void {
      console.log("Le requin nage dans la mer.");
    }
  
    shout(): void {
      console.log("Le requin émet un cri qui rappelle la musique des dents de la mer.");
    }
}
  
class SnoopDog extends EarthAnimal {
    shout(): void {
      console.log("SnoopDog fume et aboie.");
    }
}
  
makeScream([new Shark(), new SnoopDog()]);
makeSwim([new Shark()]);
  
/*
Créer une interface Animol qui servira de base à 2 classes Abstraites.
Elle forcera nos classe abstraite à avoir une méthode "shout" et une propriété nombre de pattes.

Ensuite, créer 2 classes abstraites "AquaticAnimal" et "EarthAnimal" qui implémente l'interface Animal.

Pour finir, créer 2 fonctions, 
la première "faireCrier" qui accepte un tableau d'animal et qui éxecute la fonction "shout" de chacun de ses animaux.
la deuxième "faireNager" qui accepte un tableau d'animal aquatique (Aquaticanimal)  et qui les fais tous nager 

interface Animol {
    shout(): void;
    pawCount: number;
}

abstract class AquaticAnimal implements Animol {
    abstract pawCount: number;
    abstract shout(): void;
    abstract swim(): void;
}

abstract class EarthAnimal implements Animol {
    abstract shout(): void;
    abstract pawCount: number;
}

function faireCrier (animals: Animol[]) {
    for (const animal of animals) {
        animal.shout();
    }
}

function faireNager (aquaticAnimals: AquaticAnimal[]) {
    for (const aquaticAnimal of aquaticAnimals) {
        aquaticAnimal.swim();
    }
}

class Shark extends AquaticAnimal {
    pawCount = 0;
    shout(): void {
        console.log("Lance la musique des dents de la mer");
    }
    swim(): void {
        console.log("Je nage et je suis un requin");
    }
}

class Snake extends EarthAnimal {
    pawCount = 0;
    shout(): void {
        console.log("Je crie pas parce que j'entend pas");       
    }   
}

faireCrier([new Shark(), new Snake()]);
faireNager([new Shark()]);
*/