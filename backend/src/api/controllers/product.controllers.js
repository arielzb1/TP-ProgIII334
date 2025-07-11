import Products from "../models/product.models.js";

export const obtenerProdutos = async (req, res) =>{
    try {
        // extrae las filas
        let [rows] = await Products.seleccionarProductos();

        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron produtos" : "Produtos encontrados"
        });
    }
    catch(error){
        console.error("Error obteniendo productos", error);

        res.status(500).json({
            error: "Error interno del servidor al obtener productos"
        });
    }   
}

export const obtenerProductoId = async (req, res) => {
    try {
        let {id} = req.params;

        let [rows] = await Products.seleccionarProductoId(id);

        if (rows.length === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.status(200).json({
            payload: rows[0],
            message: "Producto encontrado"
        });
    } catch (error) {
        console.error("Error obteniendo producto por ID", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
}

export const crearProducto = async(req, res) =>{
    try{
        let {nombre, descripcion, precio, img, categoria, stock} = req.body;
    
        if(!nombre || !descripcion || !precio || !img || !stock){
            return req.status(400).json({
                message: "Datos invalidados. Asegurate de enviar todo correctamente."
            })
        }

        let [rows] = await Products.ingresarNuevoProducto(nombre, descripcion, precio, img, categoria, stock);

        res.status(201).json({
            message: "Producto creado con exito",
            productId: rows.insertId
        })

    }catch{
        console.error(error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
}

export const actualizarProducto = async(req,res) => {
    try{
        let {id, nombre, descripcion, precio, img, categoria, stock} = req.body;

        if(!nombre || !descripcion || !precio || !img || !stock){
            return res.status(400).json({
                message: "faltan campos requeridos"
            });
        }

        let [result] = await Products.actualizarProducto(id, nombre, descripcion, precio, img, categoria, stock);
    
        res.status(200).json({
            message: "Producto actualizado correctamente"
        });
    }catch(error){
        console.error("Error al actualizar el producto", error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        });
    }
}

export const eliminarProductoId = async(req,res) =>{
    try{
        let {id} = req.params;

        if(!id){
            return res.status(400).json({
                message: "Se requiere un id para eliminar un producto"
            })
        }

        let [result] = await Products.eliminarProducto(id);

        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un producto con id ${id}`
            })
        }

        return res.status(200).json({
            messsage: `Producto con id ${id} eliminado correctamente`
        })
    }catch(error){
        console.error("Error con DELETE /products/:id", error);

        res.status(500).json({
            message: `Error al aleiminar un producto con id ${id}`, error,
            error: error.message
        });
    }
}