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
        firstNameSpan.style.display = 'block'
    } else {
        firstNameSpan.style.display = 'none'
    }
});

lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value == "") {
        lastNameSpan.style.display = 'block'
    } else {
        lastNameSpan.style.display = 'none'
    }
});

emailInput.addEventListener('blur', () => {

    var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( emailValido.test(emailInput.value) && (emailInput.value != "")){
        emailSpan.style.display = 'none'
    }else{
        emailSpan.style.display = 'block'
    }

});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value == "") {
        passSpan.style.display = 'block'
    } else {
        passSpan.style.display = 'none'
    }
});

rePasswordInput.addEventListener('blur', () => {
    if (rePasswordInput.value == "") {
        rePassSpan.style.display = 'block'
    } else {
        rePassSpan.style.display = 'none'
    }
});