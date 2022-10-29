const formDeleteUser = document.querySelector('#formDeleteUser')

formDeleteUser.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('¿Estas seguro que quere eliminar el usuario?')){
        formDeleteUser.submit()
        alert('El usuario fue eliminado exitosamente')
    } else {
        alert('Gracias por quedarte')
    }

});