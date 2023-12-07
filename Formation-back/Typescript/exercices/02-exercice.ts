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
  