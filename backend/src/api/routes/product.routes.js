import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { obtenerProductoId, obtenerProdutos } from "../controllers/product.controllers.js";

const router = Router();

///  GET  ///
router.get("/", obtenerProdutos);

router.get("/:id", validateId, obtenerProductoId);

export default router;