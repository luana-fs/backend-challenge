import { userRepository } from "../services";
import { Request, Response } from "express";

const getAllUsersController = async (req: Request, res: Response) => {
  const { email } = req.query;
  if (email) {
    const user = await userRepository.findByEmail(email as string);
    return res.status(200).send(user);
  }
  const users = await userRepository.list();
  return res.status(200).send(users);
};

export { getAllUsersController };
