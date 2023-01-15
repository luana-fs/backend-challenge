import { Request, Response } from "express";
import { deleteProductService } from "../services";

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const auth = req.headers.auth as string;

    const product = await deleteProductService.execute({ id, auth });
    return res.status(200).send({ product });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { deleteProductController };
