/*
export const fizzBuzzFor = (nbr) => {
    
    for (let i = 0; i < nbr; i++) {
        let result = '';
        if (i % 3 === 0) {
            result += 'Fizz';
        }
        if (i % 5 === 0) {
            result += 'Buzz';
        }
        if (result) {
            console.log(`${i} : Bien entendu que c'est ${result}, faire un programme pour ça ! Quel indignité !!`);
        } else {
          console.log(`${i} : Divisible par 3 ou 5 t'es con ou tu sais pas compter ?!`);
        }
    }
}

export default fizzBuzzFor;
*/

import colors from 'colors';

const fizzBuzzFor = (nbr) => {
  for (let i = 0; i < nbr; i++) {
    let result = '';
    if (i % 3 === 0) {
      result += 'Fizz';
    }
    if (i % 5 === 0) {
      result += 'Buzz';
    }
    if (result) {
      console.log(`${i} : Bien entendu que c'est ${result}, faire un programme pour ça ! Quel indignité !!`.rainbow);
    } else {
      console.log(`${i} : Divisible par 3 ou 5 t'es con ou tu sais pas compter ?!`.america);
    }
  }
};

export default fizzBuzzFor;
