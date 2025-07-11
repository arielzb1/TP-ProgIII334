import connection from "../database/db.js";

const seleccionarProductos = async () => {
    return await connection.query(`SELECT * FROM products`);
}

const seleccionarProductoId = async (id) => {
    return await connection.query(`SELECT * FROM products WHERE id = ?`, 
                                   [id]);
}

const ingresarNuevoProducto = async (nombre, descripcion, precio, img, categoria, stock) => {
    return await connection.query('INSERT INTO products (nombre, descripcion, precio, img, categoria, stock) VALUES (?, ?, ?, ?, ?, ?)', 
                                [nombre, descripcion, precio, img, categoria, stock]);
}

const actualizarProducto = async (id, nombre, descripcion, precio, img, categoria, stock) =>{
    return await connection.query(`UPDATE products
                                   SET nombre = ?, descripcion = ?, precio = ?, img = ?, categoria = ?, stock = ?
                                   WHERE id = ?`, 
                                   [nombre, descripcion, precio, img, categoria, stock, id]);
}

const eliminarProducto = async (id) => {
    return await connection.query('DELETE FROM products WHERE id = ?', 
                                   [id]);
}

export default{
    seleccionarProductos,
    seleccionarProductoId,
    ingresarNuevoProducto,
    actualizarProducto,
    eliminarProducto
}