// Crear el servidor 


const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require('querystring');
const { Z_ASCII } = require("zlib");
const mysql = require("mysql2");
const { setHeapSnapshotNearHeapLimit } = require("v8");


// Productos declarados en el backend 

// comento el primer objeto porque ya esta diseñado en el HTML
let productos = [
    // {nombre:"Samsung Galaxy A30",precio:145000,img:"https://gofix.com.ar/wp-content/uploads/2022/01/A30-equipo.jpg"},
    {nombre:"Samsung Galaxy A80",precio:350000,img:"https://images.samsung.com/is/image/samsung/ar-galaxy-a80-a805-sm-a805fzklaro-frontblack-171368368?$624_624_PNG$"},
    {nombre:"Motorola Moto G73",precio:620000,img:"https://images.fravega.com/f1000/4653be6859a8e3472c6e9d2292cf3ca9.jpg"},
    {nombre:"Iphone 15 Pro Max",precio:255000,img:"https://tienda.personal.com.ar/images/320/webp/i_Phone_15_Pro_Max_256_GB_Black_Titanium_10c02db62e.png"},
    {nombre:"Cargador Galaxy A30",precio:29300,img:"https://http2.mlstatic.com/D_NQ_NP_770796-MLU54970593958_042023-O.webp"},
    {nombre:"Cargador Iphone 15 Pro Max",precio:70000,img:"https://http2.mlstatic.com/D_NQ_NP_836461-MLA71952197865_092023-O.webp"}
];


// Configuracion de la base de datos 

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    // IMPORTANTE : cambiar la contraseña del servidor mysql !
    password: "osopeludo123",
    database: "escuela",
    port: 3306
});


conexion.connect((error)=>
{
    if(error)
    {
        console.log("Error al conectar:",error);
        return;
    }
    
    console.log("conectado a MySQL!");

    
    const server = http.createServer((req,res)=>{
    
        
        let filePath = "";
        // si se recibe una peticion get y la url es / o /login
        if (req.method === "GET" && (req.url === "/" || req.url === "/login.html")) {

            // crear una variable con la ruta del archivo a servir
            
            filePath = path.join(__dirname, "login.html");

            fs.readFile(filePath, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "type/plain" });
                    res.end("Error interno del servidor");

                }

                else {

                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(data);
                }

            });
        }
        else if(req.method === "POST" && req.url === "/validar")
        {
            let body = "";
            req.on("data",chunk=>
            {
                body += chunk.toString();
            });
    
            req.on("end",()=>
            {   
                // Se hace uso del metodo parse del modulo 'querystring'
                // Sirve para convertir un string a un objeto
                const datos = querystring.parse(body);
    
                // obtengo el nombre del cliente que esta como objeto y lo guardo
                // en una constante 'nombreCliente'
                const nombreCliente = datos["nombre-backend"];
    
    
                // Se tendria que hacer validaciones aca del valor recibido
                // nombre.
    
                // validaciones ... 
    
                // se devuelve una pagina web 'productos.html'
    
                const filePath = path.join(__dirname,"productos.html");
    
                fs.readFile(filePath,(error,data)=>
                {
                    if(error)
                    {
                        res.writeHead(500,{"Content-Type":"type/plain"});
                        res.end("Error interno del servidor");
                    }
    
                    res.writeHead(200,{"Content-Type":"text/html"});
                    res.end(data);
                    
                    
    
                });
    
                
            });
    
            
        }

        else if (req.method === "GET" && req.url === "/login.css") 
        {

            const patchCss = path.join(__dirname, "login.css");

            fs.readFile(patchCss, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error al cargar el archivo CSS");
                }

                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);


            });


        }

        // Codigo para servir el archivo js y cargarlo en el navegador 
        else if (req.method === "GET" && req.url === "/login.js") {

            const pathJS = path.join(__dirname, "login.js")
            ;

            fs.readFile(pathJS, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error al cargar el archivo JS");
                }

                res.writeHead(200, { "Content-Type": "application/javascript" });
                res.end(data);
            });
        }

        // Sirve el archivo productos.css
        else if (req.method === "GET" && req.url === "/productos.css") {
            const pathJS = path.join(__dirname, "productos.css");

            fs.readFile(pathJS, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error al cargar el archivo JS");
                }

                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            });
        }

        // Para responder a la peticion emitida por el frontend y entregar
        // el objeto 'productos'
        else if (req.method === "GET" && req.url === "/productos") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(productos));

        }


        // sirviendo el archivo 'productos.js'
        else if (req.method === "GET" && req.url === "/productos.js") {
            const pathJS = path.join(__dirname, "productos.js");

            fs.readFile(pathJS, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error al cargar el archivo JS");
                }

                res.writeHead(200, { "Content-Type": "application/javascript" });
                res.end(data);
            });
        }


        else if (req.method === "GET" && req.url === "/carrito.html") {
            const pathCarrito = path.join(__dirname, "carrito.html");

            fs.readFile(pathCarrito, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error al cargar el archivo HTML");
                }

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });


        }

        else if (req.method === "GET" && req.url === "/carrito.css") {
            const pathJS = path.join(__dirname, "carrito.css");

            fs.readFile(pathJS, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error al cargar el archivo JS");
                }

                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            });
        }
        
    
        if (req.method === "POST" && req.url === "infoProductos") {
            let body = "";
            req.on("data", chunk => {
                body += chunk.toString();
            });

            req.on("end", () => {
                const datos = JSON.parse(body);

                console.log(datos);
                // const nombreProducto = datos["nombreProducto"];
                // conexion.query("INSERT INTO carritoProductos(nombreProducto,precioProducto) VALUES(",(error,resultados)=>
                // {
                //     if(error)
                //     {
                //         console.log("Error en la consulta:",error);
                //         return;
                //     }
                //     console.log("resultados: ",resultados);



                // });


            });

        }

    });

          
    const puerto = 5000;

    server.listen(puerto, () => {
        console.log(`Servidor escuchando en http://localhost:${puerto}`);

    });



});
    








