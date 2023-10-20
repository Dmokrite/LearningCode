//variables globales
//élem mémoires et écran
const memoryElt = document.querySelector("#memory");
const monitorElt = document.querySelector("#monitor");

//on stock la valeur de l'écran "précédent"
let previous = 0;

//on stock l'affichage
let display = "";

//on stock l'operation
let operation = null;

//on initialise la mémoire
let memory;

window.onload = () => {
  //on écoute les clics sur les touches
  let keys = document.querySelectorAll("span");

  for (let key of keys) {
    key.addEventListener("click", manageKeys);
  }
  //on écoute les touches du clavier
  document.addEventListener("keydown", manageKeys);

  //récupèrer de la mémoire depuis le stockage local
  memory = localStorage.memory ? parseFloat(localStorage.memory) : 0;
  if (memory != 0) memoryElt.style.display = "initial";
};

//cette function réagit au clic sur les touches
function manageKeys(event) {
  let key;

  //on liste les touches autorisées
  const keysList = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "Enter",
    ".",
    "Escape",
  ];

  //on vérifie si on a l'événement "keydown"
  if (event.type === "keydown") {
    //on compare la touche appuyée aux touches autorisées
    if (keysList.includes(event.key)) {
      //on empêche l'utilisation par défaut de la touche
      event.preventDefault();

      //on stock la touche choisi dans la variable touche
      key = event.key;
    }
  } else {
    key = this.innerText;
  }

  //vérifie si chiffres ou .
  if (parseFloat(key) >= 0 || key === ".") {
    //à vérifier pour ne pas mettre plusieurs points dans la chaine
    //on met à jour la valeur affichage et on affiche sur écran
    display = display === "" ? key.toString() : display + key.toString();
    monitorElt.innerText = display;
  } else {
    switch (key) {
      case "C":
      case "Escape":
        previous = 0;
        display = "";
        operation = null;
        monitorElt.innerText = 0;
        break;
      //calculs
      case "+":
      case "-":
      case "*":
      case "/":
        //on calcule la valeur résultats de l'étape précédente
        previous =
          previous === 0
            ? parseFloat(display)
            : calculate(previous, parseFloat(display), operation);

        //on met à jour l'écran
        monitorElt.innerText = previous;

        //on stock l'opération
        operation = key;

        //on réinitialise la variable d'affichage
        display = "";
        break;
      case "=":
      case "Enter":
        //on calcule la valeur résultats de l'étape précédente
        previous =
          previous === 0
            ? parseFloat(display)
            : calculate(previous, parseFloat(display), operation);

        //on met à jour l'écran
        monitorElt.innerText = previous;

        //on stock le résultat dans la variable d'affichage
        display = previous;

        //on reinit precedent
        previous = 0;
        break;

      //on gére la mémoire
      case "M+":
        //on stock en additionnant à la valeur en mémoire
        localStorage.memory = localStorage.memory
          ? parseFloat(localStorage.memory) + parseFloat(display)
          : parseFloat(display);

        //on affiche le M
        memoryElt.style.display = "initial";
        break;
      case "MC":
        //on efface la mémoire
        localStorage.memory = 0;

        //on efface le M
        memoryElt.style.display = none;
        break;
      case "MR":
        //on récupère la valeur stockée
        memory = localStorage.memory ? parseFloat(localStorage.memory) : 0;
        display = memory;
        monitorElt.innerText = memory;
        break;
      default:
        break;
    }
  }
}
/**
 *
 * effectue le calcul
 * @param {number} nb1
 * @param {number} nb2
 * @param {string} operation
 * @returns number
 */

function calculate(nb1, nb2, operation) {
  nb1 = parseFloat(nb1);
  nb2 = parseFloat(nb2);
  if (operation === "+") return nb1 + nb2;
  if (operation === "-") return nb1 - nb2;
  if (operation === "*") return nb1 * nb2;
  if (operation === "/") return nb1 / nb2;
}