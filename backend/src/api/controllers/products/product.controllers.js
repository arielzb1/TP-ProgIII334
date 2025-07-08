import Products from "../../models/products/product.models.js";

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