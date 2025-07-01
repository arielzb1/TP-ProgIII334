function detectarIconoUsuario(){
    document.getElementById("icon-user").addEventListener("click",()=>{cambiarVentana("../login/login.html");});
};

function cambiarVentana(direccion){
    window.location.href = direccion;
}

function init(){
    detectarIconoUsuario();
}

/* Que se cargue el codigo despues de iniciar la pagina */
document.addEventListener("DOMContentLoaded", init);