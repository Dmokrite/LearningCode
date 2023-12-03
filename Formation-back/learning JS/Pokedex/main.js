// Définition de l'URL de l'API Pokémon
const apiUrl = 'https://pokebuildapi.fr/api/v1';

// Variables globales pour suivre l'état du jeu
let initialPokemons;
let selectedPokemonIndex;
let caughtPokemons = [];
let remainingPokemons;
let capturedCount = 0;
let missedCount = 0;
let currentPokemonIndex;

// Événement DOMContentLoaded pour lancer le jeu une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', async () => {

  // Afficher le loader au début du chargement
  document.getElementById('loader').style.display = 'flex';

    // Démarrer la lecture du fichier audio
    playAudio();

  // Initialisation des Pokémon et mise à jour des compteurs
  initialPokemons = await getRandomPokemons();
  remainingPokemons = [...initialPokemons];

  // Cacher le loader une fois le chargement terminé
  document.getElementById('loader').style.display = 'none';

    // Arrêter la lecture du fichier audio
    stopAudio();

  // Afficher le contenu principal
  document.getElementById('content').style.display = 'block';

  capturedCount = localStorage.getItem('capturedCount') || 0;
  missedCount = localStorage.getItem('missedCount') || 0;
  updateCounterText();

  // Ajout d'un événement de clic pour le bouton de rafraîchissement de l'API
  document.getElementById('refreshAPI').addEventListener('click', async () => {
    caughtPokemons = [];
    remainingPokemons = await getRandomPokemons(); // Appel à getRandomPokemons pour obtenir une nouvelle liste
    displayPokemonTable(remainingPokemons);
  });

  // Affichage initial de la table des Pokémon
  displayPokemonTable(remainingPokemons);
});

// Fonction pour démarrer la lecture du fichier audio
function playAudio() {
  const audio = document.getElementById('audio');
  if (audio) {
    audio.play();
  }
}

// Fonction pour arrêter la lecture du fichier audio
function stopAudio() {
  const audio = document.getElementById('audio');
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // Remet la lecture au début
  }
}

// Fonction pour obtenir un nombre aléatoire dans une plage donnée
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction asynchrone pour obtenir une liste de Pokémon aléatoires avec une limite spécifiée
async function getRandomPokemons() {
  const promises = [];

  for (let i = 0; i < 50; i++) {
    const randomId = getRandomNumber(1, 898);
    const pokemonUrl = `${apiUrl}/pokemon/${randomId}`;

    promises.push(
      fetch(pokemonUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        })
        .catch(error => {
          console.error(`Erreur lors de la récupération du Pokémon ${randomId}: ${error.message}`);
        })
    );
  }

  try {
    const results = await Promise.all(promises);
    return results.filter(result => result); // Filtrer les résultats non définis en cas d'erreur
  } catch (error) {
    console.error(`Erreur lors de la récupération des Pokémon: ${error.message}`);
    return [];
  }
}

// Fonction pour récupèrer les objets dans un tableau qui se trouve dans un objet (Types d'un Pokémon) 
function formatTypes(pokemon) {
  const apiTypes = pokemon.apiTypes;

  if (apiTypes && apiTypes.length > 0) {
    return apiTypes.length === 2 ? apiTypes.map(type => type.name).join(', ') : apiTypes[0].name;
  } else {
    return '';
  }
}

