import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { obtenerProductoId, obtenerProdutos, crearProducto , actualizarProducto, eliminarProductoId} from "../controllers/product.controllers.js";

const router = Router();

///  GET  ///
router.get("/", obtenerProdutos);

router.get("/:id", validateId, obtenerProductoId);

/// POST ///
router.post("/", crearProducto)

/// PUT ///
router.put("/", actualizarProducto);

/// DELETE ///
router.delete("/:id", eliminarProductoId)


export default router;