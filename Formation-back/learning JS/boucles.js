/*
*Les boucles
*/

/*
let i = 0
while (i < 10) {
    console.log("Bonjour" + i)
    i++
}
*/

/*
const notes = [10, 8, 17, 15]
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}
*/

/*
const notes = [10, 8, 17, 15]
for (let i in notes) {
    console.log(notes[i])  <====== [i] = objet  notes[i] <====== notes de l'objet
}
*/

/*
const notes = {
    a:1,
    b:5,
    c:6,
    d:8
}
for (let i in notes) {
    console.log(notes[i])
}
*/

/*
const notes = [10, 8, 17, 15]
const person = {
    firstname: "John",
    lastname: "Doe"
}
for (let note of notes) {
    console.log(note) 
}
*/

/*
const greeting = "Bonjour"
for (let letter of greeting) {  
    console.log(letter)
}
*/

/*
const greeting = "Bonjour"
for (let letter in greeting){
    console.log(greeting[2])
}
*/

/*
*Excercices
*/

/*
let a = prompt ("Entrez un nombre entre 1 et 10")
if (a < 1 || a > 10) {
    console.log("Votre nombre n'est pas entre 1 et 10")
} else {
    while(a >=0) {
        console.log(a)
        a--
    }
}
*/

/*
let a = prompt ("Entrez un nombre entre 1 et 10")
if (a < 0 || a > 10) {
    console.log("Votre nombre n'est pas entre 1 et 10")
} else {
    for (let i = a; i >= 0; i--) {
        console.log(i)
    }
}
*/

/*
let guess = 8
let a
while (a !== guess) {
    a = prompt("Entrez votre nombre") * 1
    if (a < guess) {
        console.log("Plus")
    } else if (a > guess){
        console.log("Moins")
    }
}
console.log("Bravo !")
*/

/*
let guess = 8
let a
while (true) {
    a = prompt("Entrez votre nombre") * 1
    if (a < guess) {
        console.log("Plus")
    } else if (a > guess){
        console.log("Moins")
    } else {
        break
    }
}
console.log("Bravo !")
*/