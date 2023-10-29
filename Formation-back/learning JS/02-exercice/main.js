class ShoppingList {
    constructor(listData) {
        this.list = listData;
        this.listTitleElement = document.getElementById('list-title');
        this.productsTable = document.getElementById('products');
        this.showCategoryButton = document.getElementById('show-category-button');
        this.categoryInput = document.getElementById('category-input');
        this.addCategoryButton = document.getElementById('add-category-button');
        this.detailsDiv = document.getElementById('category-div');
        this.addProductButton = document.getElementById('add-product-button');
        this.productNameInput = document.getElementById('product-name-input');
        this.productPriceInput = document.getElementById('product-price-input');
        this.productQuantityInput = document.getElementById('product-quantity-input');
        this.categorySelect = document.getElementById('category-select');
        this.showProductButton = document.getElementById('show-product-button');
        this.productDiv = document.getElementById('product-div');

        this.showCategoryButton.addEventListener('click', this.toggleCategoryDiv.bind(this));
        this.addCategoryButton.addEventListener('click', this.addCategory.bind(this));
        this.categoryInput.addEventListener('keydown', this.onCategoryInputKeyDown.bind(this));

        this.showProductButton.addEventListener('click', this.toggleProductDiv.bind(this));
        this.addProductButton.addEventListener('click', this.addProduct.bind(this));
        this.productNameInput.addEventListener('keydown', this.onProductNameInputKeyDown.bind(this));
    }

    showCategoryModal = () => {
        this.detailsDiv.classList.remove('hidden');
    }

    hideCategoryModal = () => {
        this.detailsDiv.classList.add('hidden');
    }

    showProductModal = () => {
        this.productDiv.classList.remove('hidden');
    }

    hideProductModal = () => {
        this.productDiv.classList.add('hidden');
    }

    onCategoryInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addCategory(event);
        }
    }

    onProductNameInputKeyDown(event) {
        if (event.key === 'Enter') {
            this.addProduct(event);
        }
    }

    createCell = (value, type = 'td') => {
        const cell = document.createElement(type);
        cell.innerText = value;
        cell.classList.add('custom-td');
        return cell;
    }

    createDeleteButton = (productType, product) => {
        const button = document.createElement('button');
        button.innerText = 'X';
        button.addEventListener('click', () => {
            this.deleteProduct(productType, product);
        });
        const cell = document.createElement('td');
        cell.appendChild(button);
        return cell;
    }

    createTableRow = (productType, product) => {
        const row = document.createElement('tr');
        row.appendChild(this.createCell(productType));
        row.appendChild(this.createCell(product.product, 'td'));
        row.appendChild(this.createCell(product.price.toFixed(2), 'td'));
        row.appendChild(this.createCell(product.quantity, 'td'));
        row.appendChild(this.createCell((product.price * product.quantity).toFixed(2), 'td'));
        row.appendChild(this.createDeleteButton(productType, product));
        return row;
    }

    sortCategories = (originalProducts) => {
        return Object.keys(originalProducts).sort((a, b) => a.localeCompare(b));
    }

    deleteProduct = (productType, product) => {
        const productIndex = this.list.products[productType].indexOf(product);
        if (productIndex !== -1) {
            this.list.products[productType].splice(productIndex, 1);
            this.updateTable();
        }
    }

    updateTable = () => {
        this.productsTable.innerHTML = '';
        const originalProducts = this.list.products;
        const sortedCategories = this.sortCategories(originalProducts);
        const sortedProducts = {};

        sortedCategories.forEach((category) => {
            sortedProducts[category] = originalProducts[category];
        });

        this.list.products = sortedProducts;

        for (const productType in this.list.products) {
            this.list.products[productType].forEach((product) => {
                const row = this.createTableRow(productType, product);
                this.productsTable.appendChild(row);
            });
        }

        const totalAmount = this.calculateTotalAmount();
        this.updateTotalAmount(totalAmount);
        this.updateCategorySelect();
    }

    calculateTotalAmount = () => {
        return this.list.subTotal().reduce((acc, val) => acc + parseFloat(val), 0);
    }

    updateTotalAmount = (totalAmount) => {
        const totalAmountElement = document.getElementById('total-amount');
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    updateCategorySelect = () => {
        this.categorySelect.innerHTML = '';

        this.list.categories.forEach((category) => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            this.categorySelect.appendChild(option);
        });
    }

    toggleCategoryDiv = () => {
        if (this.detailsDiv.classList.contains('hidden')) {
            this.showCategoryModal();
        } else {
            this.hideCategoryModal();
        }
    }
    
    addCategory = (event) => {
        event.preventDefault();
        const newCategory = this.categoryInput.value.trim().toLowerCase();
        const errorContainer = document.getElementById('category-error');
    
        if (newCategory !== '') {
            if (this.list.categories.includes(newCategory)) {
                errorContainer.innerHTML = '<p>Cette catégorie existe déjà.</p>';
            } else {
                this.list.categories.push(newCategory);
                this.updateCategorySelect();
                this.categoryInput.value = '';
                errorContainer.innerHTML = '';
                this.hideCategoryModal();
            }
        } else {
            errorContainer.innerHTML = '<p>Le champ catégorie ne peut pas être vide.</p>';
        }
    }
    

    toggleProductDiv = () => {
        if (this.productDiv.classList.contains('hidden')) {
            this.showProductModal();
        } else {
            this.hideProductModal();
        }
    }

    addProduct = (event) => {
        event.preventDefault();
    
        const productName = this.productNameInput.value.trim().toLowerCase();
        const productPrice = parseFloat(this.productPriceInput.value);
        const productQuantity = parseInt(this.productQuantityInput.value, 10);
        const category = this.categorySelect.value;
        const errorContainer = document.getElementById('product-error');
    
        if (
            productName !== '' &&
            !isNaN(productPrice) &&
            !isNaN(productQuantity) &&
            productPrice >= 0 &&
            productQuantity >= 0
        ) {
            if (!this.list.products[category]) {
                this.list.products[category] = [];
            }
    
            const productExists = this.list.products[category].some((product) =>
                product.product.toLowerCase() === productName
            );
    
            if (productExists) {
                errorContainer.innerHTML = '<p>Ce produit existe déjà dans la liste.</p>';
            } else {
                this.list.products[category].push({
                    product: productName,
                    price: productPrice,
                    quantity: productQuantity,
                });
    
                this.updateTable();
                this.productNameInput.value = '';
                this.productPriceInput.value = '';
                this.productQuantityInput.value = '';
                errorContainer.innerHTML = '';
                this.hideProductModal();
            }
        } else {
            errorContainer.innerHTML = '<p>Veuillez remplir tous les champs correctement.</p>';
        }
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
shoppingList.updateTable();
