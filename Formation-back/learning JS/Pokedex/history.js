// Récupération des données depuis le local storage
const missedLog = JSON.parse(localStorage.getItem('missedPokemons')) || [];
const successLog = JSON.parse(localStorage.getItem('caughtPokemons')) || [];
const releasedLog = JSON.parse(localStorage.getItem('releasedPokemons')) || [];

// Fonction pour ajouter les Pokémon capturés à la liste HTML
function addToCapturedList() {
  const capturedList = document.getElementById('captured-list');

  if (capturedList) {
    successLog.forEach((entry, index) => {
      const listItem = document.createElement('li');
      // Crée une entrée de liste avec la date actuelle et le nom du Pokémon capturé
      listItem.innerHTML = `Capturé le ${new Date().toLocaleString()} - ${entry.name}`;
      capturedList.appendChild(listItem);
    });
  }
}

// Fonction pour ajouter les Pokémon ratés à la liste HTML
function addToMissedList() {
  const missedList = document.getElementById('missed-list');

  if (missedList) {
    missedLog.forEach((entry, index) => {
      const listItem = document.createElement('li');
      // Crée une entrée de liste avec la date actuelle et le nom du Pokémon raté
      listItem.innerHTML = `Raté le ${new Date().toLocaleString()} - ${entry.name}`;
      missedList.appendChild(listItem);
    });
  }
}

// Fonction pour ajouter les Pokémon relâchés à la liste HTML
function addToReleasedList() {
  const releasedList = document.getElementById('released-list');

  if (releasedList) {
    releasedLog.forEach((entry, index) => {
      const listItem = document.createElement('li');
      // Crée une entrée de liste avec la date de relâchement et le nom du Pokémon relâché
      listItem.innerHTML = `Relâché le ${entry.releaseDate} - ${entry.name}`;
      releasedList.appendChild(listItem);
    });
  }
}

// Appel des fonctions pour afficher les listes dans le DOM
addToReleasedList();
addToCapturedList();
addToMissedList();
