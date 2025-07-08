import { Router } from "express";
import { obtenerUsuarios, loguearUsuario } from "../controllers/user.controllers.js";

const router = Router();

///  GET  ///
router.get("/", obtenerUsuarios);

///  POST  ///
router.post('/', loguearUsuario);

export default router;