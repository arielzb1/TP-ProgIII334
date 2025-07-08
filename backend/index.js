import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { routes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";

const app = express();
const PORT = environments.port;


app.use(cors());

app.use(express.json());

app.use(loggerUrl);

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})