import { log } from "console";

console.log(process.argv);

/*
function additionner(args: any) {
    let somme = 0;
  
    for (const arg of args) {
      const nombre = Number(arg);
  
      if (isNaN(nombre)) {
        throw new Error(`Erreur: "${arg}" n'est pas un nombre.`);
      }
  
      somme += nombre;
    }
  
    return somme;
}
  
try {
    const argument = process.argv.slice(2);
    const result = additionner(argument);
  
    console.log(`Le résultat de l'addition est : ${result}`);
} catch (erreur: any) {
    console.error(erreur.message);
}
*/

/*
* Soustraire
*/

/*
function soustraire(args: any) {
    let produit = 0;
  
    for (const arg of args) {
      const nombre = Number(arg);
  
      if (isNaN(nombre)) {
        throw new Error(`Erreur: "${arg}" n'est pas un nombre.`);
      }
  
      produit -= nombre;
    }
  
    return produit;
}
  
try {
    const argument = process.argv.slice(2);
  
    const soutraction = soustraire(argument);
  
    console.log(`Le résultat de la soustraction est : ${soutraction}`);
} catch (erreur: any) {
    console.error(erreur.message);
}
*/

/*
* Multiplier
*/

/*
function multiplier(args: any) {
  let produit = 1;

  for (const arg of args) {
    const nombre = Number(arg);

    if (isNaN(nombre)) {
      throw new Error(`Erreur: "${arg}" n'est pas un nombre.`);
    }

    produit *= nombre;
  }

  return produit;
}

try {
  const argument = process.argv.slice(2);

  const multiplication = multiplier(argument);

  console.log(`Le résultat de la multiplication est : ${multiplication}`);
} catch (erreur: any) {
  console.error(erreur.message);
}
*/

/*
* Divisé
*/

/*
function divise(args: any) {
    let produit = args.shift();
  
    for (const arg of args) {
      const nombre = Number(arg);
  
      if (isNaN(nombre)) {
        throw new Error(`Erreur: "${arg}" n'est pas un nombre.`);
      }
  
      produit /= nombre;
    }
  
    return produit;
}
  
try {
    const argument = process.argv.slice(2);
  
    const division = divise(argument);
  
    console.log(`Le résultat de la division est : ${division}`);
} catch (erreur: any) {
    console.error(erreur.message);
}
*/

/*
* spécifier explicitement le type (string[]) dans la signature de la fonction est une bonne pratique, 
* car cela permet de rendre le code plus lisible et d'offrir une meilleure documentation pour ceux qui lisent votre code.
*/

/*
function additionner(args: string[]): number {
  let somme = 0;

  for (const arg of args) {
    const nombre = Number(arg);

    if (isNaN(nombre)) {
      throw new Error(`Erreur: "${arg}" n'est pas un nombre.`);
    }

    somme += nombre;
  }

  return somme;
}

try {
  const argument = process.argv.slice(2);
  const result = additionner(argument);

  console.log(`Le résultat de l'addition est : ${result}`);
} catch (erreur: any) {
  console.error(erreur.message);
}
*/

const addition = (args: any): number => args.reduce((acc: any, curr: any) => Number(acc) + Number(curr));

//const addition = (args: any): number => args.reduce((acc: any, curr: any) => ~~acc - ~~curr);

try {
    const argument = process.argv.slice(2);
    const result = addition(argument);
  
    console.log(`Le résultat de l'addition est : ${result}`);

} catch (erreur: any) {
    console.error(erreur.message);
}
