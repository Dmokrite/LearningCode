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
if (!peutConduireFrance && !peutConduireUs){            <======== !true = false, !false = true
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

switch (pays){    <======= Ancienne méthode, rend le code lourd à cause des "breaks" mais peut encore s'utilisé dans certains cas
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