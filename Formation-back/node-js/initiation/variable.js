// let, c'est un mot clé qui permet de définir une variable
// dont le contenu peut changer
let banane = "banane";
banane = "banana";

// const, c'est un mot clé qui permet de définir une variable
// dont on ne peux pas changer la valeur
const ma_constante_pi = 3.14;
// renvoie une erreur
// ma_constante_pi = 4.2;

global.warming = "Les vaches réchauffent la planéte";
console.log(global);
// Dans node, si on essaie d'accéder à une variable qui n'existe pas dans notre fichier
// il essairai d'aller chercher dans l'objet global, la clé correspondant au nom de notre variable
console.log(warming);