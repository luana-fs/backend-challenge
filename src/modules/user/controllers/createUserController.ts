import { createUserService } from "../services";
import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    //enviamos o repositório que manipula o banco (UserRepository) como parâmetro para o Service que regula as regras.
    //o userRepository já foi enviado como parametro do service lá no índice
    await createUserService.execute({
      name,
      email,
      password,
      confirmPassword,
      role,
    });

    return res.status(201).send({ message: "Created" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { createUserController };
