import { Header } from "../../js/Header.js";

function init(){
    const header = new Header();
    header.mostrar();
}

document.addEventListener("DOMContentLoaded", init);