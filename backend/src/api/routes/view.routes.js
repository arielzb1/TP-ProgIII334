import { Router } from "express";
import { vistaConsultar, vistaCrear, vistaEliminar, vistaIndex, vistaModificar } from "../controllers/view.controllers.js";

const router = Router();

// Get //
router.get("/", vistaIndex);

router.get("/consultar", vistaConsultar);

router.get("/crear", vistaCrear);

router.get("/editar", vistaModificar);

router.get("/eliminar", vistaEliminar);


export default router;