const formularioEditProduct = document.querySelector('.formularioEditProduct')

formularioEditProduct.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('Vas a editar este producto. Estas seguro?')){
        formularioEditProduct.submit()
        alert('El producto fue editado exitosamente')
    } else {
        alert('No has realizado ninguna modificacion')
    }
});