/*
function sayHello(){
    console.log("Hello")
}
sayHello(); //ne pas oublier le point virgules entre deux instructions (functions) sinon ça ne fonctionnera pas

/*
*Iife (immediatly invoked function expression)
*cette methode permet d'appeler une fonction directement après l'avoir créée
*/

/*
(function ditHello(){
    console.log("hello")
})();

function sayMyName(name){
    name = name.toUpperCase();
    console.log(name)
};
sayMyName("Hello")
*/

/*
const listInvite = ["vince", "steve", "amaury", "amand", "audrey"];
const present =[];

for(let invite of listInvite){
    checkVideur(invite);
}
console.log(present)

function checkVideur(gens){
    if(gens === "amand"){
        console.log("la sortie est de ce coté " + gens)
    }else{
        console.log("Bienvenue "+gens+ " à la soirée")
        present.push(gens)
    }
}
*/

/*
*methode d'interpollation
*remplacez console.log("Bienvenue "+gens+ " à la soirée")
*par ceci
*console.log(`Bienvenue ${gens} à notre soirée`)
*/

/*
*functions qui retourne une info
*/

/*
function calcul(nbr1, nbr2){
    return nbr1 + nbr2
}
console.log(calcul(2,4))
*/

/*
*exo
*via 3 prompt retourné la moyenne des 3 derniers dans la console
  const nombre1 = parseFloat(prompt("Entrez le premier nombre :"))
  const nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"))
  const nombre3 = parseFloat(prompt("Entrez le troisième nombre :"))

  function calculerMoyenne() {
  if (isNaN(nombre1) || isNaN(nombre2) || isNaN(nombre3)) {
    return "Saisie invalide. Veuillez entrer des nombres valides."
  }
  const moyenne = (nombre1 + nombre2 + nombre3) / 3
  return "La moyenne des nombres est : " + moyenne
}

const resultat = calculerMoyenne()
console.log(resultat)
*/

/*
*via 3 prompt réalisez l'opération
prompt 1 number
prompt 2 opérateur
prompt3 number
*/

/*
const nombre1 = parseFloat(prompt("Entrez le premier nombre :"))
const operateur = prompt("Entrez l'opérateur (+, -, *, ou /) :")
const nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"))

function calculatrice() {

    if (isNaN(nombre1) || isNaN(nombre2)) {
      return "Saisie invalide. Veuillez entrer des nombres valides."
    }
  
    let resultat;
    switch (operateur) {
      case "+":
        resultat = nombre1 + nombre2
        break;
      case "-":
        resultat = nombre1 - nombre2
        break;
      case "*":
        resultat = nombre1 * nombre2
        break;
      case "/":
        if (nombre2 === 0) {
          return "Division par zéro impossible."
        }
        resultat = nombre1 / nombre2
        break;
      default:
        return "Opérateur invalide. Veuillez utiliser +, -, *, ou /."
    }
  
    return "Résultat : " + resultat
  }
  
  const resultat = calculatrice()
  console.log(resultat)
  */