// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient =>{
     const liElement = document.createElement('li');
     liElement.textContent = ingredient;
     liElement.classList.add('item');
     console.log(liElement);
     return liElement;
     
})
ingredientsEl.append(...ingredientsList);
// console.log(ingredientsList);


// console.log(liElement);
// const ingredientsList = ingredients.map(ingredient => `<li>${ingredient}</li>;`);





