let list = {
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
        return Object.values(list.products).flatMap(productType =>
            productType.map(product => (product.price * product.quantity).toFixed(2)
            )
        );
    }
};

const listTitle = list.title;
const listTitleElement = document.getElementById('list-title');
listTitleElement.textContent = listTitle;
const productsTable = document.getElementById('products');
const categoryInput = document.getElementById('category-input');
const addCategoryButton = document.getElementById('add-category-button');
const detailsDiv = document.getElementById('category-div');
const showCategoryButton = document.getElementById('show-category-button');
showCategoryButton.addEventListener('click', toggleCategoryDiv);
addCategoryButton.addEventListener('click', addCategory);
categoryInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addCategory(event);
    }
});

const showProductButton = document.getElementById('show-product-button');
const addProductButton = document.getElementById('add-product-button');
const productNameInput = document.getElementById('product-name-input');
const productPriceInput = document.getElementById('product-price-input');
const productQuantityInput = document.getElementById('product-quantity-input');
const categorySelect = document.getElementById('category-select');
const productDiv = document.getElementById('product-div');

showProductButton.addEventListener('click', toggleProductDiv);
addProductButton.addEventListener('click', addProduct);
productNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addProduct(event);
    }
});

const createTableRow = (productType, product) => {
    const createCell = (value, type = 'td') => {
        const cell = document.createElement(type);
        cell.innerText = value;
        cell.classList.add('custom-td');
        return cell;
    };

    const createDeleteButton = () => {
        const button = document.createElement('button');
        button.innerText = 'X';
        button.addEventListener('click', () => {
            deleteProduct(productType, product);
        });
        const cell = document.createElement('td');
        cell.appendChild(button);
        return cell;
    };

    const row = document.createElement('tr');
    row.appendChild(createCell(productType));
    row.appendChild(createCell(product.product, 'td'));
    row.appendChild(createCell(product.price.toFixed(2), 'td'));
    row.appendChild(createCell(product.quantity, 'td'));
    row.appendChild(createCell((product.price * product.quantity).toFixed(2), 'td'));
    row.appendChild(createDeleteButton());

    return row;
}

function sortCategories(originalProducts) {
    return Object.keys(originalProducts).sort((a, b) => a.localeCompare(b));
}

function deleteProduct(productType, product) {
    const productIndex = list.products[productType].indexOf(product);
    if (productIndex !== -1) {
        list.products[productType].splice(productIndex, 1);
        updateTable();
    }
}

function updateTable() {
    productsTable.innerHTML = '';
    const originalProducts = list.products;
    const sortedCategories = sortCategories(originalProducts);
    const sortedProducts = {};
  
    sortedCategories.forEach(category => {
      sortedProducts[category] = originalProducts[category];
    });
  
    list.products = sortedProducts;
  
    for (const productType in list.products) {
      list.products[productType].forEach(product => {
        const row = createTableRow(productType, product);
        productsTable.appendChild(row);
      });
    }
  
    const totalAmount = calculateTotalAmount();
    updateTotalAmount(totalAmount);
    updateCategorySelect();
}

function calculateTotalAmount() {
    return list.subTotal().reduce((acc, val) => acc + parseFloat(val), 0);
}

function updateTotalAmount(totalAmount) {
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = totalAmount.toFixed(2);
}
  
function updateCategorySelect() {
    const categorySelect = document.getElementById('category-select');
    categorySelect.innerHTML = '';

    list.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function toggleCategoryDiv() {
    const categoryModal = document.getElementById('category-div');
    if (categoryModal.style.display === 'none' || categoryModal.style.display === '') {
        categoryModal.style.display = 'block';
    } else {
        categoryModal.style.display = 'none';
    }
}

function addCategory(e) {
    e.preventDefault();
    const newCategory = categoryInput.value.trim().toLowerCase();
    const errorContainer = document.getElementById('category-error');

    if (newCategory !== '') {
        if (list.categories.includes(newCategory)) {
            errorContainer.textContent = 'Cette catégorie existe déjà.';
        } else {
            list.categories.push(newCategory);
            updateCategorySelect();
            categoryInput.value = '';
            errorContainer.textContent = '';
            toggleCategoryDiv();
        }
    } else {
        errorContainer.textContent = 'Le champ catégorie ne peut pas être vide.';
    }
}

function toggleProductDiv() {
    const productModal = document.getElementById('product-div');
    if (productModal.style.display === 'none' || productModal.style.display === '') {
        productModal.style.display = 'block';
    } else {
        productModal.style.display = 'none';
    }
}

function addProduct(e) {
    e.preventDefault();
    const productName = productNameInput.value.trim().toLowerCase();
    const productPrice = parseFloat(productPriceInput.value);
    const productQuantity = parseInt(productQuantityInput.value, 10);
    const category = categorySelect.value;
    const errorContainer = document.getElementById('product-error');

    if (productName !== '' && !isNaN(productPrice) && !isNaN(productQuantity) && productPrice >= 0 && productQuantity >= 0) {
        if (!list.products[category]) {
            list.products[category] = [];
        }

        const productExists = list.products[category].some(product => product.product.toLowerCase() === productName);

        if (productExists) {
            errorContainer.textContent = 'Ce produit existe déjà dans la liste.';
        } else {
            list.products[category].push({
                product: productName,
                price: productPrice,
                quantity: productQuantity,
            });

            updateTable();
            productNameInput.value = '';
            productPriceInput.value = '';
            productQuantityInput.value = '';
            errorContainer.textContent = '';
            toggleProductDiv();
        }
    } else {
        errorContainer.textContent = 'Veuillez remplir tous les champs correctement.';
    }
}

updateTable();
updateCategorySelect();