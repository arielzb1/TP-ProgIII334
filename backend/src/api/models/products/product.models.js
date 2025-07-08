import connection from "../../database/db.js";

const seleccionarProductos = async () => {
    return await connection.query(`SELECT * FROM products`);
}

const seleccionarProductoId = async (id) => {
    return await connection.query(`SELECT * FROM products WHERE id = ?`, [id]);
}

export default{
    seleccionarProductos,
    seleccionarProductoId
}