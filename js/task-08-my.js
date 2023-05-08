// 1. Обработка отправки формы form.login-form должна быть по событию submit.

// 2. При отправке формы страница не должна перезагружаться.

// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.

// 4. Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.

// 5. Выведи обьект с введенными данными в консоль 
// и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    
    if(email === ''||password === ''){
        alert('Караул!!! Заполни все поля!!!!');
        return;
    }
    const formData = {
        email: email,
        password: password
    }
    console.log(formData);
    formEl.reset();

}



