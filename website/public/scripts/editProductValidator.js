const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const detailInput = document.querySelector('#detail')

const nameSpan = document.querySelector('.nameSpan')
const priceSpan = document.querySelector('.priceSpan')
const detailSpan = document.querySelector('.detailSpan')

nameInput.addEventListener('blur', () => {
    if (nameInput.value == "") {
        nameInput.classList.add('eventError')
        nameSpan.style.display = 'block' 
    } else {
        nameInput.classList.add('eventSuccess')
        nameSpan.style.display = 'none' 
    }
});
priceInput.addEventListener('blur', () => {
    if (priceInput.value == "") {
        priceInput.classList.add('eventError')
        priceSpan.style.display = 'block' 
    } else {
        priceInput.classList.add('eventSuccess')
        priceSpan.style.display = 'none' 
    }
});

detailInput.addEventListener('blur', () => {
    if (detailInput.value == "") {
        detailInput.classList.add('eventError')
        detailSpan.style.display = 'block' 
    } else {
        detailInput.classList.add('eventSuccess')
        detailSpan.style.display = 'none' 
    }
});
