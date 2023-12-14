import { readFile } from "fs/promises";
/*
readFile('./tsconfig.json', 'utf-8').then(file => {
    console.log(file);
})
*/

/*
* Ma version
const file = './tsconfig.json';

readFile(file, 'utf-8')
    .then(fileContent => {
        const spaceCharactersCount = countSpaceCharacters(fileContent);
        console.log(`Le nombre de caractères non-espacés dans le fichier est de : ${spaceCharactersCount}`);
    })
    .catch(error => {
        console.error(`Une erreur s'est produite lors de la lecture du fichier : ${error.message}`);
    });

function countSpaceCharacters(text: any) {
    const SpaceCharacters = text.match(/\S/g);
    return SpaceCharacters.length;
}
*/

/*
* Version formateur
// ou readFile(./tsconfig.json)
readFile(process.argv[2], 'utf-8').then(file => {
    //pour replaceAll on doit modifier 
    const fileWithoutSpace = file.replace(/\s/g, "");
    console.log(`Il y a ${fileWithoutSpace.length} charactères dans le fichier`); 
})
*/
