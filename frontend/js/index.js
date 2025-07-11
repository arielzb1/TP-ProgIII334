import { Header } from "./Header.js";

function detectarIconoUsuario(){
    document.getElementById("icon-user").addEventListener("click",()=>{cambiarVentana("../login/login.html");});
};

function detectarIconoCarrito(){
    document.getElementById("icon-carrito").addEventListener("click",()=>{cambiarVentana("../carrito/carrito.html");});
}


function detectarIconos(){
    detectarIconoUsuario();
    detectarIconoCarrito();
}

function cambiarVentana(direccion){
    window.location.href = direccion;
}

function init(){
    const header = new Header();
    header.mostrar();
    detectarIconos();
}


init();