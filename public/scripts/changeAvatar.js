const inputFile = document.querySelector('#avatar')
const imgTag = document.querySelector('#avatarImgID')

inputFile.addEventListener('change', () => {

  console.log(inputFile)
  const archivos = inputFile.files;
  const primerArchivo = archivos[0]
  const objectURL = URL.createObjectURL(primerArchivo);

  imgTag.src = objectURL;
});

