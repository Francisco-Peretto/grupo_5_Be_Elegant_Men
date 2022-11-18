const formularioContact = document.querySelector('.formularioContact')

formularioContact.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('Vas a enviar tu comentario. Estas seguro?')){
        formularioContact.submit()
    } else {
        alert('No has enviado tu comentario')
    }

});