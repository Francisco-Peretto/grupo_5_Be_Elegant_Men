const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

emailInput.addEventListener('blur', () => {

    var emialValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( emialValido.test(emailInput.value) && (emailInput.value != "")){
        emailInput.classList.add('eventSuccess')
    }else{
        emailInput.classList.add('eventError')
    }

});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value == "") {
        passwordInput.classList.add('eventError')
    } else {
        passwordInput.classList.add('eventSuccess')
    }
});