import { findUserByIdService, userRepository } from "../services";
import { Request, Response } from "express";

const findUserByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const auth = req.headers.auth as string;

    const user = await findUserByIdService.execute({ id, auth });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { findUserByIdController };
