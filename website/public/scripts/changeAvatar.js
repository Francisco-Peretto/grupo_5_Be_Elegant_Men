const inputFile = document.querySelector('#avatar')
const imgTag = document.querySelector('#avatarImgID')
const button = document.querySelector('#idButton')

inputFile.addEventListener('change', () => {
  const archivos = inputFile.files;
  const primerArchivo = archivos[0]
  const objectURL = URL.createObjectURL(primerArchivo);

  imgTag.src = objectURL;

  button.classList.add('avatarButton')
});

