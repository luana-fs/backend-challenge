import {
  editUserService,
  findUserByIdService,
  userRepository,
} from "../services";
import { Request, Response } from "express";

const editUserController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, email, role } = req.body;
    const auth = req.headers.auth as string;

    const user = await editUserService.execute({ id, auth, name, email, role });
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { editUserController };
