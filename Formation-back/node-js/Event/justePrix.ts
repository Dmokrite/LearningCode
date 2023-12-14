// Génère un nombre aléatoire entre 1 et 1000 et l'arrondit à la valeur supérieure.
//const randomNumber = Math.floor(Math.random() * 1000) + 1;
const randomNumber = Math.ceil(Math.random() * 1000);

// Initialise un compteur à zéro pour suivre le nombre d'essais du joueur.
let count = 0;

// Affiche un message de bienvenue dans le jeu.
console.log('Bienvenue dans le jeu du "juste prix" !');

// Écoute les données entrées par l'utilisateur depuis la console.
process.stdin.on('data', (nbr) => {
    // Convertit l'entrée utilisateur en nombre entier.
    const userNbr = parseInt(nbr.toString().trim());

    // Incrémente le compteur d'essais.
    count++;

    // Vérifie si l'entrée utilisateur n'est pas un nombre.
    if (isNaN(userNbr)) {
        console.log("Ce n'est pas un nombre !");   
    }

    // Vérifie si l'entrée utilisateur est égale au nombre aléatoire.
    if (userNbr === randomNumber) {
        console.log(`Félicitations ! Vous avez trouvé le juste prix : ${randomNumber} en : ${count} essais.`);
        process.exit();
    } else {
        // Affiche si l'entrée est trop basse ou trop haute par rapport au nombre aléatoire.
        console.log(userNbr < randomNumber ? 'Trop bas !' : 'Trop haut !');
    }

    // Vérifie si le nombre d'essais atteint la limite de 10.
    if (count >= 10) {
        console.log(`Désolé, vous avez dépassé le nombre maximal d'essais. Le juste prix était : ${randomNumber}.`);
        process.exit();
    } else {
        // Demande à l'utilisateur de deviner à nouveau s'il n'a pas trouvé le bon nombre.
        console.log('Devinez le juste prix (entre 1 et 1000) : ');
    }
});

// Affiche la première invitation à deviner le juste prix.
console.log('Devinez le juste prix (entre 1 et 1000) : ');