const firstNameInput = document.querySelector('#first_name')
const lastNameInput = document.querySelector('#last_name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const rePasswordInput = document.querySelector('#repassword')

firstNameInput.addEventListener('blur', () => {
    if (firstNameInput.value == "") {
        firstNameInput.classList.add('eventError')
    } else {
        firstNameInput.classList.add('eventSuccess')
    }
});
lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value == "") {
        lastNameInput.classList.add('eventError')
    } else {
        lastNameInput.classList.add('eventSuccess')
    }
});

emailInput.addEventListener('blur', () => {

    var emialValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( emialValido.test(emailInput.value) && (emailInput.value != "")){
        emailInput.classList.add('eventSuccess')
    }else{
        emailInput.classList.add('eventError')
    }

});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value == "") {
        passwordInput.classList.add('eventError')
    } else {
        passwordInput.classList.add('eventSuccess')
    }
});

rePasswordInput.addEventListener('blur', () => {
    if (rePasswordInput.value == "") {
        rePasswordInput.classList.add('eventError')
    } else {
        rePasswordInput.classList.add('eventSuccess')
    }
});