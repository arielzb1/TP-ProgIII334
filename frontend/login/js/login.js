
const formulario = document.getElementById("formulario-cliente");
const botonAceptar = document.getElementById("btn-aceptar");
const inputNombre = document.getElementById("nombre-cliente");


botonAceptar.addEventListener("click",()=>
{
    formulario.submit();
});


inputNombre.addEventListener("input",()=>
{
    if(inputNombre.value.trim() !== "")
    {
        inputNombre.style.textAlign = "left";
    }
    else
    {
        inputNombre.style.textAlign = "center";
    }
});



