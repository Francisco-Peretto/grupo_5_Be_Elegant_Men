const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const detailInput = document.querySelector('#detail')

nameInput.addEventListener('blur', () => {
    if (nameInput.value == "") {
        nameInput.classList.add('eventError')
    } else {
        nameInput.classList.add('eventSuccess')
    }
});
priceInput.addEventListener('blur', () => {
    if (priceInput.value == "") {
        priceInput.classList.add('eventError')
    } else {
        priceInput.classList.add('eventSuccess')
    }
});

detailInput.addEventListener('blur', () => {
    if (detailInput.value == "") {
        detailInput.classList.add('eventError')
    } else {
        detailInput.classList.add('eventSuccess')
    }
});
