import { signUpService, userRepository } from "../services";
import { Request, Response } from "express";

const signUpController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await signUpService.execute({ email, password });

  return res.status(200).send({ token: token });
};

export { signUpController };
