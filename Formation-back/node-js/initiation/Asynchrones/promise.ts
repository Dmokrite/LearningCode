function myPromise(nbr1: number, nbr2: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nbr1 + nbr2 < 0) {
                reject("text-Error");
            } else {
                resolve(nbr1 + nbr2);
            }
        }, 1000);
    });
}

/*
myPromise(-1, 5)
    .then((result: unknown) => {
        console.log(`Le résultat de l'addition est ${result}`);
        return myPromise(result as number, 10)
    })
    .then((result: unknown) => {
        console.log(`Le résultat de l'addition est ${result}`);
        return myPromise(result as number, 10)
    })
    .then((result: unknown) => {
        console.log(`Le résultat de l'addition est ${result}`);
        return myPromise(result as number, -100)
    })
    .catch((error) => {
        console.error(error);
    });
*/

myPromise(-1, 5)
  .then((result) => {
    console.log(`Le résultat de l'addition est ${result}`);
    return myPromise(result as number, 10)
  })
  .then((result) => {
    console.log(`Le résultat de l'addition est ${result}`);
    return myPromise(result as number, 10)
  })
  .then((result) => {
    console.log(`Le résultat de l'addition est ${result}`);
    return myPromise(result as number, -100)
  })
  .catch((error) => {
    console.error(error);
  });
