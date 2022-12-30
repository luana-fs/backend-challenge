import app from "../app";
import { Request, Response, Router } from "express";
import { connection } from "../connection";
import { UserRepository } from "../repositories/UserRepository";

const usersRouter = Router();
usersRouter.get("/", async (req: Request, res: Response) => {
  const users = await connection("user");
  res.status(200).send(users);
});

usersRouter.post("/", async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const user = await UserRepository.create({ name, email, password, role });
  // await connection("user").insert({ name, email, password, id_role: role });
  res.status(201).send({ message: "Usuário criado com sucesso", user });
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const [user] = await UserRepository.findById(Number(id));
  res.status(200).send(user);
});
export default usersRouter;
