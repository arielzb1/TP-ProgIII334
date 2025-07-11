import connection from "../database/db.js";

const seleccionarUsuarios = async () => {
    return await connection.query(`SELECT * FROM users`);
}

const obtenerUsuarioLogueado = async (email, password) => {
    return await connection.query(`SELECT * FROM users WHERE email = ? AND password = ?`, 
                                   [email, password]);
}

export default {
    seleccionarUsuarios,
    obtenerUsuarioLogueado
}