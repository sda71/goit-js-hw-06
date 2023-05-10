const inputEl = document.querySelector('#font-size-control');
const outputEL = document.querySelector('#text');

outputEL.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', onInputeSize);

function onInputeSize(event) {
  outputEL.style.fontSize = event.currentTarget.value + 'px';
}

