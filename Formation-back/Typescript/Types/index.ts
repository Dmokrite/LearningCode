const fruit: string = 'banane';
let couleur = "mauve";

console.log(fruit.toUpperCase());
console.log(couleur.charAt(2));

let myFavoriteNumber: number = 42;
let isActive: boolean = true;

let example: string | number = '42';
// on peut le réassigner comme chiffre
example = 42;

// Tableaux
const mesAlcools: string[] = ['Chartreuse', 'Rhum'];
// const mesAlcools: Array<string> = ['Chartreuse', 'Rhum'];
// Tableau de string OU de nombre
const monFourreTout: Array<string | number> = [42, 'banane', 45, 53]
// const monFourreTout: (string | number)[] = [42, 'banane', 45, 53]
// Tuple
// Tableau qui a nombre défini d'élément
const tuple: [number, string] = [42, 'H2G2']

// Objet javascript
const player: object = {
    name: 'Dramix',
    toString: () => "Player: Dramix",
}

// Objet avec propriété optionnel
const couleurRGB: {
    rouge: number,
    vert: number,
    bleu: number,
    // le ?  rend la propriété optionnel
    opacity?: number,
} = {
    rouge: 255,
    bleu: 255,
    vert: 0,
    opacity: 1
} 

// Enum 

const enum Roles {
    User = 'user',
    Admin = 'admin'
}

const adminRole: Roles = Roles.Admin;


// Les fonctions

function sum(number1: number, number2: number): number {
    return number1 + number2;
}

function bark(): void {
    console.log('bark')

    return;
}

function weirdSum(number1: string | number, number2: number): number {
   // aprés le if, il n 'y a plus d'erreur parce typescript comprend que si c'était un string avant,
   // ma variable devient un number dès qu'elle rentre dans la condition 
   if (typeof number1 === 'string') {
        number1 = Number(number1);
    }
    return number1 + number2;
}

// /!\ 
function stringify(nbr: number, lastArg?: boolean, turnToSentence?: boolean) {
    if (turnToSentence) {
        return `${nbr} est un nombre`;
    }
    return nbr.toString();    
}
// on ne doit pas spécifier le deuxième argument
// car la propriété est optionnel
const nbrAsString = stringify(42);
const nbrAsSentence = stringify(42, undefined, true);
const nbrTest = stringify(42, true);

const result= sum(40, 2);

function infiniteSum(...numberList: number[]) {
    let result = 0;
    console.log('Liste de nombre :', numberList);

    for (const nbr of numberList) {
        result += nbr;
    }
    return result;
}

infiniteSum(2, 2, 4);
infiniteSum(40, 2);
infiniteSum(40, 40, 160, 1097);

const manierePasTop: any = 'pas terrible';
// console.log(manierePasTop.toBanane());
let mieuxGerer: unknown = 'inconnu';

if (typeof mieuxGerer === 'string') {
    mieuxGerer = mieuxGerer.toUpperCase();
}

export function gift(age: number, openGift: (name: string, age: number) => void) {
        openGift('chatGpt', age);
}

gift(1, (name: string, age: number) => {
    console.log(`Joyeux anniversaire ${name}, tu as ${age} ans`);
    return;
})

//  assertions

const variableInconnu: unknown = "banane";
const password: string = variableInconnu as string;

// Radioactif, pas toucher, fuir !!!!
const fakeNumber = "20" as unknown as number
// console.log(fakeNumber.toFixed());

type ViewMode = 'List' | 'Grid' | "Kanban";

type User = {
    firstName: string,
    lastName: string,
    age: number
};

const viewMode: ViewMode = 'Grid';
const viewUserList: ViewMode = 'List';

const nouvelleUtilisateur: User = {
    firstName: 'Romain',
    lastName: 'Verliefden',
    age: 25,
} 

const userProperty: keyof User = 'firstName'

const partialUser: Partial<User> = {firstName: "Goooo"}
const record: Record<string, number> = {
    id: 4,
    
}