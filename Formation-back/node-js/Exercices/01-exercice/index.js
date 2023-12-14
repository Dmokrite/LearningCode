const { reverseWords } = require('./reverse.js');
const colors = require('colors');

async function main() {
  const { toSpongebob } = await import('./spongeBob.mjs');

  const String = "Qui vit dans un ananas dans la mer? BOB L'éponge Carré !!";
  const spongebobCaseString = toSpongebob(String);
  console.log(`${spongebobCaseString}`.random);

  const Array = ['banane', 'cerise', 'prune', 'JCVD'];
  const reversedArray = await reverseWords(Array);
  console.log(`${JSON.stringify(reversedArray)}`.rainbow);
}

main();
