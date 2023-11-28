class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
    this.setupListeners();
    this.highlightActiveLink();
  }

  getTemplate() {
    return `
      <header>
        <nav>
          <a href="index.html" id="link-monde">Monde</a>
          <a href="pokedex.html" id="link-pokedex">Pokedex</a>
          <a href="historique.html" id="link-historique">Historique</a>
        </nav>
        <div id="counter-container">
          <p>Attrapés: <span id="caught-count">0</span></p>
          <p>Ratés: <span id="missed-count">0</span></p>
        </div>
      </header>
    `;
  }

  setupListeners() {
    const links = this.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', () => {
        // Retirez la classe "active" de tous les liens
        links.forEach(l => l.classList.remove('active'));

        // Ajoutez la classe "active" au lien cliqué
        link.classList.add('active');

        // Enregistrez l'ID du lien actif dans le stockage local
        localStorage.setItem('activeLinkId', link.id);
      });
    });
  }

  highlightActiveLink() {
    const activeLinkId = localStorage.getItem('activeLinkId');
    if (activeLinkId) {
      const activeLink = this.querySelector(`#${activeLinkId}`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
}

customElements.define('header-component', HeaderComponent);
