import express, { Request, Response } from "express";
import cors from "cors";
import usersRouter from "./routes/users";

const app = express();
app.use(cors());

//esse middleware transforma os bodys recebidos em json para objeto
app.use(express.json());

app.use("/users", usersRouter);

export default app;
