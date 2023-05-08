const inputEl = document.querySelector('#font-size-control');
const outputEL = document.querySelector('#text');


inputEl.addEventListener('input', onInputeSize);


function onInputeSize (event){
    const fontSizeOut = event.target.value +'px';
    console.log(fontSizeOut);
    outputEL.style.fontSize = fontSizeOut;
}