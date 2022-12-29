import app from "../app";
import { Request, Response, Router } from "express";
import { connection } from "../connection";

const usersRouter = Router();
usersRouter.get("/", async (req: Request, res: Response) => {
  const users = await connection("user");
  res.status(200).send(users);
});

usersRouter.post("/", async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  await connection("user").insert({ name, email, password, id_role: role });
  res.status(201).send("Usuário criado com sucesso");
});

export default usersRouter;
