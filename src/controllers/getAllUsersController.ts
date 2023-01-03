import { userRepository } from "../services";
import { Request, Response } from "express";

const getAllUsersController = async (req: Request, res: Response) => {
  const users = await userRepository.list();
  res.status(200).send(users);
};

export { getAllUsersController };
