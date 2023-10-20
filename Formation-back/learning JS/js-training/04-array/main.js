let mesNoms = new Array("Jean", "Vince");
const noms = ["Graig", "Amant"];
// noms = ["Jean", "Lucas", "Jules"];

//ajouter un élément à la fin de mon tableau
noms.push("Adrien");

//ajouter un élément en début de tableau
noms.unshift("Bruno le mort");

// retirer un élément à la fin de mon tableau
noms.pop();

// retirer un élément au début début de mon tableau
noms.shift();
console.log(noms);

const mesNomsPref = ["Amorhit", "Stïve", "Rhaddah","Vince"]

// retirer un élément au milieu du tableau 
// mesNomsPref.splice(2,1)
// console.log(mesNomsPref);

// rajouter une élément au milieu de mon tableau
mesNomsPref.splice(2,0, "Deny")
console.log(mesNomsPref);

let line ="Vincenzo le chat";
const myArray = line.split(" ");
console.log(myArray);

let newLine = myArray.join("-");
console.log(newLine);

const classes = ["Sorcier", "Guerrier", "Démoniste", "Prêtre", "Chasseur"];
console.log(classes);
// afficher le contenu de l'array sous cette forme

// classe n°1 : le Sorcier
// classe n°2 : le Guerrier
// classe n°3 : le Démoniste
// classe n°4 : le Prêtre
// classe n°5 : le Chasseur


for(let i = 0; i < classes.length; i++ ){
    console.log("classe n°"+ (i+1) + " le "+ classes[i]);
}

console.log(classes.length);