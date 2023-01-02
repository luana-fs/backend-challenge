import app from "../app";
import { Request, Response, Router } from "express";
import { connection } from "../connection";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreateUserService";

//aqui instancia o UserRepository. Só pode instanciar uma vez se nao toda vez ele vai criar o constructor do zero.
const userRepository = new UserRepository();

const usersRouter = Router();
usersRouter.get("/", async (req: Request, res: Response) => {
  const users = await userRepository.list();
  res.status(200).send(users);
});

usersRouter.get("/search", async (req: Request, res: Response) => {
  const { email } = req.query;
  const user = await userRepository.findByEmail(email as string);
  res.status(200).send(user);
});

//os endpoins que possuem path variables sempre precisam ficar no final...
usersRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userRepository.findById(Number(id));
  res.status(200).send(user);
});

usersRouter.post("/", async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  //enviamos o repositório que manipula o banco (UserRepository) como parâmetro para o Service que regula as regras.
  const createUserService = new CreateUserService(userRepository);

  //os métodos do service recebem os parâmetros normalmente e individualmente,
  //sem precisar todos parâmetros passar pelo construtor antes.
  createUserService.execute({ name, email, password, role });

  res.status(201).send({ message: "Usuário criado com sucesso" });
});

export default usersRouter;
