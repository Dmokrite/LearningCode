// Importe le pouvoir explosif de "events".
import { EventEmitter } from "events";

// Définit une interface Bomb qui a le potentiel d'exploser et peut émettre des événements.
interface Bomb extends EventEmitter {
    password?: string;  // La clé secrète qui désamorce la bombe (ou pas).
}

// Crée une bombe (ou plutôt une mèche) en tant qu'instance d'EventEmitter.
const bomb: Bomb = new EventEmitter();

// Le mot de passe correct pour sauver le monde (campus).
const correctPassword = 'campus';

// Fonction pour commencer le jeu (ou déclencher la mèche).
function startGame() {
    let count = 5;  // Compte à rebours initial.

// Fonction interne pour le compte à rebours, parce que les bombes aiment la dramaturgie.
function countdown() {
    const startCountdown = setInterval(() => {
        console.log(`Décompte: ${count}s`);
        count--;

        if (count === 0) {
            clearInterval(startCountdown);
            promptPassword();  // C'est l'heure de saisir le mot de passe !
        }
    }, 1000);
}

// Fonction pour saisir le mot de passe (ou la dernière chance avant l'explosion).
function promptPassword() {
    process.stdin.once('data', (input) => {
        const enteredPassword = input.toString().trim();
        bomb.password = enteredPassword;
        bomb.emit('password');  // Émet l'événement 'password' comme une bombe prête à exploser.
    });

    console.log("Entrez le mot de passe : ");
}

// Écoute l'événement 'password' comme un expert en désamorçage.
bomb.on('password', () => {
    if (bomb.password === correctPassword) {
        console.log("Félicitations !! Vous avez sauvé l'E-Campus");
    }else{
        console.log("Mauvais password !! So long everybody");
    }

    process.stdin.once('data', (input) => {
        const playAgain = input.toString().trim().toLowerCase();
        if (playAgain === 'oui') {
            startGame();  // La partie est-elle prête à être rejouée ?
        }else{
            console.log("Au revoir !");
            process.exit();  // Adieu, cruelle réalité.
        }
    });

    console.log("Voulez-vous rejouer ? (oui/non) : ");
})

countdown();  // Commence le compte à rebours explosif.

}

startGame();  // Que le jeu commence.

/*
* Version en utilisant readline pour créer une interface user (input, output) servant de prompt pour entrer le mot de passe
import { EventEmitter } from "stream";
import readline from 'readline';

const eCampus = new EventEmitter();
let count = 10;

function startCountdown() {
    const countdownInterval = setInterval(() => {
        console.log(`Décompte: ${count}s`);
        count--;

        if (count === 0) {
            clearInterval(countdownInterval);
            eCampus.emit('countdownEnd');
        }
    }, 1000);
}

function promptForPassword() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Entrez le mot de passe : ', (enteredPassword) => {
        rl.close();
        
        const correctPassword = 'campus';

        if (enteredPassword === correctPassword) {
            eCampus.emit('passwordCorrect');
        } else {
            eCampus.emit('passwordIncorrect');
        }
    });
}

startCountdown();

eCampus.on('countdownEnd', () => {
    console.log('Le décompte est terminé. Veuillez entrer le mot de passe.');
    promptForPassword();
});

eCampus.on('passwordCorrect', () => {
    console.log("Félicitations !! Vous avez sauvé l'E-Campus");
});

eCampus.on('passwordIncorrect', () => {
    console.log("Mauvais password !! So long everybody");
});
*/

/*
* Version formateur
import { EventEmitter } from "stream";

const bombPassword = 'bomb';
const bomb = new EventEmitter();

bomb.on('passwordRequest', () => {
    console.log('Entrez le mot de passe :');
    process.stdin.once('data', (data) => {
        let password = data.toString().trim();
        if (password === bombPassword) {
            bomb.emit('desactivated'); // Correction ici
        } else {
            bomb.emit('explode');
        }
    });
});

bomb.once('desactivated', () => {
    console.log("J'aurais pas parié sur toi !!");
});

bomb.once('explode', () => {
    console.log("So long everybody");
});

let secondeBeforeExplode = 10;

const bombInterval = setInterval(() => {
    if (secondeBeforeExplode > 0) { // Correction ici
        console.log(`il reste ${secondeBeforeExplode} secondes avant explosion`);
    } else {
        clearInterval(bombInterval);
        console.log('So long everybody');
    }
    secondeBeforeExplode--;
}, 1000);
*/
