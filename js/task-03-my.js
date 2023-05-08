const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// 11111111111111111111111111111111111111111111111111111111
// вариант с помощью шаблонной строки и insertAdjacentHTML

const galleryList = document.querySelector('.gallery');


galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';
galleryList.style.gap = '40px';
galleryList.style.justifyContent = 'space-between';

const galleryItem = document.querySelector('.item');
// galleryItem.style.margin = '40px';

// const galImageEl = document.querySelector('.galImage');


const imagesList = 
images.map(image => `<li class="item">
<img class="image" src="${image.url}" alt="${image.alt}" width = "2000px"></img>
</li>`);

const galleryImage = document.querySelector('.image');
// galleryImageEl.style.margin = "40px";

galleryList.insertAdjacentHTML("afterbegin", imagesList);






// 22222222222222222222222222222222222222222222222222222222222222222222222
// вариант с помощью document.createElement и galleryList.append(...imagesList);
// const galleryList = document.querySelector('.gallery');
// // console.log(galleryList);


// const imagesList = images.map(image =>{
//   const galleryItem = document.createElement('li');
//   const galleryImg = document.createElement('img');
//   galleryImg.src = image.url;
//   galleryImg.alt = image.alt;
//   galleryItem.append(galleryImg);
//   console.log(galleryItem);
//   return galleryItem;
  
// })

// galleryList.append(...imagesList);

