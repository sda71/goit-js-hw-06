// Счетчик состоит из спана и кнопок, 
// которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счетчика.

// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value')
}

let counterValue = 0;
const  counter = (direction) => {
    counterValue += direction;
    refs.valueEl.innerHTML = counterValue;
}
refs.btnDecrement.addEventListener('click', (direction) => {counter(-1);});
refs.btnIncrement.addEventListener('click', (direction) => {counter(+1);});


// let counterValue = 0;
// refs.btnDecrement.addEventListener('click', ()=> {
//     counterValue -= 1;
//     refs.valueEl.innerHTML = counterValue;

// } );
// refs.btnIncrement.addEventListener('click', ()=> {
//     counterValue += 1;
//     refs.valueEl.innerHTML = counterValue;
//   } );



// const refs = {
//     counterEl: document.querySelector('#counter'),
//     btnDecrement: document.querySelector('[data-action="decrement"]'),
//     btnIncrement: document.querySelector('[data-action="increment"]'),
//     valueEl: document.querySelector('#value')
//   };
  
//   let counterValue = 0;
  
//   const updateCounter = (direction) => {
//     counterValue += direction;
//     console.log(counterValue);
//     refs.valueEl.innerHTML = counterValue;
//   };
  
//   refs.btnDecrement.addEventListener('click', () => {
//     updateCounter(-1);
//   });
  
//   refs.btnIncrement.addEventListener('click', () => {
//     updateCounter(1);
//   });
  