/*
* promise = une promesse attendra que le code soit executé pour renvoyer le résultat
*/

/*
*construire une promesse
*/

const rejectPromise = new Promise((resolve,reject) => {
    //la promesse promet de renvoyer un resultat resolve : value, reject : raison
    reject("Bruno est un traitre")
})

rejectPromise.then((result) => console.log(result)).catch((error) => {
    console.log("error message")
    throw new Error(error)
})

//on construit une promesse sans remplir resolve donc la promesse passe directement dans reject et donc dans le catch

const resolvePromise = new Promise((resolve, reject) => {
    resolve("Steve est heureux")
})

resolvePromise.then((result) => console.log("message réussi :", result)).catch((error)=> {
    throw new Error(error)
})

//on est bien async les réussites d'affichent avant les erreurs et manipuler le résultat via la méthode .then

const manipulation = new Promise((resolve, reject) => {
    resolve("Le lion est mort ce soir.");
});

manipulation
    .then((result) => {
        return `${result} Et Mofasa est content`;
    })
    .then((r) => {
        return `${r}. Mettre du texte`;
    })
    .then((result) => {
        return `${result}. Encore du texte`;
    })
    .then((bruno) => {
        throw new Error(bruno);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Finish him!"));  //finally fonctionnera toujours que l'on ai un resultat ou une erreur

/*
*les erreurs sont imbriquées    
(result1) => { 
    (result2) => {
        (result3) => {   
            return result3 = result2 + données 
        }
        return result2 = result1 + données
    }
    return result1
}
*/

const posts = [
    {
      title: "J'aime le cours de Patrick et il est beau",
      author: "Maxime",
      id: 1,
    },
    {
      title: "Patrick est un peu Brouillon",
      author: "Franck",
      id: 2,
    },
    {
      title: "Je n'écoute pas ce qui est dit",
      id: 3,
    },
  ];

  const authors = [
    {
      name: "Maxime",
      email: "maxime_unicorn@gmail.com",
      bio: "J'aime les licornes et les barbies",
    },
    {
      name: "Franck",
      email: "vasy.francky@yahoo.be",
      bio: "Je danse le mia",
    },
    {
      name: "Amand",
      email: "Amand.ine@yolo.eu",
      bio: "je suis un flemmard",
    },
  ];
  
  const getPostById=(zut) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(post => post.id === zut)  ;
            post ? resolve(post) : reject("aucun post")
            console.log("post", post);
        }, 2000)
    })
  }

  getPostById(3)  //promesse resolve
  getPostById(4) //promesse reject

  const findAuthor = (post, ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (post.author) {
                const authorDetails = authors.find((author) => author.name === post.author);
                authorDetails ? resolve(authorDetails) : reject("Aucun auteur trouvé");
                console.log("AuthorDetails", authorDetails);
            } else {
                reject("Auteur non défini dans le post");
            }
        }, ms);
    });
}

findAuthor(posts[0], 3000) 
findAuthor(posts[2], 4000)
