import { findProductService, productRepository } from "../services";
import { Request, Response } from "express";

const findProductByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const auth = req.headers.auth as string;

    const product = await findProductService.execute({ id, auth });
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { findProductByIdController };
