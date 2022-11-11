/*window.addEventListener('load', function(){*/
    const formLogin = document.querySelector('form.form-login');

    /* LOGIN */

    formLogin.addEventListener('submit', function(event){

        let errors = [];

        let inputEmail = document.querySelector('#email');
    if (inputEmail.value == '') {
        errors.push('Email es un Campo obligatorio')
    } 

    let inputPassword = document.querySelector('#password');
    if (inputPassword.value == '') {
        errors.push('Contrasena es un Campo obligatorio')
    }

    if(errors.length > 0){
        event.preventDefault();
        let ulError = document.querySelector('div.error ul');
        for (let i = 0; i < errors.length; i++) {
            ulError.innerHTML +='<li>'+ errors[i]+'</li>';
        }
    }

    })
    
/*})*/