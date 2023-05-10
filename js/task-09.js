function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBtn = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

colorBtn.addEventListener('click', () =>{
  let backgroundColor = getRandomHexColor();
  spanColorEl.textContent =  backgroundColor;
  document.body.style.backgroundColor = backgroundColor; 
  
});


