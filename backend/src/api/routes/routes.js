import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { obtenerProductoId, obtenerProdutos } from "../controllers/products/product.controllers.js";
import { obtenerUsuarios, loguearUsuario } from "../controllers/users/user.controllers.js";

const router = Router();

///  GET  ///

router.get("/products", obtenerProdutos);

router.get("/products/:id", validateId, obtenerProductoId);

router.get("/users", obtenerUsuarios);

router.post('/users', loguearUsuario);

export default router;