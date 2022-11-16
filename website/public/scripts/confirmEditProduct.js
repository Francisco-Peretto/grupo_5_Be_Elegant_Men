const formularioEditProduct = document.querySelector('.formularioEditProduct')

formularioEditProduct.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('Vas a editar este producto. Estas seguro?')){
        formularioEditProduct.submit()
    } else {
        alert('No has realizado ninguna modificacion')
    }
});