// Fonction pour afficher la table des Pokémon
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

  // Crée les en-têtes de colonnes
  headerColumns.forEach(columnText => {
    const th = document.createElement('th');
    th.textContent = columnText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  // Remplit le corps de la table avec les données des Pokémon
  pokemons.forEach(pokemon => {
    const row = document.createElement('tr');
    const columns = [pokemon.id, pokemon.name, formatTypes(pokemon)];

    // Crée les cellules de chaque ligne
    columns.forEach((columnText, columnIndex) => {
      const td = document.createElement('td');
      td.textContent = columnText;

      // Ajoute un événement de clic pour ouvrir la modal (sauf pour la colonne des types)
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

// Fonction pour ouvrir la modal avec les détails d'un Pokémon
function openModal(pokemon) {
  selectedPokemonIndex = initialPokemons.findIndex(p => p.id === pokemon.id);
  currentPokemonIndex = remainingPokemons.findIndex(p => p.id === pokemon.id);
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('pokemon-details');
  
  // Crée un élément img pour afficher l'image du sprite
  const spriteImage = document.createElement('img');
  spriteImage.src = pokemon.sprite;
  spriteImage.alt = `Sprite de ${pokemon.name}`;

  // Ajoute cet élément img au contenu de la modal
  modalContent.innerHTML = `<p>ID: ${pokemon.id}</p>`;
  modalContent.appendChild(spriteImage);
  modalContent.innerHTML += `<p>Nom: ${pokemon.name}</p><p>Types: ${formatTypes(pokemon)}</p>`;

  modal.style.display = 'block';
}

// Fonction pour fermer la modal
window.closeModal = function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
};

// Fonction pour tenter de capturer un Pokémon
window.attemptCapture = function() {
  const pokemon = initialPokemons[selectedPokemonIndex];

  // Vérifie si le nombre de Pokémon capturés est inférieur à 30
  if (capturedCount <= 30) {
      if (pokemon.stats) {
          const pokemonSpeed = pokemon.stats.speed;

          if (pokemonSpeed) {
              const randomNumber = Math.floor(Math.random() * 20) + 1;

              if (randomNumber > pokemonSpeed / 10) {
                  if (!pokemon.caught) {
                      displayErrorMessage('Capture réussie !', true);
                      pokemon.caught = true;

                      // Met à jour les compteurs et le Local Storage après la capture réussie
                      capturedCount++;
                      updateCounterText();
                      addCaughtPokemon();

                      // Met à jour les données du Local Storage après la capture réussie
                      localStorage.setItem('capturedCount', capturedCount);
                      localStorage.setItem('remainingPokemons', JSON.stringify(remainingPokemons));
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
  } else {
      // Affiche un message d'erreur si le Pokédex est plein
      displayErrorMessage('Le Pokédex est plein. Libérez de l\'espace avant de capturer plus de Pokémon.', false);
  }

  closeModal();
};

// Fonction pour ajouter un Pokémon raté
function addMissedPokemon() {
  if (selectedPokemonIndex !== undefined) {
    const missedPokemon = initialPokemons[selectedPokemonIndex];
    const storedMissedPokemons = JSON.parse(localStorage.getItem('missedPokemons')) || [];

    // Vérifie si le Pokémon est déjà dans le tableau
    const isAlreadyMissed = storedMissedPokemons.some(p => p.id === missedPokemon.id);

    if (!isAlreadyMissed) {
      // Ajoute le Pokémon au tableau
      storedMissedPokemons.push(missedPokemon);

      // Enregistre le tableau mis à jour dans le localStorage
      localStorage.setItem('missedPokemons', JSON.stringify(storedMissedPokemons));

      // Ajoute l'événement raté dans l'historique
      addToEventHistory(`Raté(e) le : ${new Date().toLocaleString()} ${missedPokemon.name}`);

      console.log('Pokémon raté :', missedPokemon);
      console.log('missedPokemons:', storedMissedPokemons);

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

  // Vérifie si l'événement est déjà dans l'historique
  const isAlreadyInHistory = logHistory.includes(event);

  if (!isAlreadyInHistory) {
    // Ajoute l'événement à l'historique
    logHistory.push(event);

    // Enregistre l'historique mis à jour dans le localStorage
    localStorage.setItem('logHistory', JSON.stringify(logHistory));

    console.log('Événement enregistré dans l\'historique :', event);
  } else {
    console.warn('Cet événement est déjà dans l\'historique.');
  }
}

// Appelle la fonction pour ajouter un événement raté à l'historique
addMissedPokemon();

function displayErrorMessage(message, success) {
  const errorContainer = document.getElementById('error-container');
  errorContainer.textContent = message;

  if (success) {
    errorContainer.style.color = 'green';
    remainingPokemons = remainingPokemons.filter(p => p.id !== initialPokemons[selectedPokemonIndex].id);

    if (!initialPokemons[selectedPokemonIndex].caught) {
      initialPokemons[selectedPokemonIndex].caught = true;
      updateCounterText();
    }
  } else {
    errorContainer.style.color = 'red';

    // Retire le Pokémon de la liste initiale
    initialPokemons = initialPokemons.filter(p => p.id !== initialPokemons[currentPokemonIndex].id);

    missedCount++;
    updateCounterText();

    // Met à jour currentPokemonIndex pour pointer vers le bon Pokémon raté
    currentPokemonIndex = remainingPokemons.findIndex(p => p.id === initialPokemons[currentPokemonIndex].id);
  }

  errorContainer.style.display = 'block';

  // Masque le message d'erreur après 3 secondes
  setTimeout(() => {
    errorContainer.textContent = '';
    errorContainer.style.display = 'none';

    // Actualise la table des Pokémon
    displayPokemonTable(remainingPokemons);
  }, 3000);
}

// Fonction pour mettre à jour le texte des compteurs
function updateCounterText() {
  const caughtCountElement = document.getElementById('caught-count');
  const missedCountElement = document.getElementById('missed-count');

  if (caughtCountElement && missedCountElement) {
    caughtCountElement.textContent = capturedCount;
    missedCountElement.textContent = missedCount;

    // Enregistre les compteurs dans le localStorage
    localStorage.setItem('capturedCount', capturedCount);
    localStorage.setItem('missedCount', missedCount);
  }
}

// Fonction pour ajouter un Pokémon capturé
function addCaughtPokemon() {
  if (selectedPokemonIndex !== undefined) {
    const caughtPokemon = initialPokemons[selectedPokemonIndex];
    const storedCaughtPokemons = JSON.parse(localStorage.getItem('caughtPokemons')) || [];

    // Vérifie si le Pokémon est déjà dans le tableau
    const isAlreadyCaught = storedCaughtPokemons.some(p => p.id === caughtPokemon.id);

    if (!isAlreadyCaught) {
      // Ajoute le Pokémon au tableau
      storedCaughtPokemons.push(caughtPokemon);

      // Enregistre le tableau mis à jour dans le localStorage
      localStorage.setItem('caughtPokemons', JSON.stringify(storedCaughtPokemons));

      // Ajoute l'événement capturé dans l'historique
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

// Appelle la fonction pour ajouter un événement capturé à l'historique
addCaughtPokemon();

// Obtient des Pokémon aléatoires et affiche la table
getRandomPokemons().then(randomPokemons => {
  displayPokemonTable(randomPokemons);
});
