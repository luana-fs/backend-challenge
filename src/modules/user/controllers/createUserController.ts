import { createUserService } from "../services";
import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  //enviamos o repositório que manipula o banco (UserRepository) como parâmetro para o Service que regula as regras.

  //o userRepository já foi enviado como parametro do service lá no índice
  createUserService.execute({ name, email, password, role });

  res.status(201).send({ message: "Usuário criado com sucesso" });
};

export { createUserController };
