const formDeleteProduct = document.querySelector('#formDeleteProduct')

formDeleteProduct.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('¿Estas seguro que quere eliminar este producto?')){
        formDeleteProduct.submit()
        alert('El producto fue eliminado exitosamente')
    } else {
        alert('El producto no fue eliminado')
    }

});