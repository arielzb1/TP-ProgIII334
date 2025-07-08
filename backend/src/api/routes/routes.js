import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { obtenerProductosId, obtenerProdutos } from "../controllers/products/product.controllers.js";
import { obtenerUsuarios } from "../controllers/users/user.controllers.js";

const router = Router();

///  GET  ///

router.get("/products/", obtenerProdutos);

router.get("/products/:id", validateId, obtenerProductosId);

router.get("/users/", obtenerUsuarios);

export default router;