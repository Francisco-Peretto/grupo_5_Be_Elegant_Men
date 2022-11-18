const firstNameInput = document.querySelector('.firstNameProfileInput')
const lastNameInput = document.querySelector('.lastNameProfileInput')
const actualPassInput = document.querySelector('.actualPassProfileInput')
const newPassInput = document.querySelector('.newPassProfileInput')
const checkNewPassInput = document.querySelector('.checkNewPassProfileInput')

const firstNameProfileSpan = document.querySelector('.firstNameProfileSpan')
const lastNameProfileSpan = document.querySelector('.lastNameProfileSpan')
const actualPassProfileSpan = document.querySelector('.actualPassProfileSpan')
const newPassProfileSpan = document.querySelector('.newPassProfileSpan')
const checkNewPassProfileSpan = document.querySelector('.checkNewPassProfileSpan')

firstNameInput.addEventListener('blur', () => {
    if (firstNameInput.value == "") {
        firstNameProfileSpan.style.display = 'block'
    } else {
        firstNameProfileSpan.style.display = 'none'
    }
});

lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value == "") {
        lastNameProfileSpan.style.display = 'block'
    } else {
        lastNameProfileSpan.style.display = 'none'
    }
});

actualPassInput.addEventListener('blur', () => {
    if (actualPassInput.value == "") {
        actualPassProfileSpan.style.display = 'block'
    } else {
        actualPassProfileSpan.style.display = 'none'
    }
});

newPassInput.addEventListener('blur', () => {
    if (newPassInput.value == "") {
        newPassProfileSpan.style.display = 'block'
    } else {
        newPassProfileSpan.style.display = 'none'
    }
});

checkNewPassInput.addEventListener('blur', () => {
    if (checkNewPassInput.value == "") {
        checkNewPassProfileSpan.style.display = 'block'
    } else {
        checkNewPassProfileSpan.style.display = 'none'
    }
});
