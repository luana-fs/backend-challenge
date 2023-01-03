import express from "express";
import cors from "cors";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "./swagger.json";

const app = express();
app.use(cors());

//esse middleware transforma os bodys recebidos em json para objeto
app.use(express.json());

//cria o servidor e um link para o swagger, além do arquivo json de config
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

//importa as rotas
app.use(router);

export { app };
