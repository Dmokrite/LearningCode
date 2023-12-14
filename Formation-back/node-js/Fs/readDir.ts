import { readdir } from "fs/promises";

/*
* ./ répertoire courant, ../ répertoire parent
readdir('./', {
    withFileTypes: true
}).then(result => {
    console.log(result);
})
*/

/*
* Ma version
async function displayFolder() {
    try {
        const result = await readdir('./', { withFileTypes: true });

        const folders = result.filter(item => item.isDirectory());

        folders.map(folder => {
            console.log(folder.name);
        });
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }
}

displayFolder();
*/

/*
* Version corrigé formateur
*/
readdir('./', {
    withFileTypes: true
}).then(dirents => {
    const filteredDirents = dirents.filter(item => item.isDirectory());
    console.log(filteredDirents.map(dirent => dirent.name));
})
