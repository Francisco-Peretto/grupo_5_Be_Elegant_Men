const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const detailInput = document.querySelector('#detail')

const nameSpan = document.querySelector('.nameSpan')
const priceSpan = document.querySelector('.priceSpan')
const detailSpan = document.querySelector('.detailSpan')

nameInput.addEventListener('blur', () => {
    if (nameInput.value == "") {
        nameSpan.style.display = 'block' 
    } else {
        nameSpan.style.display = 'none' 
    }
});
priceInput.addEventListener('blur', () => {
    if (priceInput.value == "") {
        priceSpan.style.display = 'block' 
    } else {
        priceSpan.style.display = 'none' 
    }
});

detailInput.addEventListener('blur', () => {
    if (detailInput.value == "") {
        detailSpan.style.display = 'block' 
    } else {
        detailSpan.style.display = 'none' 
    }
});