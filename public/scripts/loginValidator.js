const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const emailSpan = document.querySelector('.emailSpan')
const passSpan = document.querySelector('.passSpan')

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