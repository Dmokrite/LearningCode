/*
const noms = ["Greg", "Amand"];

*add éléments fin de tableau
noms.push("Adrien");

*add aux début du tableau
noms.unshift("Bruno");

*retirer un élément à la fin
noms.pop();

*retirer une élément au début du tableau
noms.shift();

const mesNomsPref = ["Jason", "Dylan", "Bryan", "Barney"];

*retirer un élément au milieu du tableau
mesNomsPref.splice(2,1)
console.log(mesNomsPref)

*rajouter un élément au milieu du tableau
mesNomsPref.splice (2,1, "Deny");
console.log(mesNomsPref);

let line = "vincent le chat";
const myArray = line.split(" ");
console.log(myArray);

let newLine = myArray.join ("-");
console.log(newLine);
*/


/*
const classes = ["Warlock", "Priest", "War", "Hunt", "Mage"];

for (let i = 0; i < classes.length; i++){
    console.log("classe n° " + (i+1) +" le " +classes[i])
}
*/

/*
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