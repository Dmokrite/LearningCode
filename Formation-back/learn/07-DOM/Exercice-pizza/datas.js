const pizzas = [
    {
      id: 1,
      category: 'Pizza',
      name: 'Margherita',
      topping: ['Tomate', 'Mozzarella', 'Basilic'],
      price: 79,
      rank: 3,
    },
    {
      id: 2,
      category: 'Pizza',
      name: 'Hawaii',
      topping: ['Tomate', 'Jambon', 'Mozzarella', 'Ananas'],
      price: 79,
      rank: 1,
    },
    {
      id: 3,
      category: 'Pizza',
      name: 'Parma',
      topping: ['Tomate', 'Mozarrella', 'Jambon de parme', 'Olive', 'Basilic'],
      price: 89,
      rank: 2,
    },
    {
      id: 4,
      category: 'Pizza',
      name: 'Scampi',
      topping: ['Tomate', 'Mozarrella', 'Ail', 'Scampi', 'Basilic'],
      price: 89,
      rank: 2,
    },
    {
      id: 5,
      category: 'Pizza',
      name: 'Nutella',
      topping: ['Nutella', 'Fraise', 'Sucre'],
      price: 89,
      rank: 2,
    },
    {
      id: 6,
      category: 'Pizza',
      name: 'WTF',
      topping: ['Nutella', 'Tomate', 'Sucre', 'Huitre', 'Scampi', 'Viande hachée'],
      price: 100,
      rank: 2,
    },
  ];
  
const ingredients = [
    'Nutella',
    'Tomate',
    'Sucre',
    'Huitre',
    'Scampi',
    'Viande hachée',
    'Fraise',
    'Mozarrella',
    'Ail',
    'Basilic',
    'Jambon de parme',
    'Olive',
    'Ananas',
    'Jambon',
  ];

  function generateIngredientCheckboxes() {
    const container = document.createElement('div');

    ingredients.forEach(ingredient => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = ingredient;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(ingredient));
        container.appendChild(label);
    });

    return container;
}
