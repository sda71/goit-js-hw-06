
// // Получаем ссылку на список категорий по id
// const categoriesList = document.querySelector('#categories');

// // Получаем все элементы списка категорий, которые имеют класс 'item'
// const categoriesItems = categoriesList.querySelectorAll('.item');


// // Выводим количество категорий в списке в консоль
// console.log(`В списке ${categoriesItems.length} категории.`);

// // Для каждого элемента списка категорий
// categoriesItems.forEach(item => {
//   // Получаем заголовок элемента (элемент <h2>) и сохраняем его в переменную itemTitle
//   const itemTitle = item.querySelector('h2').textContent;
  
//   // Получаем все элементы списка категории (элементы <li> вложенные в <ul>) и сохраняем их количество в переменную itemElements
//   const itemElements = item.querySelectorAll('li').length;
  
//   // Выводим в консоль заголовок элемента и количество вложенных элементов
//   console.log(`Категория: ${itemTitle} \nКоличество элементов: ${itemElements}`);
// });



// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item =>{
  const itemTitle = item.firstElementChild.textContent;
  console.log(`Category: ${itemTitle}`);
  const numOfElements = item.querySelectorAll('li').length;
  console.log(`Elements: ${numOfElements}`);
 
})

















// Получаем ссылку на список категорий по id

// const categoriesList = document.querySelector('#categories');
// console.log(categoriesList);

// // Получаем все элементы списка категорий, которые имеют класс 'item'
// const categoriesItems = categoriesList.querySelectorAll('.item');
// console.log(categoriesItems);



// // Выводим количество категорий в списке в консоль
// console.log(`Number of categories: ${categoriesItems.length}`);


// // Для каждого элемента списка категорий
// categoriesItems.forEach(item => {
//      // Получаем заголовок элемента (элемент <h2>) и сохраняем его в переменную itemTitle
//     const itemTitle = item.querySelector('h2').textContent;
  

//       // Получаем все элементы списка категории (элементы <li> вложенные в <ul>) 
// //   и сохраняем их количество в переменную itemElements

// const itemElements = item.querySelectorAll('li').length;

// console.log(`Category: ${itemTitle}`);
// console.log(`Elements: ${itemElements}`);
// })



 

  


  
  // Выводим в консоль заголовок элемента и количество вложенных элементов
