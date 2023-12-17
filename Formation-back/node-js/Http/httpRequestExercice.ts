/*
* version corrigé du formateur
*/
/*
// Effectue une requête GET à l'API Triptyk
fetch('https://triptyk-api-dev.triptyk.eu/api/v1/posts', {
    method: 'GET',
}).then(response => {
    // Traite la réponse en tant que texte
    response.text().then(stringResponse => {
        // Parse le texte de la réponse en JSON
        const responseAsJson = JSON.parse(stringResponse) as {
            data: {
                attributes: {
                    title: string;
                }
            }[]
        };

        // Affiche dans la console les titres extraits de la réponse JSON
        console.log(responseAsJson.data.map(entity => entity.attributes.title));
    })
})
*/

/*
* Exemple de request get pour récupèrer tous les posts
*/

/*
fetch('https://triptyk-api-dev.triptyk.eu/api/v1/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

/*
* Exemple de requête GET pour récupérer un post spécifique par son ID
*/

/*
const postId = '37'; // Remplacez par l'ID du post souhaité
fetch(`https://triptyk-api-dev.triptyk.eu/api/v1/posts/${postId}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

/*
* Exemple de requête POST pour créer un nouveau post
*/

/*
const newPost = {
    type: 'post',
    attributes: {
        title: 'Nouveau Post',
    }
};

fetch('https://triptyk-api-dev.triptyk.eu/api/v1/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: newPost }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

/*
* Exemple de requête PUT pour mettre à jour un post existant
*/

/*
const postIdToUpdate = '37'; // Remplacez par l'ID du post à mettre à jour
const updatedPost = {
    type: 'post',
    attributes: {
        title: 'Nouveau Titre',
    }
};

fetch(`https://triptyk-api-dev.triptyk.eu/api/v1/posts/${postIdToUpdate}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: updatedPost }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

/*
* Exemple de requête DELETE pour supprimer un post existant
*/

/*
const postIdToDelete = '37'; // Remplacez par l'ID du post à supprimer
fetch(`https://triptyk-api-dev.triptyk.eu/api/v1/posts/${postIdToDelete}`, {
    method: 'DELETE',
})
    .then(response => {
        if (response.status === 204) {
            console.log('Post supprimé avec succès.');
        } else {
            console.error('Erreur lors de la suppression du post.');
        }
    })
    .catch(error => console.error('Error:', error));
*/

fetch('https://triptyk-api-dev.triptyk.eu/api/v1/posts', {
    method: 'GET',
}).then(response => {
    // Traite la réponse en tant que texte
    response.text().then(stringResponse => {
        // Parse le texte de la réponse en JSON
        const responseAsJson = JSON.parse(stringResponse) as {
            data: {
                type: string;
                id: string;
                attributes: {
                    title: string;
                }
            }[]
        };

        // Affiche dans la console les titres extraits de la réponse JSON
        console.log(responseAsJson.data.map(entity => ({
            type: entity.type,
            id: entity.id,
            title: entity.attributes.title
        })));
    })
})
