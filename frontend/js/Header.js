export class Header{    
    mostrar(){
        const contenedorPrimario = document.getElementById("header-top");

        contenedorPrimario.innerHTML = `
            <nav> 
                <a href="./index.html"> 
                    <img class="img-icon" src="./img/icon/icon-with-text.png" alt="Logo HoGame">
                </a>
            </nav>        

            <input type="text" placeholder="Buscar productos" class="barra-busqueda">

            <div id="contenedor-iconos">
                <div id="icon-user">
                    <img class="img-icon-user" src="./img/icon/user.png" alt="icon user">
                    <p class="text-icon-user">Cuenta</p>
                </div>

                <div id="icon-carrito">
                    <img class="img-icon-carrito" src="./img/icon/carrito.png" alt="icon carrito">
                    <p class="text-icon-carrito">Carrito</p>
                </div>
            </div>`;

        const contenedorSecundario = document.getElementById("header-bot");

        contenedorSecundario.innerHTML = `
            <nav id="listado-opciones">
            <ul>
            <a href="" id="opcion-armatupc">
                <tr><span>Arma tu PC</span></tr>
            </a>
            <a href="" id="opcion-hadware">
                <tr><span>Hadware</span></tr>
            </a>
            <a href="" id="opcion-perisfericos">
                <tr><span>Perisfericos</span></tr>
            </a>
            <a href="" id="opcion-notebooks">
                <tr><span>Notebooks</span></tr>
            </a>
            <a href="" id="opcion-monitores">
                <tr><span>Monitores</span></tr>
            </a>
            <a href="productos.html" id="opcion-vertodo">
                <tr><span>Ver todo</span></tr>
            </a>
            </ul>
            </nav>`;
    }
}