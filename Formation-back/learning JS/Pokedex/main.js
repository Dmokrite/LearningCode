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
  displayCaughtPokemonsInList();

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
  modalContent.innerHTML = `<p>ID: ${pokemon.id}</p><p>Nom: ${pokemon.name}</p><p>Types: ${formatTypes(pokemon)}</p>`;
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


function addToCapturedList(pokemon) {
  const capturedList = document.getElementById('captured-list');

  if (capturedList) {
      const listItem = document.createElement('li');
      const captureDate = new Date().toLocaleString();

      listItem.innerHTML = `Capturé le ${captureDate} - ID: ${pokemon.id} | Nom: ${pokemon.name}`;
      capturedList.appendChild(listItem);
  }
}

function addToMissedList(pokemon) {
  const missedList = document.getElementById('missed-list');

  if (missedList) {
      const listItem = document.createElement('li');
      const missDate = new Date().toLocaleString();

      listItem.innerHTML = `Raté le ${missDate} - ID: ${pokemon.id} | Nom: ${pokemon.name}`;
      missedList.appendChild(listItem);
  }
}

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
    caughtCountElement.textContent = capturedCount;  // Utilisez la variable globale ici
    missedCountElement.textContent = missedCount;

    localStorage.setItem('capturedCount', capturedCount);
    localStorage.setItem('missedCount', missedCount);
  }
}

function addCaughtPokemon() {
  if (selectedPokemonIndex !== undefined) {
    const caughtPokemon = pokemons[selectedPokemonIndex];
    caughtPokemons.push(caughtPokemon);
    console.log('Pokémon attrapé :', caughtPokemon);
    console.log('caughtPokemons:', caughtPokemons);
    updateCounterText();
  } else {
    console.error('Aucun Pokémon sélectionné.');
  }
}

getRandomPokemons().then(randomPokemons => {
  displayPokemonTable(randomPokemons);
});

// Fonction pour afficher les données dans un élément ul
function displayCaughtPokemonsInList() {
  const ulElement = document.getElementById('caught-pokemons-list');

  // Vérifiez si l'élément ul existe dans le DOM
  if (ulElement) {
    // Effacez le contenu actuel de l'ul avant d'ajouter les nouvelles données
    ulElement.innerHTML = '';

    // Parcourez le tableau caughtPokemons et créez un élément li pour chaque Pokémon attrapé
    caughtPokemons.forEach(pokemon => {
      const liElement = document.createElement('li');
      liElement.textContent = `ID: ${pokemon.id} | Nom: ${pokemon.name}`;
      
      // Ajoutez l'élément li à l'ul
      ulElement.appendChild(liElement);
    });
  } else {
    console.error("L'élément ul n'a pas été trouvé dans le DOM.");
  }
}

// Vous pouvez appeler cette fonction à un moment approprié, par exemple après avoir ajouté un Pokémon
addCaughtPokemon();

// Appelez la fonction pour afficher les données dans l'ul
displayCaughtPokemonsInList();

function openDetailsModal(detailsClone) {
  const detailsModalContainer = document.getElementById('details-modal-container');
  detailsModalContainer.innerHTML = '';
  detailsModalContainer.appendChild(detailsClone);
  detailsModalContainer.style.display = 'block';
}

function closeDetailsModal() {
  const detailsModalContainer = document.getElementById('details-modal-container');
  detailsModalContainer.style.display = 'none';
}
