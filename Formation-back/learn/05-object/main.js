/*
*object
let personne = {
    "firstName": "Michel",
    "lastName": "Michel",
    "age": 36,
    "job": "professeur"
}

console.log(personne.job)
console.log(personne["firstName"])    //utilisé surtout dans les boucles

*for in
for(let go in personne){
    console.log(go + " "+ personne[go])
}

*for of
const dudes = ["vince", "amant", "greg", "amaury"]
for(let gens of dudes){
    console.log(gens)
}

* pour disposer d'un index dans une boucle for of
for(let [gensId, gens] of dudes.entries()){
    console.log(gensId, gens)
}

const amis = []
amis.push("Bruno")
amis[1] = "Adrien"
amis[2] = "Audrey"
amis[3] = "Steve"

const enemi = []
enemi[0] = "vince"
enemi[1] = "Amant"
enemi[2] = "Max"
*/

/*
*exo 
*en passant par les gens, logger tous le monde avec for of
const gens = [amis, enemi]
    for (let group of gens){
        for(let person of group){
        console.log(person)
    }
}
*/

/*
*exo
*via un prompt demandé de choisir un truc et logg le prix
*prompt = truc, log le prix de la table est de
const trucs = ["table","chaise","buffet","vitrine","drugs"]
const prix = [250, 70, 460, 700, 10000]

let choice = prompt("quel objet souhaites-tu? " + trucs)

for (let objet of trucs) {
  if (objet === choice) {
    
    let indice = trucs.indexOf(objet)
    let price = prix[indice]
    console.log('le prix de ' + choice + ' est de ' + price)
    break
  }
}
*/

/*
*exo récupérer deux tableaux et leurs keys et tout affiché dans la console avec group[info]
const dude1 = {
    "firstName": "Bruno",
    "lastname": "Npp",
    "age": "48",
    "job": "Marbrier"
}

const dude2 = {
    "firstName": "Adrien",
    "lastname": "Npm",
    "age": "25",
    "job": "Journaliste"
}

const dudes = [dude1, dude2]
    for(let group of dudes){
        for(let info in group){
            console.log(group + " : " + group[info])
        } 
    }
*/

/*
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
            "age":28,
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
*/

/*
*exo1
*Afficher les noms et prénoms des stagiaires
for (let stagiaire of DIList.stagiaires) {
    console.log(stagiaire.firstname + " " + stagiaire.lastname);
}

*Afficher les noms et prénoms des formateurs
for (let formateur of DIList.formateurs) {
    console.log(formateur.firstname + " " + formateur.lastname);
}
*/

/*
*afficher les noms des stagiaires dont le prénom commence par T, S ou H
for (let stagiaire of DIList.stagiaires) {
    const firstLetter = stagiaire.firstname.charAt(0).toUpperCase();
    if (["T", "S", "H"].includes(firstLetter)) {
        console.log(stagiaire.lastname);
    }
}
*/



