/*este sea como el nombre que le demos para poder subir y que se miestren los pdf asi que tambien solo se puede subir uno */
document.querySelector('#pdffFile').addEventListener('change', () =>{
    pdffFile = document.querySelector('#pdffFile').files[0];
    document.querySelector('#vistaPrevia').setAttribute('src', pdffFileURL);
})