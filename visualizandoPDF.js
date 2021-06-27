    let pdffFile 
    let pdffFileURL 
document.querySelector('#pdffFile').addEventListener('change', () =>{
 
    pdffFile = document.querySelector('#pdffFile').files[0];
    pdffFileURL = URL.createObjectURL(pdffFile);
    
    document.querySelector('#vistaPrevia').setAttribute('src', pdffFileURL);
  
})

/* en esta partece le pertenecen a las validaciones que solo se puede subir archivos pdf y si otro otro saldra una 
alerta la cual le dira que se asegure que sea un archivo pdf */
function validarExt(){
    var pdffFile = document.getElementById('pdffFile');
    var archivoRuta = pdffFile.value;
    var extPermitidas = /(.pdf)$/i;

if(!extPermitidas.exec(archivoRuta)){
    alert('Asegurate de haber selecconado un PDF');
    pdffFile.value='';
    return false;
}

else{
    if(pdffFile.files && pdffFile.files[0]){
        var visor = new FileReader();
        visor.onload=function(e){
            //document.getElementById('visorArchivo').innerHTML= 
            //'<embed src="'+e.target.result+'" >';
        }
        visor.readAsDataURL(pdffFile.files[0]);
    }
}
}