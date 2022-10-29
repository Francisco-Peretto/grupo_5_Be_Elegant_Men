const formDeleteUser = document.querySelector('#formDeleteUser')

formDeleteUser.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('¿Estas seguro que quere eliminar el usuario?')){
        formDeleteUser.submit()
    } else {
        alert('Gracias por quedarte')
    }

});