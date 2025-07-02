export class Header{    
    mostrar(){
        const contenedorPrimario = document.getElementById("header-top");

        contenedorPrimario.innerHTML = `
            <nav> 
                <a href="../main/index.html"> 
                    <img class="img-icon" src="../img/icon/icon-with-text.png" alt="Logo HoGame">
                </a>
            </nav>        

            <input type="text" placeholder="Buscar productos" class="barra-busqueda">

            <div id="contenedor-iconos">
                <div id="icon-user">
                    <img class="img-icon-user" src="../img/icon/user.png" alt="icon user">
                    <p class="text-icon-user">Cuenta</p>
                </div>

                <div id="icon-carrito">
                    <img class="img-icon-carrito" src="../img/icon/carrito.png" alt="icon carrito">
                    <p class="text-icon-carrito">Carrito</p>
                </div>
            </div>`;

        const contenedorSecundario = document.getElementById("header-bot");

        contenedorSecundario.innerHTML = `
            <nav id="listado-opciones">
                <p1 id="opcion-armatupc">Arma tu PC</p1>
                <p1 id="opcion-hadware">Hadware</p1>
                <p1 id="opcion-perisfericos">Perisfericos</p1>
                <p1 id="opcion-notebooks">Notebooks</p1>
                <p1 id="opcion-monitores">Monitores</p1>
                <p1 id="opcion-vertodo">Ver todo</p1>
            </nav>`;
    }
}