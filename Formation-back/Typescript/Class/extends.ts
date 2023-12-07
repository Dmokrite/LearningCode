// on nne peux que l'extennds, elle sert de base de logique
abstract class Player {
    abstract className: String;
    constructor(private health: number, 
                protected mana: number,
                private name: string,
            ) {
                console.log(this.name);
            }
            attack() {
                console.log("l'attaque de base");
                this.mana -= 1;
            }

            abstract dance: () => void;
            abstract wave (): void;
}

    // On ne peut pas y accéder car la propriété est private et n'est accessible qu'au sein de la classe
    // const dummyPlayer = new Player(42, 42, 'Bidon');
    // console.log(dummyPlayer.name)

class Warrior extends Player {
    className = "Guerrier"
    attack() {
        //super fais référence à la classe parent
        super.attack()
        console.log('je crie');
        // contrairement à ma propriété name qui est private, ma propriété mana
        // est protected. Et donc, accessible aussi dans toutes les classes qui "extends"
        // Player
        console.log(this.mana, this.className);
    }
    dance = () => {
        console.log("je danse le mia");
    }
    wave () {
        console.log("je fais coucou");
    }  
}

const garosh = new Warrior(42, 42, "garosh");
garosh.attack();
garosh.dance();
garosh.wave();