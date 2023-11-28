class FooterComponent extends HTMLElement {
    constructor() {
        super();

        // Créez un Shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
                // Définissez le contenu HTML et CSS du composant
                this.shadowRoot.innerHTML = `
                <style>
                    div {
                        /* Styles pour la première div */
                    }
    
                    img {
                        height: 50px;
                    }
    
                    .user-cards {
                        display: flex;
                        margin-left: 200px;
                    }
                      
                    .user-card {
                        margin: 0 10px;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        text-align: center;
                        background-color: #fff;
                        color: #333;
                        margin-left: 250px;
                    }
                </style>
                <div>
                    <img src="./img/pok.jpg" alt="Logo">
                </div>
                <div class="user-cards">
                    <div class="user-card">User 1</div>
                    <div class="user-card">User 2</div>
                    <div class="user-card">User 3</div>
                </div>
            `;
    }
}

// Enregistrez le composant personnalisé
customElements.define('footer-component', FooterComponent);