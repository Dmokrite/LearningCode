document.addEventListener('DOMContentLoaded', function () {
    const customPizzaIngredients = generateIngredientCheckboxes();
    const customPizzaContainer = document.getElementById('customPizzaContainer');
    customPizzaContainer.appendChild(customPizzaIngredients);

    const addCustomPizzaButton = document.createElement('button');
    addCustomPizzaButton.textContent = 'Ajouter au panier';
    customPizzaContainer.appendChild(addCustomPizzaButton);

    function findPizzaInCart(pizza) {
        const pizzaItems = document.querySelectorAll('#pizzaBasket li');
        for (const pizzaItem of pizzaItems) {
            const nameSpan = pizzaItem.querySelector('span');
            if (nameSpan && nameSpan.textContent === pizza.name) {
                return pizzaItem;
            }
        }
        return null;
    }

    function addPizzaToCart(pizza, ingredients) {
        const pizzaBasket = document.getElementById('pizzaBasket');
        const existingPizzaItem = findPizzaInCart(pizza);
        let increaseButton;
        let quantityInput;
        let decreaseButton;
        let cartItem;
        let removeButton

        if (existingPizzaItem) {
            quantityInput = existingPizzaItem.querySelector('input[type="number"]');
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
        } else {
            cartItem = document.createElement('li');
            cartItem.classList.add('btnBasket')
            decreaseButton = document.createElement('button');
            decreaseButton.textContent = '-';
            cartItem.appendChild(decreaseButton);

            quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = 1;
            cartItem.appendChild(quantityInput);

            increaseButton = document.createElement('button');
            increaseButton.textContent = '+';
            cartItem.appendChild(increaseButton);

            removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            cartItem.appendChild(removeButton);

            const pizzaName = document.createElement('span');
            pizzaName.textContent = pizza.name;
            cartItem.appendChild(pizzaName);

            pizzaBasket.appendChild(cartItem);
        }

            cartPopup.style.display = 'block';

        if (increaseButton) {
            increaseButton.addEventListener('click', function () {
                let currentValue = parseInt(quantityInput.value);
                currentValue++;
                quantityInput.value = currentValue;
            });
        }

        if (decreaseButton) {
            decreaseButton.addEventListener('click', function () {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue <= 1) {
                    cartItem.remove();
                    if (!document.querySelector('#pizzaBasket li')) {
                        cartPopup.style.display = 'none';
                    }
                } else {
                    currentValue--;
                     quantityInput.value = currentValue;
                }
            });
        }
        if (removeButton) {
            removeButton.addEventListener('click', function () {
                cartItem.remove();
                if (!document.querySelector('#pizzaBasket li')) {
                    cartPopup.style.display = 'none';
                }
            });
        }
    }

    function generatePizzaForm() {
        const pizzaListContainer = document.getElementById('pizzaListContainer');
        pizzas.forEach(pizza => {
            const pizzaDiv = document.createElement('div');
            pizzaDiv.classList.add('pizza-item');

            const pizzaName = document.createElement('h2');
            pizzaName.textContent = pizza.name;

            const pizzaIngredients = document.createElement('div');
            pizzaIngredients.classList.add('pizza-ingredients');

            pizza.topping.forEach((topping, index) => {
                if (index > 0) {
                    pizzaIngredients.appendChild(document.createTextNode(', '));
                }
                const ingredientLabel = document.createElement('label');
                const ingredientCheckbox = document.createElement('input');
                ingredientCheckbox.type = 'checkbox';
                ingredientCheckbox.name = `pizza${pizza.id}`;
                ingredientCheckbox.value = topping;
                ingredientLabel.appendChild(document.createTextNode(topping));
                pizzaIngredients.appendChild(ingredientLabel);
            });

            pizzaDiv.appendChild(pizzaName);

            const addButton = document.createElement('button');
            addButton.textContent = '+';
            addButton.addEventListener('click', () => {
                const selectedIngredients = Array.from(pizzaIngredients.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
                const pizzaClone = { ...pizza, topping: selectedIngredients };

                addPizzaToCart(pizzaClone, selectedIngredients);
            });

            pizzaDiv.appendChild(pizzaIngredients);
            pizzaDiv.appendChild(addButton);
            pizzaListContainer.appendChild(pizzaDiv);
        });
    }

    generatePizzaForm();

    addCustomPizzaButton.addEventListener('click', () => {
        const selectedIngredients = Array.from(customPizzaIngredients.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    
        const customPizza = {
            name: 'Pizza Custom : ' + selectedIngredients.join(', '),
            topping: selectedIngredients,
        };
    
        const existingPizzaItem = findPizzaInCart(customPizza);
    
        if (existingPizzaItem) {
           
            const quantityInput = existingPizzaItem.querySelector('input[type="number"]');
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
        } else {
            addPizzaToCart(customPizza, selectedIngredients);
        }
    });

    const showCustomPizzaButton = document.getElementById('showCustomPizzaButton');
    const pizzaModified = document.querySelector('.pizzaModified');
    let isVisible = false;
        showCustomPizzaButton.addEventListener('click', function () {
    if (isVisible) {
        pizzaModified.style.display = 'none';
    isVisible = false;
    } else {
        pizzaModified.style.display = 'block';
        isVisible = true;
        }
    });
});
