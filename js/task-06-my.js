// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.


// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, 
// указывается в его атрибуте data-length.

// Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.


// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     const inputLength = event.target.value.length;
//     const dataLength = event.target.getAttribute('data-length');
    
//     if(inputLength === dataLength){
        
//         event.target.classList.add('valid');   
        
//     } else {
        
//         event.target.classList.add('invalid');
//     }  
// }

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLength = event.target.value.length;
    const dataLength = event.target.getAttribute('data-length');
    
    if (inputLength === Number(dataLength)) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');   
    } else {
    //   event.target.classList.remove('valid');
      event.target.classList.add('invalid');
    }  
  }

// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener("blur", onValidButtonBlur);

// function onValidButtonBlur(event) {
//     inputEl.value.length >= parseInt(inputEl.dataset.length) ? isValueValid() : isValueInvalid();
// };

// function isValueValid() {
//     inputEl.classList.contains('invalid') ? inputEl.classList.replace('invalid', 'valid') : inputEl.classList.add('valid');
// };

// function isValueInvalid() {
//     inputEl.classList.contains('valid') ? inputEl.classList.replace('valid', 'invalid') : inputEl.classList.add('invalid');
// };

// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener("blur", onValidButtonBlur);

// function onValidButtonBlur(event) {
//     inputRef.value.length >= parseInt(inputRef.dataset.length) ? isValueValid() : isValueInvalid();
// };

// function isValueValid() {
//     inputRef.classList.contains('invalid') ? inputRef.classList.replace('invalid', 'valid') : inputRef.classList.add('valid');
// };

// function isValueInvalid() {
//     inputRef.classList.contains('valid') ? inputRef.classList.replace('valid', 'invalid') : inputRef.classList.add('invalid');
// };