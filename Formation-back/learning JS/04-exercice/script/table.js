class Table {
    constructor(products) {
        this.products = products;
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
        const productIndex = this.products[productType].indexOf(product);
        if (productIndex !== -1) {
            this.products[productType].splice(productIndex, 1);
        }
    }
}

export default Table;
