// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color 
// и выводит значение цвета в span.color.

{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */}

const widgetEl = document.querySelector('.widget');
const colorBtn = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

colorBtn.addEventListener('click', () =>{
  document.body.style.backgroundColor = getRandomHexColor(); 
  spanColorEl.textContent =  getRandomHexColor();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}