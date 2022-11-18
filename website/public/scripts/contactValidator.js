const userInput = document.querySelector('#user')
const detailInput = document.querySelector('#detail')

const userSpan = document.querySelector('.userSpan')
const detailSpan = document.querySelector('.detailSpan')

userInput.addEventListener('blur', () => {

    var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( emailValido.test(userInput.value) && (userInput.value != "")){
        userSpan.style.display = 'none'
    }else{
        userSpan.style.display = 'block'
    }

});


detailInput.addEventListener('blur', () => {
    if (detailInput.value == "") {
        detailSpan.style.display = 'block' 
    } else {
        detailSpan.style.display = 'none' 
    }
});