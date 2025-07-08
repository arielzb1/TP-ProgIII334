import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { productRoutes, userRoutes, viewRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { __dirname, join } from "./src/api/utils/index.js";


const app = express();
const PORT = environments.port;


app.set("view engine", "ejs");

app.set("views", join(__dirname, "src/views")); 

app.use(express.static(join(__dirname, "src/public")));


app.use(cors());

app.use(express.json());

app.use(loggerUrl);


app.get("/dashboard", (req,res) => {
    res.render("index", {
        title: "HomeGame Admin"
    });
});

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.use("/dashboard", viewRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});