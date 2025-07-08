import Users from "../../models/users/user.models.js"

export const obtenerUsuarios = async (req, res) =>{
    try {
        let [rows] = await Users.seleccionarUsuarios();

        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se enontraron usuarios" : "Usuarios enontrados"
        });
    }
    catch(error){
        console.error("Error obteniendo usuarios", error);

        res.status(500).json({
            error: "Error interno del servidor al obtener usuarios"
        });
    }   
}