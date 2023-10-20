/*
*LES CONDITIONS
*/

/*
const age = prompt ()
if (age >= 18) {
    console.log("Vous êtes majeur")
} else {
    console.log("Vous êtes mineur")
}
*/

/*
const age = prompt ("Quel est vôtre age ?")
const pays = prompt ("Quel est vôtre pays ?")
if ((pays === "FR" && age >= 18) || (pays === "US" && age >= 16)) {
    console.log("Vous avez le droit de conduire")
} else {
    console.log("Vous n'avez pas le droit de conduire")
}
*/

/*
const age = prompt ("Quel est vôtre age ?")
const pays = prompt ("Quel est vôtre pays ?")
const peutConduireFrance = pays === "FR" && age >= 18
const peutConduireUs = pays === "US" && age >= 16
if (peutConduireFrance) {
    console.log("Vous avez le droit de conduire en France")
} else if (peutConduireUs) {
    console.log("Vous avez le droit de conduire aux états-unis")
} else {
    console.log("Vous n'avez pas le droit de conduire")
}
*/

/*
const age = prompt ("Quel est vôtre age ?")
const pays = prompt ("Quel est vôtre pays ?")
const peutConduireFrance = pays === "FR" && age >= 18
const peutConduireUs = pays === "US" && age >= 16

*!true = false, !false = true
if (!peutConduireFrance && !peutConduireUs){            
    console.log("Vous n'avez pas le droit de conduire")
} else {
    console.log("Vous avez le droit de conduire")
}
*/

/*
const age = prompt ("Quel est vôtre age ?")
const pays = prompt ("Quel est vôtre pays ?")
const peutConduireFrance = pays === "FR" && age >= 18
const peutConduireUs = pays === "US" && age >= 16

* Ancienne méthode, rend le code lourd à cause des "breaks" mais peut encore s'utilisé dans certains cas
switch (pays){    
    case "FR":
        console.log("Je suis en France")
        break
    case "US":
        console.log("Je suis aux états-unis")
        break
    default:
        console.log("Je suis dans un pays inconnu")
        break
}
*/

/*
const age = prompt ("Quel est votre age ?")
const film = ["Lilo&Stitch", "Matrix",  "Evil Dead"]
if (age <= 13) {
    console.log(film[0])
} else if (age < 18){
    console.log(film[1])
} else {
        console.log(film[2])
}
*/

/*
*Excercices

const year = 2023
const birthyear = prompt ("Quel est votre année de naissance ?")
const age = year - birthyear
if (age <= 13) {
    console.log("Lilo&Stitch")
} else if (age < 18){
    console.log("Matrix")
} else {
        console.log("Evil Dead")
}
*/

/*
const a = prompt ("Entrée un premier nombre")
const b = prompt ("Entrée un second nombre")
const result = a * b
if (result > 0) {
    console.log(`${a}x${b}=${result} est positif`)
} else {
    console.log(`${a}x${b}=${result} est négatif`)
}
*/

/*
const a = prompt ("Entrée un premier nombre")
const b = prompt ("Entrée un second nombre")
const result = a * b
let signe
if (result >= 0) {
    signe = `positif`
} else {
    signe = `négatif`
}
console.log(`${a}x${b}=${result} est ${signe}`)
*/

/*
const a = prompt ("Entrée un premier nombre")
const b = prompt ("Entrée un second nombre")
const result = a * b
let signe
if (isNaN(result)) {
    console.log(`opération impossible : ${a}x${b}`)
} else {
    if (result >= 0) {
    signe = `positif`
} else {
    signe = `négatif` }
}
console.log(`${a}x${b}=${result} est ${signe}`)
*/

/*
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-2));
  * Résultat attendu : « PAS positif »
*/

/*
*Tri à bulles
const tableauNonTrie = [8, 15, 3, 22, 10, 5, 17, 19, 12, 6];
console.log("Tableau non trié : " + tableauNonTrie);

* Définit une fonction de tri à bulles qui prend un tableau en argument
const triABulles = (tableau) => {
* Stocke la longueur du tableau dans la variable 'longueur'
const longueurTableau = tableau.length; 
  
* Variable pour vérifier si le tableau est trié à chaque itération
let faisLeTrie; 

  do {
    * Initialise la variable 'estTrie' à false
    faisLeTrie = false; 

    * Parcourt le tableau
    for (let i = 0; i < longueurTableau - 1; i++) {
      * Vérifie si l'élément actuel est supérieur à l'élément suivant
      if (tableau[i] > tableau[i + 1]) {
        * Échange les éléments s'ils sont dans le mauvais ordre
        const temp = tableau[i];
        tableau[i] = tableau[i + 1];
        tableau[i + 1] = temp;
        * Définit 'estTrie' à true car un échange a eu lieu
        faisLeTrie = true; 
      }
    }
  * Continue tant que le tableau n'est pas trié
} while (faisLeTrie); 

  * La fonction ne retourne rien, mais le tableau est trié sur place
};

* Appelle la fonction de tri à bulles sur le tableau non trié
triABulles(tableauNonTrie);

* Affiche le tableau trié dans la console
console.log("Tableau trié : " + tableauNonTrie);
*/

/*
*Correction du tri à bulles avec affichage des console.log à la fin du code
const tableauNonTrie = [8, 15, 3, 22, 10, 5, 17, 19, 12, 6];

const tableauNonTrieCopie = [...tableauNonTrie];

const triABulles = (tableau) => {
  const longueurTableau = tableau.length;
  let faisLeTrie;

  do {
    faisLeTrie = false;

    for (let i = 0; i < longueurTableau - 1; i++) {
      if (tableau[i] > tableau[i + 1]) {
        const temp = tableau[i];
        tableau[i] = tableau[i + 1];
        tableau[i + 1] = temp;
        faisLeTrie = true;
      }
    }
  } while (faisLeTrie);
};

triABulles(tableauNonTrie);

console.log("Tableau non trié : " + tableauNonTrieCopie);
console.log("Tableau trié : " + tableauNonTrie);
*/