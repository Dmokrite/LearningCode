document.addEventListener('DOMContentLoaded', function() {
  const containerElement = document.getElementById('caught-pokemons-container');
  const modalElement = document.getElementById('pokemon-modal');
  const modalContentElement = document.getElementById('pokemon-modal-content');
  const closeModalButton = document.querySelector('.close-modal');

  let caughtPokemons = JSON.parse(localStorage.getItem("caughtPokemons")) || [];

  function openPokemonModal(pokemon) {
    modalContentElement.innerHTML = ''; // Réinitialise le contenu de la modal

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
  
      for (const statName in pokemon.stats) {
          if (pokemon.stats.hasOwnProperty(statName)) {
              const statItem = document.createElement('p');
              statItem.textContent = `${statName}: ${pokemon.stats[statName]}`;
              statsElement.appendChild(statItem);
          }
      }
  
      modalContentElement.appendChild(statsElement);
    }

    const addFavoriteButton = document.createElement('button');
    addFavoriteButton.textContent = 'Ajouter aux favoris';
    addFavoriteButton.addEventListener('click', () => {
        addToFavorites(pokemon);
    });
    modalContentElement.appendChild(addFavoriteButton);

    const removeCaughtButton = document.createElement('button');
    removeCaughtButton.textContent = 'Retirer de la liste';
    removeCaughtButton.addEventListener('click', () => {
        removeFromCaughtList(pokemon);
    });
    modalContentElement.appendChild(removeCaughtButton);

    modalElement.style.display = 'block';
  }

  function displayCaughtPokemonsInCards() {
      if (!containerElement) {
          console.error("L'élément du conteneur n'a pas été trouvé dans le DOM.");
          return;
      }

      containerElement.innerHTML = '';

      if (!caughtPokemons || !Array.isArray(caughtPokemons)) {
          console.error("Les données des Pokémon n'ont pas été correctement récupérées depuis le stockage local.");
          return;
      }

      caughtPokemons.forEach(pokemon => {
          const cardElement = document.createElement('div');
          cardElement.classList.add('pokemon-card');

          const idElement = document.createElement('p');
          idElement.textContent = `ID: ${pokemon.id}`;

          const spriteElement = document.createElement('img');
          spriteElement.src = pokemon.sprite;
          spriteElement.alt = `Sprite de ${pokemon.name}`;

          const nameElement = document.createElement('p');
          nameElement.textContent = `Nom: ${pokemon.name}`;

          cardElement.appendChild(idElement);
          cardElement.appendChild(spriteElement);
          cardElement.appendChild(nameElement);

          cardElement.addEventListener('click', () => {
              openPokemonModal(pokemon);
          });

          containerElement.appendChild(cardElement);
      });
  }

  displayCaughtPokemonsInCards();

  closeModalButton.addEventListener('click', () => {
      modalElement.style.display = 'none';
  });

  function addToFavorites(pokemon) {
    // Ajouter le Pokémon aux favoris
    const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
    favorites.push(pokemon);
    localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
    alert(`Le Pokémon ${pokemon.name} a été ajouté aux favoris.`);
  }

  function removeFromCaughtList(pokemon) {
    if (caughtPokemons.length >= 30) {
      alert("Le Pokédex est plein. Retirez un Pokémon avant d'ajouter un nouveau.");
      return;
    }
  
    caughtPokemons = caughtPokemons.filter(p => p.id !== pokemon.id);
    localStorage.setItem("caughtPokemons", JSON.stringify(caughtPokemons));
    displayCaughtPokemonsInCards();
    alert(`Le Pokémon ${pokemon.name} a été retiré de la liste.`);
  }
});
