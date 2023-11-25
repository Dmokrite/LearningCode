class HeaderComponent extends HTMLElement {
  connectedCallback() {
    // Ne mettez pas le lien de style ici
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <header>
        <nav>
          <a href="index.html">Monde</a>
          <a href="pokedex.html">Pokedex</a>
          <a href="historique.html">Historique</a>
        </nav>
        <div id="counter-container">
          <p>Attrapés: <span id="caught-count">0</span></p>
          <p>Ratés: <span id="missed-count">0</span></p>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
