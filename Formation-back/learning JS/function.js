/*
*Les fonctions
*/
/*                               <======= idéal pour fonctions globales
function canDrive (age, pays) {  <======= les fonctions sont interprétées avant le reste déclarer de cette manière, typiquement le console.log pourrait au-dessus qu'il fonctionnerait
    if (
    (age >= 18 && pays === "FR") ||
    (age >= 16 && pays === "US"))
{
    return true
}
    return false
} 
console.log(canDrive(13, "FR"))
*/

/*
const canDrive = function (age, pays) {   <========= idéal pour fontions à n'utilisé que dans une boucle ou dans une condition
    if (
    (age >= 18 && pays === "FR") ||
    (age >= 16 && pays === "US"))
{
    return true
}
    return false
} 
console.log(canDrive(18, "FR"))
*/

/*
let i = 0
function greeting(name) {
    i++
    console.log(`Bonjour ${name}`)
} 
greeting("John")
console.log(i)
greeting("Jane")
console.log(i)
*/

/*
let notes = [12, 13, 14, 15]
function upNotes () {
    notes[0]++,
    notes[1]++,
    notes[2]--,
    notes[3]--
}
upNotes(notes)
console.log(notes)
*/

/*
function maFonction () {
    console.log(this)
}
maFonction.call(3)
*/

/*
const a = {
    firstname: "John",
    lastname: "Doe",
    age: 37,
    groupeSanguin: "AB-négatif",
    job: "Developper",
    total: function() {
        /*console.log(this)*/
/*   console.log(`${this.firstname} ${this.lastname}`.toUpperCase())
    }
}
a.total()
*/

/*
*fonctions fléchées
*/

/*
const a = { 
    firstname: "John",
    lastname: "Doe",
    age: 37,
    groupeSanguin: "AB-négatif",
    job: "Developper",
    total: function() {
          console.log(`${this.firstname} ${this.lastname}`.toUpperCase())
    }
}
const maFonction = (param1, param2) => {
    console.log(param1, param2)
}

maFonction(1,2)
*/

/*
const a = {
    firstname: "John",
    lastname: "Doe",
    age: 37,
    groupeSanguin: "AB-négatif",
    job: "Developper",
    total: function() {
          console.log(`${this.firstname} ${this.lastname}`.toUpperCase())
    }
}
const maFonction = (param1, param2) => {    <====== ne modifie pas
    console.log(param1, param2, this)
}

maFonction.call(3, 1,2)
*/

/*
const a = {
    firstname: "John",
    lastname: "Doe",
    age: 37,
    groupeSanguin: "AB-négatif",
    job: "Developper",
    total: function() {
          console.log(`${this.firstname} ${this.lastname}`.toUpperCase())
    }
}
const maFonction = function (param1, param2) {  <======= modifie, function fléchée n'altére pas THIS
    console.log(param1, param2, this)
}

maFonction.call(3, 1,2)
*/

/*
const somme = (a, b) => {
    return a * b
}
console.log(somme(10, 20))
*/

/*const somme = (a, b) =>  a * b
console.log(somme(10, 20))
*/

/*const isPair = function (a, cb) {
    if (a % 2 === 0) {
        cb(a)
    }
    }
    isPair(4, function (n) {
        console.log("Mon nombre est pair !")
    })
*/

/*
*exercice
*/

/*
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}
const solution = getRandomInt(10)
console.log(solution)
function isRight(n) {
    return solution === n
}
function guess() {
    const number = prompt("Entrez un nombre")
    return isRight(Number(number))
}
let hasWon = false
for (let i = 0; i < 3; i++) {
    if (guess()) {
        hasWon = true
        console.log("Bravo !")
        break
    }
}
if (!hasWon) {
    console.log("Vous avez perdu !")
}
*/

