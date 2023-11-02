import Table from './script/table.js';
import UI from './script/userInterface.js';

class ShoppingList {
    constructor(listData) {
        this.list = listData;
        this.table = new Table(listData.products);
        this.ui = new UI(listData, this.table);

        this.ui.showCategoryButton.addEventListener('click', this.ui.toggleCategoryDiv.bind(this.ui));
        this.ui.addCategoryButton.addEventListener('click', this.ui.addCategory.bind(this.ui));
        this.ui.categoryInput.addEventListener('keydown', this.ui.onCategoryInputKeyDown.bind(this.ui));

        this.ui.showProductButton.addEventListener('click', this.ui.toggleProductDiv.bind(this.ui));
        this.ui.addProductButton.addEventListener('click', this.ui.addProduct.bind(this.ui));
        this.ui.productNameInput.addEventListener('keydown', this.ui.onProductNameInputKeyDown.bind(this.ui));

        this.ui.updateTable();
    }
}

const listData = {
    title: 'Ma liste de course',
    products: {
        fruits: [
            { product: 'pomme', price: 0.5, quantity: 2 },
            { product: 'poire', price: 0.7, quantity: 3 },
        ],
        vegetables: [
            { product: 'carotte', price: 1, quantity: 2 },
            { product: 'patate', price: 5.30, quantity: 1 },
        ],
        drinks: [
            { product: 'coca', price: 2.49, quantity: 2 },
            { product: 'orangina', price: 2.25, quantity: 3 },
        ],
    },
    categories: ['fruits', 'vegetables', 'drinks'],
    subTotal: () => {
        return Object.values(listData.products).flatMap((productType) =>
            productType.map((product) => (product.price * product.quantity).toFixed(2))
        );
    },
};

const shoppingList = new ShoppingList(listData);