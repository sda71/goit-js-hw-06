const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.children;

console.log('Number of categories: ', categoriesItems.length);

Array.from(categoriesItems).forEach(item => {
  const itemTitle = item.firstElementChild.textContent;
  console.log('Category: ', itemTitle);
  
  const numOfElements = item.querySelectorAll('li').length;
  console.log('Elements: ', numOfElements);
});


