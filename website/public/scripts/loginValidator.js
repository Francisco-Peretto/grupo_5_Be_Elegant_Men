const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const emailSpan = document.querySelector('.emailSpan')
const passSpan = document.querySelector('.passSpan')

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