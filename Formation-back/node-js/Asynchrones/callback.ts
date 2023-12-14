//console.log('ba' +(+'a')+'a'); = baNaNa avec le throw error
type Err = Error;
function myCallback(nbr1: number, nbr2: number, callback: (err: Error | null, result?: number) => void) {
    setTimeout(() => {
        if (nbr1 + nbr2 < 0){
            return callback(new Error("perdu"));
        }
        callback(null, nbr1 + nbr2);
    }, 1000)
}

myCallback(
    5, -7, (err: Error | null, resultFunction?: number) => {
        if (err) {
            return console.error(err)
        }
        console.log(`Le résultat de l'addition N1 est ${resultFunction}`);
    } 
)

myCallback(
    5, 7, (err: Error | null, resultFunction?: number) => {
        if (err) {
            return console.error(err)
        }
        console.log(`Le résultat de l'addition N2 est ${resultFunction}`);
    } 
)

myCallback(
    12, 7, (err: Error | null, resultFunction?: number) => {
        if (err) {
            return console.error(err)
        }
        console.log(`Le résultat de l'addition N3 est ${resultFunction}`);
    } 
)
