function sayAdrien(){
    console.log("Adrien");
}
sayAdrien();

// Iife (immediatly invoked function expression)
// cette methode permet d'appeler une fonction directement après l'avoir créé
// assurez vous que votre précédente instruction possède bien un ";" à la fin sans quoi cela ne serait marcher
(function ditAdrient(){
    console.log("Adri");
})();


function sayMyName(name){
    console.log(name);
    name = name.toUpperCase();
    console.log(name);
};

sayMyName("Bruno");

const listInvite = ["Vince","Steve","Amaury","Amand","Audrey"];
const present =[];

for(let invite of listInvite){
    checkVideur(invite);
}

console.log(present);

function checkVideur(gens){
    if(gens === "Amand"){
        console.log("la sortie est de ce coté vile raclure de chiotte de " + gens);
    }else{
        console.log("bienvenue "+gens+ " dans notre petite sauterie");
        present.push(gens);
    }
}

/* ------------------------- methode d'interpolation ------------------------ */
// remplacez
// console.log("bienvenue "+gens+ " dans notre petite sauterie");

 // par 

// console.log(`Bienvenue ${gens} dans notre petite sauterie`);


// fonction qui retourne une information

function calcule(mdr, mdr2){
    return mdr + mdr2;
}

console.log(calcule(2,4));


/* --------------------------- EXERCIIIIIIIIIIIICE --------------------------- */

// via 3 prompts
//  retournez la moyenne de ces 3 derniers dans la console

// let nbr1 = +prompt("donne 1 nombre");
// let nbr2 = +prompt("donne 1 nombre");
// let nbr3 = +prompt("donne 1 nombre");

// function calcMoy(x, y, z){
//     let res = (x + y + z)/3;
//     return res;
// }

// console.log(calcMoy(nbr1,nbr2,nbr3));



/* --------------------------- EXERCIIIIIIIIIIIICE --------------------------- */

// via 3 prompts
// réalisez l'opération

// prompt 1 = number
// prompt 2 = opérateur
// prompt 3 = number
let nbrr1 = +prompt("Donnez moi le premier nbr");
let operateur = prompt("Donnez moi l'oprateur");
 let nbrr3 = +prompt("Donnez moi le deuxieme nbr");  


function calculeMoi(n1, op, n2){
    if(op === "+"){
        return n1 + n2;
    }else if(op === "-"){
        return n1-n2
    }else if(op === "*"){
        return n1*n2
    }else if(op === "/"){
        if(n2 === 0 ){
            return "calcule impossible"
        }else{
            return n1/n2;
        }
    }else{
        return "error"
    }
}


console.log(calculeMoi(nbrr1, operateur, nbrr3));