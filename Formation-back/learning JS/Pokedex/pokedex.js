// Fonction pour afficher les données dans un élément ul
function displayCaughtPokemonsInList() {
    const ulElement = document.getElementById('caught-pokemons-list');
  
    // Vérifiez si l'élément ul existe dans le DOM
    if (ulElement) {
      // Effacez le contenu actuel de l'ul avant d'ajouter les nouvelles données
      ulElement.innerHTML = '';
    
      const caughtPokemons = JSON.parse(localStorage.getItem("caughtPokemons"))
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
  
  // Appelez la fonction pour afficher les données dans l'ul
  displayCaughtPokemonsInList();
  