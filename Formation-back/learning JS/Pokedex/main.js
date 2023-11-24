const apiUrl = 'https://pokebuildapi.fr/api/v1';
let selectedPokemonIndex;
let pokemons;
let caughtPokemons = []; // Tableau pour stocker les Pokémon attrapés

// Fonction pour obtenir un nombre aléatoire entre min et max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour obtenir 50 Pokémon de manière aléatoire
async function getRandomPokemons() {
  const randomPokemons = [];

  for (let i = 0; i < 50; i++) {
    const randomId = getRandomNumber(1, 898); // Il y a actuellement 898 Pokémon
    const pokemonUrl = `${apiUrl}/pokemon/${randomId}`;

    try {
      const response = await fetch(pokemonUrl);
      const data = await response.json();
      randomPokemons.push(data);
    } catch (error) {
      console.error(`Erreur lors de la récupération du Pokémon ${randomId}: ${error.message}`);
    }
  }

  return randomPokemons;
}

function formatTypes(pokemon) {
  const apiTypes = pokemon.apiTypes;

  if (apiTypes && apiTypes.length > 0) {
    // Si le Pokémon a deux types, les joindre avec une virgule
    return apiTypes.length === 2 ? apiTypes.map(type => type.name).join(', ') : apiTypes[0].name;
  } else {
    return '';
  }
}

// Fonction pour créer et afficher le tableau dans le DOM
function displayPokemonTable(data) {
  pokemons = data; // Assigner les données à la variable globale pokemons
  const tableContainer = document.getElementById('table');

  // Création de la table
  const table = document.createElement('table');
  table.classList.add('pokemon-table');

  function openModal(pokemon) {
    selectedPokemonIndex = pokemons.findIndex(p => p.id === pokemon.id);
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('pokemon-details');
    modalContent.innerHTML = `<p>ID: ${pokemon.id}</p><p>Nom: ${pokemon.name}</p><p>Types: ${formatTypes(pokemon)}</p>`;
    modal.style.display = 'block';
  }

  // Fonction pour fermer la modal
  window.closeModal = function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  };

  // Fonction pour tenter la capture
  window.attemptCapture = function() {
    const pokemon = pokemons[selectedPokemonIndex];
  
    // Vérifier si les statistiques du Pokémon existent
    if (pokemon.stats) {
      const pokemonSpeed = pokemon.stats.speed; // Vitesse du Pokémon
  
      if (pokemonSpeed) {
        const randomNumber = Math.floor(Math.random() * 20) + 1; // Lancer du dé 20
  
        if (randomNumber > pokemonSpeed / 10) {
          alert('Capture réussie !');
          addCaughtPokemon(); // Ajouter le Pokémon attrapé
        } else {
          alert('Capture ratée.');
        }
      } else {
        console.error('Vitesse du Pokémon non disponible.');
      }
    } else {
      console.error('Statistiques du Pokémon non disponibles.');
      console.log('Données du Pokémon au moment de la capture :', pokemon);
    }
  
    closeModal();
  };
  // Fonction pour ajouter un Pokémon attrapé
  function addCaughtPokemon() {
    if (selectedPokemonIndex !== undefined) {
      const caughtPokemon = pokemons[selectedPokemonIndex];
      caughtPokemons.push(caughtPokemon);
      console.log('Pokémon attrapé :', caughtPokemon);
    } else {
      console.error('Aucun Pokémon sélectionné.');
    }
  }

  // Création de la ligne d'en-tête (thead)
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  // Colonnes à afficher dans l'en-tête
  const headerColumns = ['ID', 'Nom', 'Types'];

  // Ajout des colonnes à l'en-tête
  headerColumns.forEach(columnText => {
    const th = document.createElement('th');
    th.textContent = columnText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Création du corps de la table (tbody)
  const tbody = document.createElement('tbody');

  // Ajout des données dans le corps de la table
  pokemons.forEach(pokemon => {
    const row = document.createElement('tr');

    // Colonnes à afficher dans chaque ligne
    const columns = [pokemon.id, pokemon.name, formatTypes(pokemon)];

    // Ajout des colonnes dans chaque ligne
    columns.forEach((columnText, columnIndex) => {
      const td = document.createElement('td');
      td.textContent = columnText;

      // Ajout de l'événement de clic à chaque cellule sauf pour la colonne des Types
      if (columnIndex !== 2) {
        td.addEventListener('click', () => openModal(pokemon));
        td.classList.add('clickable'); // Ajoute une classe pour indiquer que la cellule est cliquable
      }

      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

// Appel de la fonction pour obtenir les Pokémon aléatoires
getRandomPokemons().then(randomPokemons => {
  // Affichage des Pokémon dans le DOM
  displayPokemonTable(randomPokemons);
});

// Votre code existant...

// Fonction pour afficher les Pokémon attrapés dans le Pokédex
function displayCaughtPokemons() {
  const pokedexContainer = document.getElementById('pokedex');
  pokedexContainer.style.display = 'block';

  const pokemonCardTemplate = document.getElementById('pokemon-card-template');
  const pokemonDetailsTemplate = document.getElementById('pokemon-details-template');

  // Pour chaque Pokémon attrapé, créez une carte et ajoutez-la au Pokédex
  caughtPokemons.forEach(pokemon => {
    const cardClone = document.importNode(pokemonCardTemplate.content, true);
    const detailsClone = document.importNode(pokemonDetailsTemplate.content, true);

    // Remplissez les données de la carte
    cardClone.querySelector('.id').textContent = `ID: ${pokemon.id}`;
    cardClone.querySelector('.name').textContent = pokemon.name;
    cardClone.querySelector('.thumbnail').src = pokemon.sprite;

    // Remplissez les données de la modal des détails
    detailsClone.querySelector('.id').textContent = `ID: ${pokemon.id}`;
    detailsClone.querySelector('.name').textContent = pokemon.name;
    detailsClone.querySelector('.full-image').src = pokemon.image;
    detailsClone.querySelector('.hp').textContent = `HP: ${pokemon.stats.HP}`;
    detailsClone.querySelector('.attack').textContent = `Attack: ${pokemon.stats.attack}`;
    detailsClone.querySelector('.defense').textContent = `Defense: ${pokemon.stats.defense}`;
    detailsClone.querySelector('.special-attack').textContent = `Special Attack: ${pokemon.stats.special_attack}`;
    detailsClone.querySelector('.special-defense').textContent = `Special Defense: ${pokemon.stats.special_defense}`;
    detailsClone.querySelector('.speed').textContent = `Speed: ${pokemon.stats.speed}`;

    // Ajoutez un événement de clic pour afficher les détails du Pokémon
    cardClone.querySelector('button').addEventListener('click', () => openDetailsModal(detailsClone));

    // Ajoutez la carte au Pokédex
    pokedexContainer.appendChild(cardClone);
  });
}

// Fonction pour afficher la modal des détails du Pokémon
function openDetailsModal(detailsClone) {
  const detailsModalContainer = document.getElementById('details-modal-container');
  detailsModalContainer.innerHTML = ''; // Supprimez le contenu précédent
  detailsModalContainer.appendChild(detailsClone);
  detailsModalContainer.style.display = 'block';
}

// Fonction pour fermer la modal des détails du Pokémon
function closeDetailsModal() {
  const detailsModalContainer = document.getElementById('details-modal-container');
  detailsModalContainer.style.display = 'none';
}

