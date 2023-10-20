// if(condition){
//     // si la condition est remplie
//     // ...
// };


// if(true){
//     let toto = "toto"
// }

// = // assignation 
// == // comparaison de la valeur 
// 3 == 3 => true
// 3 == "3" => true

// ===  // comparaison de la valeur ET du type

//  3 === "3" => false

let myName = "Bruno";

if(myName === "Bruno"){
    console.log("ne parlons pas de Bruno");
}else {
    console.log("qui es-tu ?");
}

// let age = +prompt("quel âge as-tu ?");

// if(age > 100){
//     console.log("sale menteur");
// }else if(age >= 18){
//     console.log("bienvenue dans notre petite sauterie");
// }else {
//     console.log("t'as pas l'âge gamin");
// }

/* ----------------------------------- EXO ---------------------------------- */

// niveau 1
// Prompt "Combien de pommes as-tu récolté"
// si plus de 35 pommes 
// logger "bien jouer" 
// si moins logger "retourne travailler"

// niveau 2
// Prompt "Combien de pommes as-tu récolté"
// si plus de 35 pommes 
// demander via un prompt , de quelle couleurs sont les pommes 
// si elles sont vertes , logger "bien joué c'est ce que je voulais"
//  si elles sont rouge , logger "pas mal mais c'est pas ce que j'ai demandé"

// niveau 3

// Prompt "Combien de pommes as-tu récolté"
// si plus de 35 pommes 
// demander via un prompt , de quelle couleurs sont les pommes 
// si elles sont vertes , logger "bien joué c'est ce que je voulais"
//  si elles sont rouge , logger "pas mal mais c'est pas ce que j'ai demandé"
// si une autre couleur , logger "*ne nom de la couleur* n'exite pas pour une pomme connard"
// vous devez prendre en compte le cas ou l'utilisateur écris , "des pommes vertes" ou "VertE" ou "VERT" ou VERTES ou "DEs verTEs"

// si ce n'est pas un nombre qui est donné l'envoyer balader

// let nbrPommes = +prompt("combien de pomme as-tu récolté ?");

// // if(isNaN(nbrPommes) === false){
// // if(isNaN(nbrPommes)){
//     // si nbrPommes me retourne un NaN
// if(!isNaN(nbrPommes)){
//     if(nbrPommes > 35){
//         console.log("bien joué");
//         let colorPommes = prompt("de quelle couleur sont les pommes");
//         if(colorPommes.toLowerCase().includes("vert")){
//             console.log("bien joué c'est ce que je voulais")
//         }else if(colorPommes.toLowerCase().includes("rouge")){
//             console.log("pas mal mais je voulais des vertes");
//         }else{
//             console.log( colorPommes + " n'est pas une couleur pour une pomme , fumier");
//         }
//     }else{
//         console.log("retourne travailler chacal");
//     }
// }else {
//     console.log("ceci n'est pas un nombre");
// }

/* ----------------------------------- EXO ---------------------------------- */

// choisir un tiroir via un prompt
// si 1 : ce tiroir contient des vêtements
// si 2: ce tiroir est fermé à clé
// si 3 : ce tiroir est vide
// si 4 : ce tiroir contient des chausettes


// switch case

