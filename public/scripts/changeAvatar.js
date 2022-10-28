/* OPCION 1 */

document.getElementById('avatar').addEventListener('click', function () {
    document.getElementById('avatarImgID').src = document.getElementById('avatar').value;
});

/* OPCION 2 */

const inputFile = document.querySelector('#avatar')
const imgTag = document.querySelector('#avatarImgID')

inputFile.addEventListener('change', () => {

  const archivos = inputFile.files;
  const primerArchivo = archivos[0]
  const objectURL = URL.createObjectURL(primerArchivo);

  imgTag.src = objectURL;
});

