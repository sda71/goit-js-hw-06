const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLength = event.target.value.length;
    const dataLength = event.target.getAttribute('data-length');
    
    if (inputLength === Number(dataLength)) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');   
    } else {
          event.target.classList.add('invalid');
    }  
  }