const formDeleteProduct = document.querySelector('#formDeleteProduct')

formDeleteProduct.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('¿Estas seguro que quere eliminar este producto?')){
        formDeleteProduct.submit()
    } else {
        alert('El producto no fue eliminado')
    }

});