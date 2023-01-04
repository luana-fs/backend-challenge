import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();
app.use(cors());

//esse middleware transforma os bodys recebidos em json para objeto
app.use(express.json());

//importa as rotas
app.use(router);

export { app };
