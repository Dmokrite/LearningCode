"use strict";
class AquaticAnimal {
    constructor() {
        this.numberOfLegs = 0;
    }
}
class EarthAnimal {
    constructor() {
        this.numberOfLegs = 4 | 2;
    }
}
function makeScream(animaux) {
    animaux.forEach(animal => animal.shout());
}
function makeSwim(animauxAquatiques) {
    animauxAquatiques.forEach(animal => animal.swim());
}
class Shark extends AquaticAnimal {
    swim() {
        console.log("Le requin nage dans la mer.");
    }
    shout() {
        console.log("Le requin émet un cri qui rappelle la musique des dents de la mer.");
    }
}
class SnoopDog extends EarthAnimal {
    shout() {
        console.log("SnoopDog fume et aboie.");
    }
}
makeScream([new Shark(), new SnoopDog()]);
makeSwim([new Shark()]);
