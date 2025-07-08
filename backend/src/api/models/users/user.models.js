import connection from "../../database/db.js";

const seleccionarUsuarios = async () => {
    let sql = `SELECT * FROM users`;

    return await connection.query(sql);
}

export default {
    seleccionarUsuarios
}