/*window.addEventListener('load', function(){*/
    const formRegister = document.querySelector('form.form-register');

    /* REGISTER */

    formRegister.addEventListener('submit', function(event){

    let errors = [];
    let inputName = document.querySelector('#name');
    if (inputName.value == '') {
        errors.push('Nombre es un campo obligatorio')
    } else if (inputName.value.length < 2) {
        errors.push('El campo Nombre debe tener al menos 2 caracteres')
    }


    let inputLastName = document.querySelector('#lastName');
    if(inputLastName.value == '') {
        errors.push('Apellido es un campo obligatorio')
    } else if (inputLastName.value.length < 2) {
        errors.push('El campo Apellido debe tener al menos 2 caracteres')
    }

    let inputUser = document.querySelector('#user');
    if (inputUser.value == '') {
        errors.push('Usuario es un campo obligatorio')
    } 

    let inputEmail = document.querySelector('#email');
    if (inputEmail.value == '') {
        errors.push('Email es un campo obligatorio')
    } 

    let inputPassword = document.querySelector('#password');
    if (inputPassword.value == '') {
        errors.push('Contrasena es un campo obligatorio')
    } else if (inputPassword.value.length < 8) {
        errors.push('El campo Contrasena debe tener al menos 8 caracteres')
    } else if (inputPassword.value.indexOf(number) == -1) {
        errors.push('El campo Contrasena debe tener al menos un número')
    }
    




        /*----------------let fileInput = document.getElementById('file');*/
    /* let inputAvatar = document.querySelector('#avatar')
        /*let filePath = fileInput.value;*/
    /*let extensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!extensions.exec(inputAvatar.value)){
            errors.push('Por favor seleccion un archivo .jpeg/.jpg/.png/.gif');
            inputAvatar.value = '';
            return false;
        }else{
            //Image preview
            if (inputAvatar.files && inputAvatar.files[0]) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
                };
                reader.readAsDataURL(inputAvatar.files[0]);
            }
        }*/

   /* let inputAvatar = document.querySelector('#avatar');
    let extensions = ['.jpg', '.jpeg', '.png', '.gif']
    if (inputAvatar.value) {
        let extension = (inputAvatar.value.substring(inputAvatar.value.lastIndexOf('.'))).toLoweCase();
        let allowed = false;
        for (let i = 0; i < extensions.length; i++) {
            if (extensions[i] == extension) {
                allowed = true
                break
            }
            
        }
        if (!allowed) {
            errors.push('La extension de archivo no es permitida. Solo se pueden subir archivos con extensiones: ' + extensions.join())
        }
    } -------------------------*/







    if(errors.length > 0){
        event.preventDefault();
        let ulErrors = document.querySelector('div.errors ul');
        for (let i = 0; i < errors.length; i++) {
            ulErrors.innerHTML += '<li>' + errors[i] + '</li>'
        }
    }

    })
/*})*/