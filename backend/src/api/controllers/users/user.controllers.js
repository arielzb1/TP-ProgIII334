import Users from "../../models/users/user.models.js"

export const obtenerUsuarios = async (req, res) =>{
    try {
        let rows = await Users.seleccionarUsuarios();

        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron usuarios" : "Usuarios encontrados"
        });
    }
    catch(error){
        console.error("Error obteniendo usuarios", error);

        res.status(500).json({
            error: "Error interno del servidor al obtener usuarios"
        });
    }   
}

export const loguearUsuario = async (req, res) =>{
     try {
        let {email, password} = req.body;

        let [rows] = await Users.obtenerUsuarioLogueado(email, password);
        
        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontro usuarios" : "Usuarios encontrados"
        });
    } catch (error) {
        console.error("Error al loguear usuario", error);
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
}

