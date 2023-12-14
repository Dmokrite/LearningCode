/*
* Require synchrone (CommonJs) et Import asynchrone (EsModule)
*/

const generate = require("./generate");
const { thing, toNothing } = require("./thing");

generate(12);
console.log(thing("T'aimes bien l'eau dans 30 ans il n'y en aura plus!"));
console.log(toNothing("Je te transforme en moutonnnsss, je suis JCVD et je suis un mage!"));