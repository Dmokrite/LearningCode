class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = this.getTemplate();
    }
  
    getTemplate() {
      return `
        <link rel="stylesheet" href="header-component.css">
        <header>
          <nav>
            <a href="#monde">Monde</a>
            <a href="#pokedex">Pokedex</a>
            <a href="#historique">Historique</a>
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
  