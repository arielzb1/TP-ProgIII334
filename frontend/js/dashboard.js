// peticion get para obtener los Productos Disponibles

const seccionProductos = document.querySelector(".seccion-productos");

const btnEliminar = document.getElementById("btn-eliminarProducto");
const btnModificar = document.getElementById("btn-modificarProducto");
const contenedor = document.getElementById("contenedorBotones");
const formularioAlta = document.getElementById("formulario-alta");


const modal = document.getElementById("modal");



formularioAlta.addEventListener("submit",(e)=>
{
  e.preventDefault();

  const nuevoProducto =
  {
    nombreProducto: formularioAlta.nombre.value,
    precioProducto: formularioAlta.precio.value,
    urlProducto: formularioAlta.url.value
  };

  fetch("http://localhost:3000/formularioAlta",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      
    },
    body: JSON.stringify(nuevoProducto)

  })
  .then(res => res.json())
  .then(datos =>{
    console.log("Producto agregado",datos);
  
    // Se cierra el modal
    modal.style.display = "none";

    // Se limpia el formulario
    formularioAlta.reset();
  
    cargarProductos();

  
  });

  

});

// Funcion para cargar los productos


function cargarProductos()
{

  // Vaciar el contenedor antes de mostrar los productos
  seccionProductos.innerHTML = "";


  fetch("http://localhost:3000/productos")
  .then(datos => datos.json())
  .then(datos => {

    // Mostrar los productos disponibles 

    datos.forEach(producto=>
    {
      seccionProductos.innerHTML += `<div class="producto">

        <div class="texto-contenedor">

          <h1>${producto.nombreProducto}</h1>
          <p>$${producto.precioProducto}</p>

        </div>
        
        <div class="img-contenedor">
          <img class="img-producto" src="${producto.urlProducto}" alt="img">

        </div>

      </div>`;
    });

    seccionProductos.insertAdjacentHTML('beforeend', `
    <button id="btn-agregarProducto">AGREGAR PRODUCTO</button>
    <button id="btn-eliminarProducto">ELIMINAR PRODUCTO</button>
    <button id="btn-modificarProducto">MODIFICAR PRODUCTO</button>
  `);
    
  const btnAgregar = document.getElementById("btn-agregarProducto");


  btnAgregar.addEventListener("click",()=>
  {
    modal.style.display = "flex";

        

  });


});

  

}



cargarProductos();



    



// // Funcion para agregar un producto
// function agregarProducto()
// {
//   // se abre el formulario de alta

  

// }

// function removerProducto()
// {
  
// }

// function modificarProducto()
// {



// }



