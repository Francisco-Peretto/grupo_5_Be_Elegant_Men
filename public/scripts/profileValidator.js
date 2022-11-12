const firstNameInput = document.querySelector('.fisrtNameProfileInput')
const lastNameInput = document.querySelector('.lastNameProfileInput')
const actualPassInput = document.querySelector('.actualPassProfileInput')
const newPassInput = document.querySelector('.newPassProfileInput')
const checkNewPassInput = document.querySelector('.checkNewPassProfileInput')

const fisrtNameProfileSpan = document.querySelector('.fisrtNameProfileSpan')
const lastNameProfileSpan = document.querySelector('.lastNameProfileSpan')
const actualPassProfileSpan = document.querySelector('.actualPassProfileSpan')
const newPassProfileSpan = document.querySelector('.newPassProfileSpan')
const checkNewPassProfileSpan = document.querySelector('.checkNewPassProfileSpan')

firstNameInput.addEventListener('blur', () => {
    if (firstNameInput.value == "") {
        firstNameInput.classList.add('eventError')
        fisrtNameProfileSpan.style.display = 'block'
    } else {
        firstNameInput.classList.add('eventSuccess')
        fisrtNameProfileSpan.style.display = 'none'
    }
});

lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value == "") {
        lastNameInput.classList.add('eventError')
        lastNameProfileSpan.style.display = 'block'
    } else {
        lastNameInput.classList.add('eventSuccess')
        lastNameProfileSpan.style.display = 'block'
    }
});

actualPassInput.addEventListener('blur', () => {
    if (actualPassInput.value == "") {
        actualPassInput.classList.add('eventError')
        actualPassProfileSpan.style.display = 'block'
    } else {
        actualPassInput.classList.add('eventSuccess')
        actualPassProfileSpan.style.display = 'none'
    }
});

newPassInput.addEventListener('blur', () => {
    if (newPassInput.value == "") {
        newPassInput.classList.add('eventError')
        newPassProfileSpan.style.display = 'block'
    } else {
        newPassInput.classList.add('eventSuccess')
        newPassProfileSpan.style.display = 'none'
    }
});

checkNewPassInput.addEventListener('blur', () => {
    if (checkNewPassInput.value == "") {
        checkNewPassInput.classList.add('eventError')
        checkNewPassProfileSpan.style.display = 'block'
    } else {
        checkNewPassInput.classList.add('eventSuccess')
        checkNewPassProfileSpan.style.display = 'none'
    }
});
