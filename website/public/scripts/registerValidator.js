const firstNameInput = document.querySelector('#first_name')
const lastNameInput = document.querySelector('#last_name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const rePasswordInput = document.querySelector('#repassword')

const firstNameSpan = document.querySelector('.firstNameSpan')
const lastNameSpan = document.querySelector('.lastNameSpan')
const emailSpan = document.querySelector('.emailSpan')
const passSpan = document.querySelector('.passSpan')
const rePassSpan = document.querySelector('.rePassSpan')

firstNameInput.addEventListener('blur', () => {
    if (firstNameInput.value == "") {
        firstNameInput.classList.add('eventError')
        firstNameSpan.style.display = 'block'
    } else {
        firstNameInput.classList.add('eventSuccess')
        firstNameSpan.style.display = 'none'
    }
});

lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value == "") {
        lastNameInput.classList.add('eventError')
        lastNameSpan.style.display = 'block'
    } else {
        lastNameInput.classList.add('eventSuccess')
        lastNameSpan.style.display = 'none'
    }
});

emailInput.addEventListener('blur', () => {

    var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( emailValido.test(emailInput.value) && (emailInput.value != "")){
        emailInput.classList.add('eventSuccess')
        emailSpan.style.display = 'none'
    }else{
        emailInput.classList.add('eventError')
        emailSpan.style.display = 'block'
    }

});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value == "") {
        passwordInput.classList.add('eventError')
        passSpan.style.display = 'block'
    } else {
        passwordInput.classList.add('eventSuccess')
        passSpan.style.display = 'none'
    }
});

rePasswordInput.addEventListener('blur', () => {
    if (rePasswordInput.value == "") {
        rePasswordInput.classList.add('eventError')
        rePassSpan.style.display = 'block'
    } else {
        rePasswordInput.classList.add('eventSuccess')
        rePassSpan.style.display = 'none'
    }
});