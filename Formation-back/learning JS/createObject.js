/*
*CREATION D'OBJET

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 18,
    notes: [14, 15, 14, 16], <===== propriété length pour connaitre la taille notes.length (fonctionne autant sur: string, number, tableau)
    job: {
        name: "Informaticien",
        hours: 35
    },
    'Les gens' : 23 <====== possibilité de déclarer une key comme ça, code accepté
    [b]: 23 <======= version plus propre que la ligne 39 pour lier à une variable
}
person.notes[2] = 29 <=====modifier une valeur dans un tableau
person["firstname"]
*/

/*
function findFruits(){
    const fruits = ["pomme", "banane", "fraise", "orange", "raisin", "kiwi"];
    const seekFruit = prompt('Entrez le nom du fruit que vous recherchez :');
    const foundFruit = fruits.find(fruit => fruit.toLowerCase() === seekFruit.toLowerCase());
  
  if (foundFruit){
    console.log("Le fruit " + foundFruit + " a été trouvé.")
  } else {
    console.log("Le fruit " + seekFruit + " n'a pas été trouvé.")
  }
}

findFruits()
*/

/*
function findFruits() {
    const fruits = ["pomme", "banane", "fraise", "orange", "raisin", "kiwi"];
    const seekFruit = prompt('Entrez le nom du fruit que vous recherchez :');
    let foundFruit = null;

    for (let i = 0; i < fruits.length && !foundFruit; i++) {
        if (fruits[i].toLowerCase() === seekFruit.toLowerCase()) {
            foundFruit = fruits[i];
        }
    }

    if (foundFruit) {
        console.log("Le fruit " + foundFruit + " a été trouvé.");
    } else {
        console.log("Le fruit " + seekFruit + " n'a pas été trouvé.");
    }
}

findFruits();
*/

/*
function findFruits() {
    const fruits = ["pomme", "banane", "fraise", "orange", "raisin", "kiwi"];
    const seekFruit = prompt('Entrez le nom du fruit que vous recherchez :');
    let foundFruit = null;
    let i = 0;

    while (i < fruits.length && !foundFruit) {
        if (fruits[i].toLowerCase() === seekFruit.toLowerCase()) {
            foundFruit = fruits[i];
        }
        i++;
    }

    if (foundFruit) {
        console.log("Le fruit " + foundFruit + " a été trouvé.");
    } else {
        console.log("Le fruit " + seekFruit + " n'a pas été trouvé.");
    }
}

findFruits();
*/

/*
function findPerson() {
    const personnes = [
        { nom: "Doe", prenom: "John", age: 30 },
        { nom: "Smith", prenom: "Jane", age: 25 },
        { nom: "Johnson", prenom: "Bob", age: 35 },
        { nom: "Williams", prenom: "Alice", age: 28 },
        { nom: "Brown", prenom: "Michael", age: 40 },
        { nom: "Anderson", prenom: "Emily", age: 22 },
        { nom: "Taylor", prenom: "David", age: 29 }
    ];
    
    const seekNom = prompt('Entrez le nom de la personne que vous recherchez :');
    const seekPrenom = prompt('Entrez le prénom de la personne que vous recherchez :');
    let foundPerson = null;

    for (let i = 0; i < personnes.length && !foundPerson; i++) {
        if (
            personnes[i].nom.toLowerCase() === seekNom.toLowerCase() &&
            personnes[i].prenom.toLowerCase() === seekPrenom.toLowerCase()
        ) {
            foundPerson = personnes[i];
        }
    }

    if (foundPerson) {
        console.log("La personne " + foundPerson.prenom + " " + foundPerson.nom + " a été trouvée. Age : " + foundPerson.age + " ans.");
    } else {
        console.log("La personne " + seekPrenom + " " + seekNom + " n'a pas été trouvée.");
    }
}

findPerson();
*/

/*
function findPerson() {
    const personnes = [
        { nom: "Doe", prenom: "John", age: 30 },
        { nom: "Smith", prenom: "Jane", age: 25 },
        { nom: "Johnson", prenom: "Bob", age: 35 },
        { nom: "Williams", prenom: "Alice", age: 28 },
        { nom: "Brown", prenom: "Michael", age: 40 },
        { nom: "Anderson", prenom: "Emily", age: 22 },
        { nom: "Taylor", prenom: "David", age: 29 }
    ];
    
    const seekNom = prompt('Entrez le nom de la personne que vous recherchez :');
    const seekPrenom = prompt('Entrez le prénom de la personne que vous recherchez :');
    let foundPerson = null;
    let i = 0;

    while (i < personnes.length && !foundPerson) {
        if (
            personnes[i].nom.toLowerCase() === seekNom.toLowerCase() &&
            personnes[i].prenom.toLowerCase() === seekPrenom.toLowerCase()
        ) {
            foundPerson = personnes[i];
        }
        i++;
    }

    if (foundPerson) {
        console.log("La personne " + foundPerson.prenom + " " + foundPerson.nom + " a été trouvée. Age : " + foundPerson.age + " ans.");
    } else {
        console.log("La personne " + seekPrenom + " " + seekNom + " n'a pas été trouvée.");
    }
}

findPerson();
*/
