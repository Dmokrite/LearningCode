interface Fruit {
    color: string;
    size: string;
    getDescription: () => string;
}

class Pomme implements Fruit {
    color: string;
    acidityLevel: string | undefined;

    constructor(color: string, public size: string) {
        this.color = color;
    }

    getDescription() {
        return `Je suis une pomme ${this.color}. Je mesure ${this.size}`;
    }
} 

const pommeDeBruno = new Pomme("jaune et rouge", "une demi-souris logitech de haut");
pommeDeBruno.acidityLevel = undefined;

const pommeApple = new Pomme("grise","un quart de souris logitech");
pommeApple.acidityLevel = '0, ça ne se mange pas. C\'est un logo :/';

console.log(pommeDeBruno.getDescription());
console.log(pommeApple.getDescription());


class Poire implements Fruit {
  constructor(public color: string, public size: string) {}

  getDescription() {
    return `Je suis une poire ${this.color} et de taille ${this.size}`;
  }
}

// respecte le minimum de l'interface. Elle ne demande pas forcément que la variable soit une classe
const Pêche: Fruit =  {
color: 'pêche',
size: '1/3 de souris logitech',
getDescription: () => {
    return 'je suis une pêche';
}
}

// qu'elle recoive un objet ou l'instance d'une classe, notre fonction renverra le même 
// résultat. tant que l'argument respecte l'interface fruit :)
function logFruitColor(fruit: Fruit) {
    console.log('couleur :', fruit.color);
}
logFruitColor(Pêche);
logFruitColor(pommeDeBruno);