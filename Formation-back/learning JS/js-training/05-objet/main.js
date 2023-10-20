let user = ["Vince", 23, "Expert comptable"];
let user2 = [19, "Amant", "Dj"];

let  personne1 = new Object();
let personne2 = {};

personne2.firstName = "Vince";
personne2.lastName = "Leroi";
personne2.age = 32;
personne2.job = "Avocat";

const personne3 = {
    "firstName" : "Audrhès",
    "lastName" : "Meermans",
    "age": 36,
    "job": "professeur"
};

// console.log(user2[2]);
console.log(personne2.job);
console.log(personne2["firstName"]); // cette façon de faire va être surtout utilisée  lors des boucles


// for IN 

for(let mdr in personne2){
    console.log(mdr + " "+personne2[mdr]);
}

// for OF

const dudes  = ["Vince", "Amant","Graiiig", "Amoriiii"];

for(let gens of dudes) {
    console.log(gens);
}

// pour disposer d'un index dans une boucle for of

for(let [gensId, gens] of dudes.entries()){
    console.log(gensId, gens);
}


const amis = [];
amis.push("Bruno");
amis[1] = "Adrien";
amis[2] = "Odrès";
amis[3] = "Stiive";

const enemi = [];
enemi[0] = "Vince";
enemi[1] = "Amant";
enemi[2] = "Max";

const gens = [amis, enemi];

console.log(gens[0][1]);


//EXO 
// en passant par les gens , logger tous le monde

// for (let groups of gens) {
//     for (let dude of groups) {
//       console.log(dude);
//     }
//   }



// let mdr = prompt("quelle objet souhaites-tu ? "+trucs)
// via un prompt , demander de choisir un truc , et en logger le prix

// prompt => tables
// log : le prix de la table est de 250 euros
// const trucs = ["table", "chaise", "buffet", "vitrine", "héroine"];
// const prix = [250, 70, 460, 700, 1000000];

const dude1 = {
    "firstName" : "Bruno",
    "lastName" : "Ne parlons pas de",
    "age": 24,
    "job": "marbier",
}

const dude2 = {
    "firstName" : "Adrien",
    "lastName" : "Lejuste",
    "age": 42,
    "job": "Boulanger",
}

// vous devriez peut être dans un premier temps chercher à reunir ces deux objets

const humans = [dude1, dude2];

for(let human of humans){
    for(let key in human ){
        console.log(key + " : " + human[key]);
    }
}

/* -------------------------------------------------------------------------- */


const DIList = {
    "stagiaires":[
        {
            "firstname":"Kentin",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"THibau",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Houcin",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Nkko",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"20 100",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Math hé ho",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Shaib",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Souf",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Rachida",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Max",
            "lastname":"Chartreuse",
            "age":92,
            "city":"Mons"
        },
        {
            "firstname":"Sebastien",
            "lastname":"Cardon", 
            "age":34,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};

//Exo 1 
// écire le nom et le prenom de tous les stagiares

for(let gens of DIList.stagiaires){
    console.log(gens.firstname + " "+ gens.lastname);
}

// Exo 2 

// écrire tous les noms des stagiares dont le prénom commence par (T, S ou H)

console.log("Stagiaires dont le prénom commence par T, S ou H :");
for (let stagiaire of DIList.stagiaires) {
    const firstLetter = stagiaire.firstname.charAt(0).toUpperCase();
    if (["T", "S", "H"].includes(firstLetter)) {
        console.log(stagiaire.lastname);
    }
}

for(let gens of DIList.stagiaires){
    if(gens.firstname.charAt(0)==="T" || gens.firstname.charAt(0)==="S" || gens.firstname.charAt(0)==="H"){
        console.log(gens.lastname);
    }
}

const fumier = {
        "firstname":"Amand",
        "lastname":"Chartreuse",
        "age":92,
        "city":"Mons"
}

delete fumier.lastname;

console.log(fumier);