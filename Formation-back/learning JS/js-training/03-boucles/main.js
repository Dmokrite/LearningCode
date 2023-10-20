/* ---------------------------------- while --------------------------------- */

// while(condition){
//     // code qui va s'éxécuter en boucle tant qu'on remplie la condition
// }

let count = 0;

while(count <= 100 ){
    //ici le code qui va s'éxécuter en boucle
    console.log(count);
    count++;
    // count += 1;
    // count = count +1;
}

// let prenoms = prompt("Entrez un prénom");

// while(prenoms != ""){
//     console.log("bonjour " + prenoms);
//     prenoms = prompt("Entrez un prénom")
// }

/* ----------------------------------- for ---------------------------------- */

// let count = 0;

// while(count <= 100 ){
//     console.log(count);
//     count++;
// }


for(let i = 0; i <= 100; i++ ){
    console.log(i);
}

/* ----------------------------------- Exo ---------------------------------- */

// Logger les nombre de 1 à 100, et préciser à coté s'il sont pair ou impair


// for (let i = 1; i <= 100; i++) {
//     if (!(i % 2)) {
//         console.log("Nombre pair " + i);
//     }
//     else {
//         console.log("Nombre impair " + i);
//     }
// }

/* ----------------------------------- Exo ---------------------------------- */

// Logger les nombre de 1 à 100, et préciser à coté s'il sont multiple de 4 ,s'il sont multiple de 7 , s'il sont multiple de 4 ET de 7
// for (let i = 1; i<=100; i++){
//     if(i % 7 == 0 && i % 4 == 0){
//         console.log(i + " est un multiple de 4 et de 7 !!!")
//     }
//     else if (i % 4 == 0){
//         console.log(i + " est un multiple de 4")

//     }
//     else if (i % 7 == 0){
//         console.log(i + " est un multiple de 7");
//     }
//     else{
//         console.log(i + " n'est ni un multiple de 4, ni de 7");
//     } 
// }


/* ----------------------------------- Exo ---------------------------------- */ 
// générer une chaine de caractère qui contient les numéros de 1 à 500
//  "12345678910111213141516.....499500"

// let string = "";
// for (let i = 1; i <= 500; i++) {
//     string += i;
// }
// console.log(string);