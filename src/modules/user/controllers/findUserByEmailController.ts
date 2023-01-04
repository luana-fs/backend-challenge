import { userRepository } from "../services";
import { Request, Response } from "express";

const findUserByEmailController = async (req: Request, res: Response) => {
  const { email } = req.query;
  const user = await userRepository.findByEmail(email as string);
  res.status(200).send(user);
};

export { findUserByEmailController };
