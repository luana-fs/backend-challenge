import { userRepository } from "../services";
import { Request, Response } from "express";

const findUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userRepository.findById(Number(id));
  res.status(200).send(user);
};

export { findUserByIdController };
