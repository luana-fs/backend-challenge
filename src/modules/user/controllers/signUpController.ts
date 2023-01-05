import { signUpService } from "../services";
import { Request, Response } from "express";

const signUpController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await signUpService.execute({ email, password });
    return res.status(200).send({ token: token });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { signUpController };
