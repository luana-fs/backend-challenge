import { userRepository } from "../services";
import { Request, Response } from "express";

const findUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userRepository.findById(Number(id));
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { findUserByIdController };
