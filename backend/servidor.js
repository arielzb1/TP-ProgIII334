
const express = require("express");
const cors = require("cors");




const app = express();

const port = 3000;



// Habilito cors para todas las rutas/origenes

app.use(cors());

// Haciendo uso de otros middlewares

app.use(express.urlencoded({extended:true}));

app.use(express.json());



app.post("/datosFormulario",(req,res)=>
{
  
  console.log(req.body);

  

  // Redireccion al dashboard...
  // res.redirect("http://localhost:5501/login/login.html");


});



app.listen(port,()=>
{
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


