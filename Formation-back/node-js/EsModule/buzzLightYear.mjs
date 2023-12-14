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
            console.log(result);;
        } else {
            console.log(i);
        }
    }
}

export default fizzBuzzFor;