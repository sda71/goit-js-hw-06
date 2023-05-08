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