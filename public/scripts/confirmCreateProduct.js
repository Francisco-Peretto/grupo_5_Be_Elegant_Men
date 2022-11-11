const formularioCreateProduct = document.querySelector('.formularioCreateProduct')

formularioCreateProduct.addEventListener('submit', (event) => {
    event.preventDefault()
    if (confirm('Vas a crear un nuevo producto. Estas seguro?')){
        formularioCreateProduct.submit()
    } else {
        alert('No has creado ningun producto')
    }

});