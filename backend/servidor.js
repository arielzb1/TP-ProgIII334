
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const conexion = mysql.createConnection({
  host: "localhost",
  user: "adzora",
  password: "adz0ra",
  database: "autoservicioProductos"
});

const app = express();

const port = 3000;



// Habilito cors para todas las rutas/origenes

app.use(cors());

// Haciendo uso de otros middlewares

app.use(express.urlencoded({extended:true}));

app.use(express.json());


conexion.connect(error =>
{
  if(error)
  {
    console.log("Error de conexion:",error.stack);
    return;
  }

  console.log("Conectado a la base de datos");
  
  app.get("/productos",(req,res)=>
  {
    //hago una consulta a mi servidor mysql

    conexion.query("SELECT * FROM productosDisponibles",(error,resultados)=>
    {
      if(error)
      {
        console.log(error);
      }

      
      res.json(resultados); 

    
    
    });


  });
  
  app.post("/datosFormulario",(req,res)=>
  {
    console.log(req.body);

    // Redireccion al dashboard...
    res.redirect("http://localhost:5501/login/login.html");
  });

  app.post("/formularioAlta",(req,res)=>
  {
    // Hacer una consulta para agregar el producto al db.
    let datos = req.body;
    let nombre = datos["nombreProducto"];
    let precio = datos["precioProducto"];
    let url = datos["urlProducto"];

    const precioParseado = parseFloat(precio);

    conexion.query(`INSERT INTO productosDisponibles(nombreProducto,precioProducto,urlProducto) VALUES(?,?,?)`,
      [nombre,precioParseado,url],(error,resultados)=>
      {
        if(error)
        {
          console.error("Error al insertar:",error);
          return;

        }
        res.json({mensaje:"Producto insertado correctamente"});
      }
    );

     

  });

  

});





app.listen(port,()=>
{
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


