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
