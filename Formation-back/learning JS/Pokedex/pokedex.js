// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM
    const containerElement = document.getElementById('caught-pokemons-container');
    const modalElement = document.getElementById('pokemon-modal');
    const modalContentElement = document.getElementById('pokemon-modal-content');
    const closeModalButton = document.querySelector('.close-modal');

    // Récupération des Pokémon attrapés depuis le local storage
    let caughtPokemons = JSON.parse(localStorage.getItem("caughtPokemons")) || [];

    // Fonction pour ouvrir la modal et afficher les détails d'un Pokémon
    function openPokemonModal(pokemon) {
        modalContentElement.innerHTML = ''; // Réinitialise le contenu de la modal

        // Crée et ajoute les éléments HTML pour afficher les détails du Pokémon dans la modal
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${pokemon.id}`;
        modalContentElement.appendChild(idElement);

        const spriteElement = document.createElement('img');
        spriteElement.src = pokemon.image;
        spriteElement.alt = `Sprite de ${pokemon.name}`;
        modalContentElement.appendChild(spriteElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = `Nom: ${pokemon.name}`;
        modalContentElement.appendChild(nameElement);

        if (pokemon.apiTypes && Array.isArray(pokemon.apiTypes)) {
            const typeElement = document.createElement('p');
            typeElement.textContent = `Type: ${pokemon.apiTypes.map(type => type.name).join(', ')}`;
            modalContentElement.appendChild(typeElement);
        }

        if (pokemon.stats && typeof pokemon.stats === 'object') {
            const statsElement = document.createElement('div');
            statsElement.innerHTML = '<p>Stats:</p>';
  
            // Parcourt les statistiques du Pokémon et les ajoute à la modal
            for (const statName in pokemon.stats) {
                if (pokemon.stats.hasOwnProperty(statName)) {
                    const statItem = document.createElement('p');
                    statItem.textContent = `${statName}: ${pokemon.stats[statName]}`;
                    statsElement.appendChild(statItem);
                }
            }
  
            modalContentElement.appendChild(statsElement);
        }

        // Crée et ajoute les boutons pour ajouter aux favoris, retirer et ajouter un commentaire à un pokémon de la liste
        const addFavoriteButton = document.createElement('button');
        addFavoriteButton.textContent = 'Ajouter aux favoris';
        addFavoriteButton.addEventListener('click', () => {
            addToFavorites(pokemon, commentTextArea);
        });
        modalContentElement.appendChild(addFavoriteButton);

        const removeCaughtButton = document.createElement('button');
        removeCaughtButton.textContent = 'Retirer de la liste';
        removeCaughtButton.addEventListener('click', () => {
            removeFromCaughtList(pokemon, commentTextArea);
        });
        modalContentElement.appendChild(removeCaughtButton);

        const addCommentButton = document.createElement('button');
        addCommentButton.textContent = 'Ajouter un commentaire';
        addCommentButton.addEventListener('click', () => {
            addCommentToFavorites(pokemon, commentTextArea);
        });

        const commentTextArea = document.createElement('textarea');
        commentTextArea.placeholder = 'Laissez un commentaire...';
        
        modalContentElement.appendChild(addCommentButton);
        modalContentElement.appendChild(commentTextArea);

        // Affiche la modal
        modalElement.style.display = 'block';
    }

    function addCommentToFavorites(pokemon, commentTextArea) {
        const comment = commentTextArea.value;
    
        // Vérifie si le commentaire est renseigné
        if (!comment) {
            alert("Veuillez ajouter un commentaire avant de valider.");
            return;
        }
    
        // Ajouter le Pokémonavec le commentaire
        const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
        const pokemonWithComment = { ...pokemon, comment: comment };
        favorites.push(pokemonWithComment);
        localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
    
        // Affiche une alerte pour informer l'utilisateur
        alert(`Le Pokémon ${pokemon.name} a été ajouté avec le commentaire : ${comment}`);
    
        // Ferme la modal après l'ajout du commentaire
        modalElement.style.display = 'none';
    }
    
    // Fonction pour afficher les Pokémon attrapés dans des cartes
    function displayCaughtPokemonsInCards() {
        // Vérifie si l'élément du conteneur existe dans le DOM
        if (!containerElement) {
            console.error("L'élément du conteneur n'a pas été trouvé dans le DOM.");
            return;
        }

        // Réinitialise le contenu du conteneur
        containerElement.innerHTML = '';

        // Vérifie si les données des Pokémon ont été correctement récupérées depuis le stockage local
        if (!caughtPokemons || !Array.isArray(caughtPokemons)) {
            console.error("Les données des Pokémon n'ont pas été correctement récupérées depuis le stockage local.");
            return;
        }

        // Parcourt les Pokémon attrapés et ajoute une carte pour chaque Pokémon
        caughtPokemons.forEach(pokemon => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('pokemon-card');

            // Crée et ajoute les éléments HTML pour afficher les détails du Pokémon dans la carte
            const idElement = document.createElement('p');
            idElement.textContent = `ID: ${pokemon.id}`;

            const spriteElement = document.createElement('img');
            spriteElement.src = pokemon.sprite;
            spriteElement.alt = `Sprite de ${pokemon.name}`;

            const nameElement = document.createElement('p');
            nameElement.textContent = `Nom: ${pokemon.name}`;

            // Ajoute les éléments à la carte
            cardElement.appendChild(idElement);
            cardElement.appendChild(spriteElement);
            cardElement.appendChild(nameElement);

            // Ajoute un événement de clic pour ouvrir la modal lorsque la carte est cliquée
            cardElement.addEventListener('click', () => {
                openPokemonModal(pokemon);
            });

            // Ajoute la carte au conteneur
            containerElement.appendChild(cardElement);
        });
    }

    // Appelle la fonction pour afficher les Pokémon attrapés dans des cartes
    displayCaughtPokemonsInCards();

    // Ajoute un gestionnaire d'événement pour le bouton de fermeture de la modal
    closeModalButton.addEventListener('click', () => {
        modalElement.style.display = 'none';
    });

    // Fonction pour afficher un message d'erreur
    function displayError(message) {
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = message;
    }

    // Fonction pour ajouter un Pokémon aux favoris
    function addToFavorites(pokemon, commentTextArea) {
        // Récupère les Pokémon favoris depuis le local storage ou initialise un tableau vide
        const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];

        // Récupère le commentaire du textarea
        const comment = commentTextArea.value;

        // Ajoute le Pokémon aux favoris avec le commentaire
        favorites.push({
            pokemon: pokemon,
            comment: comment,
        });
        localStorage.setItem("favoritePokemons", JSON.stringify(favorites));

        // Affiche une alerte pour informer l'utilisateur
        alert(`Le Pokémon ${pokemon.name} a été ajouté aux favoris`);
    }

    // Fonction pour retirer un Pokémon de la liste des Pokémon attrapés
    function removeFromCaughtList(pokemon) {
        // Vérifie si le Pokédex est plein
        if (caughtPokemons.length >= 30) {
            alert("Le Pokédex est plein. Retirez un Pokémon avant d'en supprimer un.");
            return;
        }

        // Ajoute le Pokémon relâché à la liste des Pokémon relâchés
        let releasedList = JSON.parse(localStorage.getItem('releasedPokemons')) || [];
        releasedList.push({
            id: pokemon.id,
            name: pokemon.name,
            releaseDate: new Date().toLocaleString(),
        });
        localStorage.setItem('releasedPokemons', JSON.stringify(releasedList));

        // Retire le Pokémon de la liste des Pokémon attrapés
        caughtPokemons = caughtPokemons.filter(p => p.id !== pokemon.id);
        localStorage.setItem("caughtPokemons", JSON.stringify(caughtPokemons));

        // Actualise l'affichage des Pokémon attrapés
        displayCaughtPokemonsInCards();

        // Affiche une alerte pour informer l'utilisateur
        alert(`Le Pokémon ${pokemon.name} a été retiré de la liste.`);
    }

    // Fonction pour mettre à jour le texte des compteurs
    function updateCounterText() {
        const caughtCountElement = document.getElementById('caught-count');
        const missedCountElement = document.getElementById('missed-count');

        // Récupération des données depuis le local storage
        const capturedCount = JSON.parse(localStorage.getItem('caughtPokemons'))?.length || 0;
        const missedCount = JSON.parse(localStorage.getItem('missedPokemons'))?.length || 0;

        if (caughtCountElement && missedCountElement) {
            caughtCountElement.textContent = capturedCount;
            missedCountElement.textContent = missedCount;
        }
    }
    updateCounterText();
});