/*
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}
const solution = getRandomInt(10)
console.log(solution)
function isRight(n) {
    return solution === parseInt (n, 10)
}
function guess () {
    const number = prompt("Entrez un nombre")
    return isRight(number)
}
for (i = 0; i < 3; i++) {
    if (guess()) {
        console.log("Bravo !")
        break
    } else if (i === 2) {
        console.log("Vous avez perdu !")
    }
}
*/

/*
function isPremier (n) {
    for (let i = 2; i < n; i++)
    if (n % i === 0) return false
  return n > 1               
}

console.log("0", isPremier(0))
console.log("1", isPremier(1))
console.log("2", isPremier(2))
console.log("3", isPremier(3))
console.log("11", isPremier(11))
console.log("12", isPremier(12))
*/

/*   
function estimatePi(numPoints) {   <===========Method of Monte Carlo
let insideCircle = 0

    for (let i = 0; i < numPoints; i++) {
const x = Math.random()
const y = Math.random()
    if (x * x + y * y <= 1) {
            insideCircle++
        }
    }
const piEstimation = 4 * (insideCircle / numPoints);
    return piEstimation
}
const numPoints = 100000000
const piValue = estimatePi(numPoints);
console.log(`Estimation de π avec ${numPoints} points : ${piValue}`)
*/

/*
function isPalindrome (word) {
    const reversedWord = word
        .split('')
        .reverse()
        .join('')
    return word.toUpperCase() === reversedWord.toUpperCase()
}
console.log(isPalindrome('kayak')) 
console.log(isPalindrome('SOS')) 
console.log(isPalindrome('Kayak')) 
console.log(isPalindrome('Bonjour'))
*/

/*
const students = [
    {
        name: "John",
        lastname: "Doe",
        notes: [12, 20, 18, 19, 14]
    },
    {
        name: "Jane",
        lastname: "Doe",
        notes: [17, 18, 17, 13, 15]
    },
    {
        name: "Sophie",
        lastname: "Doe",
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: "Marc",
        lastname: "Doe",
        notes: [10, 13, 15, 18, 11]
    },
    {
        name: "Manon",
        lastname: "Doe",
        notes: [18, 11, 8, 19, 10]
    }
]
const moyenne = (notes) => {
    let sum = 0
    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}
const compareStudent = (a, b) => {
    return b.moyenne - a.moyenne
}
for (let student of students) {
    student.moyenne = moyenne(student.notes)
    student.worst = Math.min(...student.notes)
    student.best = Math.max(...student.notes)
}
students.sort(compareStudent)
const formatStudent = (student) => {
    return `${student.name} avec une moyenne de ${student.moyenne}, meilleur note (${student.best}), pire note (${student.worst})` 
}
console.log(`Moyenne des étudiants 
1: ${formatStudent(students[0])}        
2: ${formatStudent(students[1])} 
3: ${formatStudent(students[2])}
4: ${formatStudent(students[3])}
5: ${formatStudent(students[4])}
`)
*/

/*
const frequencies = {}
const ignored = [',', '?', ':', '!', '«', '»', '…', '’']
let phrase = prompt ("Entrez votre phrase à analysé")
let cleanedPhrase = phrase.toLowerCase()
for (let character of ignored) {
    cleanedPhrase = cleanedPhrase.replaceAll(character, '')
}
const words = cleanedPhrase.split(' ')
for (let word of words) {
    if (word !== '' && word.length >= 4) {
        if (frequencies[word]) {
            frequencies[word]++
        } else {
            frequencies[word] = 1
        }
    }
}
const frequenciesArray = []
for (let k in frequencies) {
    frequenciesArray.push({
        word: k,
        count: frequencies[k],
    })
}
frequenciesArray.sort((a, b) => b.count - a.count)
console.log(`Les mots les plus fréquents sont "${frequenciesArray[0].word}" (${frequenciesArray[0].count}),
            "${frequenciesArray[1].word}" (${frequenciesArray[1].count}),
            "${frequenciesArray[2].word}" (${frequenciesArray[2].count})`)
*/