const firstNameInput = document.querySelector('.fisrtNameProfileInput')
const lastNameInput = document.querySelector('.lastNameProfileInput')
const actualPassInput = document.querySelector('.actualPassProfileInput')
const newPassInput = document.querySelector('.newPassProfileInput')
const checkNewPassInput = document.querySelector('.checkNewPassProfileInput')

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

actualPassInput.addEventListener('blur', () => {
    if (actualPassInput.value == "") {
        actualPassInput.classList.add('eventError')
    } else {
        actualPassInput.classList.add('eventSuccess')
    }
});

newPassInput.addEventListener('blur', () => {
    if (newPassInput.value == "") {
        newPassInput.classList.add('eventError')
    } else {
        newPassInput.classList.add('eventSuccess')
    }
});

checkNewPassInput.addEventListener('blur', () => {
    if (checkNewPassInput.value == "") {
        checkNewPassInput.classList.add('eventError')
    } else {
        checkNewPassInput.classList.add('eventSuccess')
    }
});
