"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gift = void 0;
const fruit = 'banane';
let couleur = "mauve";
console.log(fruit.toUpperCase());
console.log(couleur.charAt(2));
let myFavoriteNumber = 42;
let isActive = true;
let example = '42';
example = 42;
const mesAlcools = ['Chartreuse', 'Rhum'];
const monFourreTout = [42, 'banane', 45, 53];
const tuple = [42, 'H2G2'];
const player = {
    name: 'Dramix',
    toString: () => "Player: Dramix",
};
const couleurRGB = {
    rouge: 255,
    bleu: 255,
    vert: 0,
    opacity: 1
};
const adminRole = "admin";
function sum(number1, number2) {
    return number1 + number2;
}
function bark() {
    console.log('bark');
    return;
}
function weirdSum(number1, number2) {
    if (typeof number1 === 'string') {
        number1 = Number(number1);
    }
    return number1 + number2;
}
function stringify(nbr, lastArg, turnToSentence) {
    if (turnToSentence) {
        return `${nbr} est un nombre`;
    }
    return nbr.toString();
}
const nbrAsString = stringify(42);
const nbrAsSentence = stringify(42, undefined, true);
const nbrTest = stringify(42, true);
const result = sum(40, 2);
function infiniteSum(...numberList) {
    let result = 0;
    console.log('Liste de nombre :', numberList);
    for (const nbr of numberList) {
        result += nbr;
    }
    return result;
}
infiniteSum(2, 2, 4);
infiniteSum(40, 2);
infiniteSum(40, 40, 160, 1097);
const manierePasTop = 'pas terrible';
let mieuxGerer = 'inconnu';
if (typeof mieuxGerer === 'string') {
    mieuxGerer = mieuxGerer.toUpperCase();
}
function gift(age, openGift) {
    openGift('chatGpt', age);
}
exports.gift = gift;
gift(1, (name, age) => {
    console.log(`Joyeux anniversaire ${name}, tu as ${age} ans`);
    return;
});
const variableInconnu = "banane";
const password = variableInconnu;
const fakeNumber = "20";
const viewMode = 'Grid';
const viewUserList = 'List';
const nouvelleUtilisateur = {
    firstName: 'Romain',
    lastName: 'Verliefden',
    age: 25,
};
const userProperty = 'firstName';
