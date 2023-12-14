import { EventEmitter } from "stream";

const myTerribleRPG = new EventEmitter();
let level = 0;
let bonusFactor = 1;

myTerribleRPG.on('exit', () => {
    console.log("Loser");
    process.exit();
})

myTerribleRPG.on('training', () => {
    level+= 1 *bonusFactor;
    console.log(`Bravo!! Tu viens de gagner un niveau, tu es maintenant level : ${level}`);
})

myTerribleRPG.on('bossFight', () => {
    if (level < 5) {
        console.log('Perdu, vous êtes mort !!');
    }else{
        console.log(`Bravo tu as battu le boss et tu viens de gagner un niveau`);
    }
    process.exit();
})

myTerribleRPG.once('bonus', () => {
    bonusFactor *= 2;
    console.log('Vous portez un mask de Canard dégueulasse, pour toutes réclamations voir Rom1');
})

function displayMenu() {
    console.log(`
    Menu: \n
    1 - S'entrainer \n
    2 - Utiliser les bonus \n
    3 - Combattre \n
    4 - Quitter le jeu \n
    `);
}

displayMenu();

process.stdin.on('data', (data) => {
    const option = data.toString().trim();

    if (option === '4') {
        myTerribleRPG.emit('exit');
    }
    if (option === '1') {
        myTerribleRPG.emit('training')
    }
    if (option === '3') {
        myTerribleRPG.emit('bossFight')
    }
    if (option === '2') {
        myTerribleRPG.emit('bonus')
    }

    displayMenu();
})