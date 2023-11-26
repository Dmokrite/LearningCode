const apiUrl = 'https://pokebuildapi.fr/api/v1';
let selectedPokemonIndex;
let initialPokemons;
let remainingPokemons;
let caughtPokemons = [];
let capturedCount = 0;
let missedCount = 0;

document.addEventListener('DOMContentLoaded', async () => {
  initialPokemons = await getRandomPokemons();
  remainingPokemons = [...initialPokemons];

  capturedCount = localStorage.getItem('capturedCount') || 0;
  missedCount = localStorage.getItem('missedCount') || 0;
  updateCounterText();

  document.getElementById('refreshAPI').addEventListener('click', async () => {
    console.log('click');
    caughtPokemons = [];
    remainingPokemons = [...initialPokemons];
    displayPokemonTable(remainingPokemons);
  });

  displayPokemonTable(remainingPokemons);
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getRandomPokemons() {
  const randomPokemons = [];

  for (let i = 0; i < 50; i++) {
    const randomId = getRandomNumber(1, 898);
    const pokemonUrl = `${apiUrl}/pokemon/${randomId}`;

    try {
      const response = await fetch(pokemonUrl);
    
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
      }
    
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
    return apiTypes.length === 2 ? apiTypes.map(type => type.name).join(', ') : apiTypes[0].name;
  } else {
    return '';
  }
}

function displayPokemonTable(data) {
  pokemons = data;
  const tableContainer = document.getElementById('table');
  if (!tableContainer) {
    console.error("Erreur : Le conteneur de table n'est pas correctement défini.");
    return;
  }

  const table = document.createElement('table');
  table.classList.add('pokemon-table');
  tableContainer.innerHTML = '';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerColumns = ['ID', 'Nom', 'Types'];

  headerColumns.forEach(columnText => {
    const th = document.createElement('th');
    th.textContent = columnText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  pokemons.forEach(pokemon => {
    const row = document.createElement('tr');
    const columns = [pokemon.id, pokemon.name, formatTypes(pokemon)];

    columns.forEach((columnText, columnIndex) => {
      const td = document.createElement('td');
      td.textContent = columnText;

      if (columnIndex !== 2) {
        td.addEventListener('click', () => openModal(pokemon));
        td.classList.add('clickable');
      }

      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

function openModal(pokemon) {
  selectedPokemonIndex = pokemons.findIndex(p => p.id === pokemon.id);
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('pokemon-details');

  // Créez un élément img pour afficher l'image du sprite
  const spriteImage = document.createElement('img');
  spriteImage.src = pokemon.sprite;
  spriteImage.alt = `Sprite de ${pokemon.name}`;

  // Ajoutez cet élément img au contenu de la modal
  modalContent.innerHTML = `<p>ID: ${pokemon.id}</p>`;
  modalContent.appendChild(spriteImage);
  modalContent.innerHTML += `<p>Nom: ${pokemon.name}</p><p>Types: ${formatTypes(pokemon)}</p>`;

  modal.style.display = 'block';
}

window.closeModal = function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
};

window.attemptCapture = function () {
  const pokemon = pokemons[selectedPokemonIndex];

  if (pokemon.stats) {
    const pokemonSpeed = pokemon.stats.speed;

    if (pokemonSpeed) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;

      if (randomNumber > pokemonSpeed / 10) {
        if (!pokemon.caught) {
          displayErrorMessage('Capture réussie !', true);
          
          pokemon.caught = true;
          updateCounterText();
          addCaughtPokemon();
          addMissedPokemon();
          
        }
      } else {
        displayErrorMessage('Capture ratée.', false);
      }
    } else {
      displayErrorMessage('Vitesse du Pokémon non disponible.', false);
    }
  } else {
    displayErrorMessage('Statistiques du Pokémon non disponibles.', false);
    console.log('Données du Pokémon au moment de la capture :', pokemon);
  }

  closeModal();
};

window.attemptCapture = function () {
  const pokemon = pokemons[selectedPokemonIndex];

  if (pokemon.stats) {
    const pokemonSpeed = pokemon.stats.speed;

    if (pokemonSpeed) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;

      if (randomNumber > pokemonSpeed / 10) {
        if (!pokemon.caught) {
          displayErrorMessage('Capture réussie !', true);
          pokemon.caught = true;
          updateCounterText();
          addCaughtPokemon();
        }
      } else {
        displayErrorMessage('Capture ratée.', false);
        addMissedPokemon();
      }
    } else {
      displayErrorMessage('Vitesse du Pokémon non disponible.', false);
    }
  } else {
    displayErrorMessage('Statistiques du Pokémon non disponibles.', false);
    console.log('Données du Pokémon au moment de la capture :', pokemon);
  }

  closeModal();
};

function addMissedPokemon() {
  if (selectedPokemonIndex !== undefined) {
    const missedPokemon = pokemons[selectedPokemonIndex];
    const storedMissedPokemons = JSON.parse(localStorage.getItem('missedPokemons')) || [];

    // Vérifier si le Pokémon est déjà dans le tableau
    const isAlreadyMissed = storedMissedPokemons.some(p => p.id === missedPokemon.id);

    if (!isAlreadyMissed) {
      // Ajouter le Pokémon au tableau
      storedMissedPokemons.push(missedPokemon);

      // Enregistrer le tableau mis à jour dans le localStorage
      localStorage.setItem('missedPokemons', JSON.stringify(storedMissedPokemons));

      // Ajouter l'événement raté dans l'historique
      addToEventHistory(`Raté(e) le : ${new Date().toLocaleString()} ${missedPokemon.name}`);

      console.log('Pokémon raté :', missedPokemon);
      console.log('missedPokemons:', storedMissedPokemons);

      missedCount++;
      updateCounterText();
    } else {
      console.warn('Ce Pokémon a déjà été raté.');
    }
  } else {
    console.error('Aucun Pokémon sélectionné.');
  }
}

// Fonction pour ajouter un événement à l'historique
function addToEventHistory(event) {
  const logHistory = JSON.parse(localStorage.getItem('logHistory')) || [];

  // Vérifier si l'événement est déjà dans l'historique
  const isAlreadyInHistory = logHistory.includes(event);

  if (!isAlreadyInHistory) {
    // Ajouter l'événement à l'historique
    logHistory.push(event);

    // Enregistrer l'historique mis à jour dans le localStorage
    localStorage.setItem('logHistory', JSON.stringify(logHistory));

    console.log('Événement enregistré dans l\'historique :', event);
  } else {
    console.warn('Cet événement est déjà dans l\'historique.');
  }
}
// Appelez la fonction pour ajouter un événement raté à l'historique
addMissedPokemon();

function displayErrorMessage(message, success) {
  const errorContainer = document.getElementById('error-container');
  errorContainer.textContent = message;

  if (success) {
    errorContainer.style.color = 'green';
    remainingPokemons.shift();

    if (!pokemons[selectedPokemonIndex].caught) {
      capturedCount++;
      pokemons[selectedPokemonIndex].caught = true;
      updateCounterText();
    }
  } else {
    errorContainer.style.color = 'red';
    missedCount++;
    updateCounterText();
  }

  errorContainer.style.display = 'block';

  setTimeout(() => {
    errorContainer.textContent = '';
    errorContainer.style.display = 'none';

    displayPokemonTable(remainingPokemons);
  }, 3000);
}

function updateCounterText() {
  const caughtCountElement = document.getElementById('caught-count');
  const missedCountElement = document.getElementById('missed-count');

  if (caughtCountElement && missedCountElement) {
    caughtCountElement.textContent = capturedCount;
    missedCountElement.textContent = missedCount;

    localStorage.setItem('capturedCount', capturedCount);
    localStorage.setItem('missedCount', missedCount);
  }
}

function addCaughtPokemon() {
  if (selectedPokemonIndex !== undefined) {
    const caughtPokemon = pokemons[selectedPokemonIndex];
    const storedCaughtPokemons = JSON.parse(localStorage.getItem('caughtPokemons')) || [];

    // Vérifier si le Pokémon est déjà dans le tableau
    const isAlreadyCaught = storedCaughtPokemons.some(p => p.id === caughtPokemon.id);

    if (!isAlreadyCaught) {
      // Ajouter le Pokémon au tableau
      storedCaughtPokemons.push(caughtPokemon);

      // Enregistrer le tableau mis à jour dans le localStorage
      localStorage.setItem('caughtPokemons', JSON.stringify(storedCaughtPokemons));

      // Ajouter l'événement capturé dans l'historique
      addToEventHistory(`Capturé(e) le : ${new Date().toLocaleString()} ${caughtPokemon.name}`);

      console.log('Pokémon attrapé :', caughtPokemon);
      console.log('caughtPokemons:', storedCaughtPokemons);

      updateCounterText();
    } else {
      console.warn('Ce Pokémon a déjà été capturé.');
    }
  } else {
    console.error('Aucun Pokémon sélectionné.');
  }
}

// Appelez la fonction pour ajouter un événement capturé à l'historique
addCaughtPokemon();
getRandomPokemons().then(randomPokemons => {
  displayPokemonTable(randomPokemons);
});
